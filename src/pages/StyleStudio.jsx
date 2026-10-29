import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useLenis } from 'lenis/react';
import OutfitCard from '../components/OutfitCard';
import SectionHeading from '../components/SectionHeading';
import StyleForm from '../components/StyleForm';
import useDocumentTitle from '../hooks/useDocumentTitle';
import { clothing, colors, labelFor, occasions, styles } from '../data/options';
import { preferenceSignature, recommend, styleNoteFor } from '../lib/recommend';
import { firstInvalidField, isAllowed, validateStyleForm } from '../lib/validate';

const emptyValues = {
  occasion: '',
  style: '',
  color: '',
  clothing: '',
  note: '',
};

export default function StyleStudio() {
  useDocumentTitle('AI Styling');
  const [params] = useSearchParams();
  const prefillKey = params.toString();
  const lenis = useLenis();
  const [values, setValues] = useState(emptyValues);
  const [errors, setErrors] = useState({});
  const [attempted, setAttempted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [carried, setCarried] = useState(false);
  const resultsRef = useRef(null);
  const timerRef = useRef(0);

  useEffect(() => {
    if (!prefillKey) return;
    const search = new URLSearchParams(prefillKey);
    let carriedAny = false;
    setValues((current) => {
      const next = { ...current };
      for (const field of ['occasion', 'style', 'color', 'clothing']) {
        const value = search.get(field);
        if (isAllowed(field, value)) {
          next[field] = value;
          carriedAny = true;
        }
      }
      return next;
    });
    setCarried(carriedAny);
  }, [prefillKey]);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  function onChange(name, value) {
    const next = { ...values, [name]: value };
    setValues(next);
    if (attempted) setErrors(validateStyleForm(next));
  }

  function compose(offset) {
    const nextErrors = validateStyleForm(values);
    setErrors(nextErrors);
    setAttempted(true);
    if (Object.keys(nextErrors).length > 0) {
      const field = firstInvalidField(nextErrors);
      if (field === 'note') document.getElementById('style-note')?.focus();
      else document.querySelector(`input[name="${field}"]`)?.focus();
      return;
    }

    setLoading(true);
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setResult(recommend(values, offset));
      setLoading(false);
      if (resultsRef.current) {
        if (lenis) lenis.scrollTo(resultsRef.current, { offset: -112 });
        else resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 700);
  }

  function onSubmit(event) {
    event.preventDefault();
    const signature = preferenceSignature(values);
    const offset = result && result.signature === signature ? result.nextOffset : 0;
    compose(offset);
  }

  const signature = preferenceSignature(values);
  const stale = Boolean(result && result.signature !== signature);
  const summary = [
    labelFor(occasions, values.occasion),
    labelFor(styles, values.style),
    labelFor(colors, values.color),
    labelFor(clothing, values.clothing),
  ].filter(Boolean);

  return (
    <div className="page-wrap py-12 md:py-16">
      <div className="max-w-3xl">
        <SectionHeading
          as="h1"
          kicker="AI styling"
          title="Compose a look."
          text="Choose the occasion, the style, a color story, and the clothes you want on your body. Velquin answers from the house edit — nothing is sent to a server."
        />
      </div>

      <div className="mt-12 grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="border border-line bg-ivory p-5 sm:p-7 lg:sticky lg:top-24 lg:col-span-5">
          {carried && (
            <p className="mb-6 border border-line bg-paper px-4 py-3 text-sm leading-relaxed text-stone">
              Preferences were carried over from a look you opened. Change anything, then generate.
            </p>
          )}
          <StyleForm
            values={values}
            errors={errors}
            onChange={onChange}
            onSubmit={onSubmit}
            loading={loading}
          />
        </div>

        <div className="scroll-mt-28 lg:col-span-7" ref={resultsRef}>
          <div className="sr-only" aria-live="polite">
            {loading ? 'Composing your look.' : result ? `${result.picks.length} looks ready.` : ''}
          </div>

          {!result && !loading && (
            <div className="flex min-h-[420px] flex-col justify-end border border-dashed border-line p-6 md:p-10">
              <p className="kicker">Waiting</p>
              <h2 className="display mt-3 text-4xl md:text-5xl">Your look is still on the rail.</h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-stone">
                Select an occasion, a style, a color, and a clothing preference. Then press Generate New Look. If you want another direction, press it again.
              </p>
            </div>
          )}

          {loading && (
            <div className="grid gap-6 lg:grid-cols-2" aria-hidden="true">
              <div className="h-[420px] bg-sand motion-safe:animate-pulse lg:col-span-2" />
              <div className="h-72 bg-sand motion-safe:animate-pulse" />
              <div className="h-72 bg-sand motion-safe:animate-pulse" />
            </div>
          )}

          {result && !loading && (
            <div>
              <p className="kicker">Composed for</p>
              <h2 className="display mt-3 text-4xl md:text-5xl">{summary.join(' · ')}</h2>
              {values.note.trim() && (
                <blockquote className="mt-4 border-l-2 border-bronze pl-4 text-sm italic leading-relaxed text-stone">
                  {values.note.trim()}
                </blockquote>
              )}
              {result.exact && (
                <p className="mt-4 text-sm leading-relaxed text-stone">
                  Exact match — clothing, color, style, and occasion all lined up.
                </p>
              )}
              {result.strong && !result.exact && (
                <p className="mt-4 text-sm leading-relaxed text-stone">
                  Strong match on clothing and color
                  {result.missing.length > 0 ? `, with ${result.missing.join(' and ')} softened` : ''}.
                </p>
              )}
              {result.partial && (
                <p className="mt-4 text-sm leading-relaxed text-stone">
                  Closest looks for your clothing and color. The house edit does not hold a full four-way match yet.
                </p>
              )}
              {result.relaxed && (
                <p className="mt-4 text-sm leading-relaxed text-stone">
                  No full alignment in the edit. These are the nearest compositions Velquin can compose.
                </p>
              )}
              {stale && (
                <p className="mt-4 text-sm text-bronze">
                  These looks follow your last composition. Generate New Look to use the updated preferences.
                </p>
              )}
              <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2">
                {result.picks.map((pick) => (
                  <OutfitCard
                    key={`${pick.outfit.id}-${result.nextOffset}`}
                    outfit={pick.outfit}
                    reason={pick.reasons}
                    score={pick.hitCount}
                    featured={pick.lead}
                    styleNote={pick.lead ? styleNoteFor(values, pick.outfit) : undefined}
                  />
                ))}
              </div>
              <button
                type="button"
                className="btn-line mt-8"
                onClick={() => compose(result.signature === signature ? result.nextOffset : 0)}
                disabled={loading}
              >
                Generate New Look
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
