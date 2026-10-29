import { clothing, colors, occasions, styles } from '../data/options';

function ChoiceGroup({ legend, name, options, value, onChange, error, swatches = false }) {
  return (
    <fieldset>
      <legend className="text-sm font-medium text-ink">{legend}</legend>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option.id} className="relative inline-flex cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.id}
              checked={value === option.id}
              onChange={() => onChange(name, option.id)}
              className="peer sr-only"
              aria-invalid={error ? true : undefined}
              aria-describedby={error ? `${name}-error` : undefined}
            />
            <span className="inline-flex items-center rounded-full border border-line bg-ivory px-3.5 py-2 text-[0.82rem] text-ink transition duration-300 peer-checked:border-ink peer-checked:bg-ink peer-checked:text-ivory peer-focus-visible:ring-2 peer-focus-visible:ring-bronze peer-focus-visible:ring-offset-2 hover:border-ink">
              {swatches && (
                <span
                  className="mr-2 h-2.5 w-2.5 rounded-full border border-ink/15"
                  style={{ background: option.hex }}
                  aria-hidden="true"
                />
              )}
              {option.label}
            </span>
          </label>
        ))}
      </div>
      {error && (
        <p id={`${name}-error`} className="mt-2 text-sm text-garnet" role="alert">
          {error}
        </p>
      )}
    </fieldset>
  );
}

export default function StyleForm({ values, errors, onChange, onSubmit, loading }) {
  const noteLength = (values.note ?? '').trim().length;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-7" aria-busy={loading}>
      <ChoiceGroup
        legend="Occasion"
        name="occasion"
        options={occasions}
        value={values.occasion}
        onChange={onChange}
        error={errors.occasion}
      />
      <ChoiceGroup
        legend="Style"
        name="style"
        options={styles}
        value={values.style}
        onChange={onChange}
        error={errors.style}
      />
      <ChoiceGroup
        legend="Color"
        name="color"
        options={colors}
        value={values.color}
        onChange={onChange}
        error={errors.color}
        swatches
      />
      <ChoiceGroup
        legend="Clothing preference"
        name="clothing"
        options={clothing}
        value={values.clothing}
        onChange={onChange}
        error={errors.clothing}
      />

      <div>
        <label htmlFor="style-note" className="text-sm font-medium text-ink">
          A note for the stylist <span className="font-normal text-stone">(optional)</span>
        </label>
        <textarea
          id="style-note"
          name="note"
          rows={4}
          value={values.note}
          onChange={(event) => onChange('note', event.target.value)}
          placeholder="A late train, a rooftop, no heels..."
          aria-invalid={errors.note ? true : undefined}
          aria-describedby="style-note-help"
          className="mt-3 w-full resize-y border border-line bg-ivory px-4 py-3 text-sm leading-relaxed text-ink placeholder:text-stone/70"
        />
        <div className="mt-2 flex items-start justify-between gap-4">
          <p id="style-note-help" className={`text-sm ${errors.note ? 'text-garnet' : 'text-stone'}`} role={errors.note ? 'alert' : undefined}>
            {errors.note || 'Leave this blank, or write at least a short sentence.'}
          </p>
          <p className={`shrink-0 text-xs ${noteLength > 180 ? 'text-garnet' : 'text-stone'}`}>{noteLength}/180</p>
        </div>
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto" disabled={loading}>
        {loading ? 'Composing your look' : 'Generate New Look'}
      </button>
    </form>
  );
}
