import { Link } from 'react-router-dom';
import Rail3D from '../components/Rail3D';
import Reveal from '../components/Reveal';
import SectionHeading from '../components/SectionHeading';
import Tilt3D from '../components/Tilt3D';
import { categories } from '../data/categories';
import { getOutfit } from '../data/outfits';
import { trends } from '../data/trends';
import useDocumentTitle from '../hooks/useDocumentTitle';

const phrases = ['Tailoring', 'Ceremony', 'Street', 'Linen', 'Evening', 'Knit', 'Gold thread', 'Quiet color'];

const railIds = [
  'camel-wrap',
  'banquet-saree',
  'court-yellow',
  'plum-column',
  'navy-line',
  'scarlet-gown',
  'ivory-anarkali',
  'meadow-tulle',
];

const steps = [
  {
    number: '01',
    title: 'Tell us the moment',
    text: 'Occasion, temperament, a color, and the kind of clothes you actually want to wear.',
  },
  {
    number: '02',
    title: 'We compose the edit',
    text: 'Velquin ranks the house looks against what you chose and returns three, with the reason attached.',
  },
  {
    number: '03',
    title: 'Leave with a note',
    text: 'Each look comes with the clothes, the accessories, the colors, and a way to wear it.',
  },
];

export default function Home() {
  useDocumentTitle('');
  const railLooks = railIds.map((id) => getOutfit(id)).filter(Boolean);

  return (
    <>
      <section className="relative isolate min-h-[78vh] overflow-hidden border-b border-line md:min-h-[88vh]">
        <img
          src="/images/camel-wrap.jpg"
          alt=""
          className="hero-bg absolute inset-0 h-full w-full object-cover object-[center_18%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/82 via-ink/55 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-ink/20" />
        <div className="page-wrap relative flex min-h-[78vh] flex-col justify-end py-12 md:min-h-[88vh] md:py-16 lg:justify-center lg:py-24">
          <p className="display rise text-4xl tracking-[0.18em] text-ivory sm:text-5xl md:text-6xl">VELQUIN</p>
          <h1
            className="display rise mt-5 max-w-[14ch] text-[2.55rem] text-ivory sm:text-5xl md:text-6xl lg:text-[5rem]"
            style={{ animationDelay: '80ms' }}
          >
            Dress for the <span className="italic text-mist">hour</span> you are walking into.
          </h1>
          <p
            className="rise mt-5 max-w-md text-base leading-relaxed text-ivory/80 md:text-lg"
            style={{ animationDelay: '160ms' }}
          >
            A cloth house with a short memory and a strong edit. Tell it where you are going. It will hand you a look, not a closet.
          </p>
          <div className="rise mt-8 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: '240ms' }}>
            <Link to="/style" className="btn-light w-full sm:w-auto">
              Get styled
            </Link>
            <Link to="/trends" className="btn-line-light w-full sm:w-auto">
              Explore trends
            </Link>
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-b border-line py-4" aria-hidden="true">
        <div className="marquee-track">
          {[...phrases, ...phrases].map((phrase, index) => (
            <span key={`${phrase}-${index}`} className="text-[0.72rem] uppercase tracking-[0.28em] text-stone">
              {phrase}
              <span className="mx-6 text-bronze">·</span>
            </span>
          ))}
        </div>
      </div>

      <section className="section page-wrap">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              kicker="How Velquin styles you"
              title="A stylist that listens before it dresses you."
              text="No feed to scroll and no size quiz that forgets the invitation. Four choices, then a look with the clothes, the metal, and the reason it belongs."
            />
            <ol className="mt-10 divide-y divide-line border-y border-line">
              {steps.map((step) => (
                <li key={step.number} className="grid items-start gap-2 py-5 sm:grid-cols-[4.5rem_1fr] sm:gap-6">
                  <span className="display text-3xl leading-none text-bronze">{step.number}</span>
                  <div>
                    <h3 className="text-lg font-medium leading-none">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link to="/style" className="btn-primary mt-8 w-full sm:w-auto">
              Open the studio
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <Tilt3D max={6} glare>
              <div className="aspect-[4/5] overflow-hidden bg-sand">
                <img
                  src="/images/atelier-floor.jpg"
                  alt="Clothing rails inside a small atelier, with knitwear and shirts hung in rows"
                  className="h-full w-full object-cover"
                />
              </div>
            </Tilt3D>
            <p className="mt-4 text-sm leading-relaxed text-stone">The edit is finite on purpose. Velquin styles from what is already in the house.</p>
          </Reveal>
        </div>
      </section>

      <section className="section border-y border-line bg-ivory">
        <div className="page-wrap">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              kicker="In the round"
              title="Turn the rail."
              text="Eight looks from the house, set on a wheel. Drag it, or let it turn. Open any face."
            />
            <p className="text-[0.72rem] uppercase tracking-[0.22em] text-stone">Drag to spin</p>
          </div>
          <div className="mt-6 md:mt-2">
            <Rail3D looks={railLooks} />
          </div>
        </div>
      </section>

      <section className="section border-b border-line">
        <div className="page-wrap">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              kicker="Featured trends"
              title="What the edit is wearing now."
              text="Four directions currently leading the house: the coat, ceremony gold, one loud color, and the evening column."
            />
            <Link to="/trends" className="btn-line w-full shrink-0 sm:w-auto">
              All trends
            </Link>
          </div>
          <div className="mt-12 grid items-stretch gap-8 md:grid-cols-2 md:gap-10">
            {trends.map((trend, index) => (
              <Reveal key={trend.id} delay={index * 70} className="h-full">
                <Link to={`/trends#${trend.id}`} className="group flex h-full flex-col">
                  <Tilt3D max={6} glare>
                    <div className="relative aspect-[4/5] overflow-hidden bg-sand md:aspect-[5/4]">
                      <img
                        src={trend.image}
                        alt={trend.alt}
                        className="h-full w-full object-cover transition duration-700 motion-safe:group-hover:scale-105"
                      />
                    </div>
                  </Tilt3D>
                  <p className="kicker mt-4">{trend.kicker}</p>
                  <h3 className="display mt-2 text-4xl transition group-hover:text-bronze">{trend.title}</h3>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-stone">{trend.summary}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section page-wrap">
        <SectionHeading
          kicker="The house"
          title="Six ways in."
          text="Casual, formal, party, streetwear, traditional, and the seasonal collections. Every look in the house lives in one of them."
        />
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {categories.map((category) => (
            <Tilt3D key={category.slug} className="h-full" max={7} glare>
              <Link to={`/categories/${category.slug}`} className="group relative block aspect-[4/5] overflow-hidden bg-sand">
                <img
                  src={category.image}
                  alt={category.alt}
                  className="h-full w-full object-cover transition duration-700 motion-safe:group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-ivory md:p-6">
                  <p className="text-[0.68rem] uppercase tracking-[0.24em] text-mist">{category.eyebrow}</p>
                  <h3 className="display mt-1 text-4xl">{category.name}</h3>
                </div>
              </Link>
            </Tilt3D>
          ))}
        </div>
      </section>

      <section className="bg-ink text-ivory">
        <div className="page-wrap section flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            light
            kicker="Begin"
            title="Tell Velquin where you are going."
            text="Four choices. A generated look. Then another, if the first one is not the hour you meant."
          />
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link to="/style" className="btn-light w-full sm:w-auto">
              Generate a look
            </Link>
            <Link to="/categories" className="btn-line-light w-full sm:w-auto">
              Browse categories
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
