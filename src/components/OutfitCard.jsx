import { Link } from 'react-router-dom';
import { categoryName, seasonName } from '../data/outfits';
import { strengthLabel } from '../lib/recommend';
import ColorSwatches from './ColorSwatches';
import Tilt3D from './Tilt3D';

export default function OutfitCard({
  outfit,
  reason = [],
  score,
  featured = false,
  styleNote,
}) {
  const tip = styleNote || outfit.tips[0];

  return (
    <article className={featured ? 'md:col-span-2' : 'h-full'}>
      <Tilt3D className="h-full" max={featured ? 5 : 8} glare>
        <Link
          to={`/looks/${outfit.id}`}
          className={`group grid h-full border border-line bg-ivory shadow-[0_12px_32px_rgba(28,25,21,0.05)] ${featured ? 'md:grid-cols-2' : ''}`}
        >
          <div className={`relative overflow-hidden bg-sand ${featured ? 'aspect-[4/5] md:aspect-auto md:min-h-[460px]' : 'aspect-[3/4]'}`}>
            <img
              src={outfit.image}
              alt={outfit.alt}
              className="absolute inset-0 h-full w-full object-cover transition duration-700 motion-safe:group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col p-5 md:p-7">
            <p className="kicker">
              {categoryName(outfit.category)} · {seasonName(outfit.season)}
            </p>
            <h3 className={`display mt-3 text-ink ${featured ? 'text-4xl md:text-5xl' : 'text-3xl'}`}>
              {outfit.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-stone">{outfit.description}</p>
            {tip && (
              <p className="mt-4 border-t border-line pt-4 text-sm leading-relaxed text-stone">
                <span className="font-medium text-ink">Styling note. </span>
                {tip}
              </p>
            )}
            <div className="mt-4">
              <ColorSwatches colors={outfit.matchingColors} />
            </div>
            {typeof score === 'number' && (
              <p className="mt-4 text-xs uppercase tracking-[0.16em] text-bronze">
                {strengthLabel(score)}
                {reason.length > 0 ? ` · ${reason.join(' · ')}` : ''}
              </p>
            )}
            <span className="mt-auto pt-6 text-[0.72rem] uppercase tracking-[0.18em] text-ink underline-offset-4 group-hover:underline">
              View the look
            </span>
          </div>
        </Link>
      </Tilt3D>
    </article>
  );
}
