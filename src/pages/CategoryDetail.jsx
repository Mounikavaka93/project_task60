import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import OutfitCard from '../components/OutfitCard';
import { getCategory } from '../data/categories';
import { outfitsForCategory } from '../data/outfits';
import { seasons } from '../data/options';
import useDocumentTitle from '../hooks/useDocumentTitle';
import NotFound from './NotFound';

export default function CategoryDetail() {
  const { slug } = useParams();
  const category = getCategory(slug);
  const [season, setSeason] = useState('all');
  const looks = useMemo(() => (category ? outfitsForCategory(category.slug) : []), [category]);

  useDocumentTitle(category ? category.name : 'Category');

  if (!category) return <NotFound />;

  const seasonal = category.slug === 'seasonal';
  const visible = seasonal && season !== 'all' ? looks.filter((outfit) => outfit.season === season) : looks;

  return (
    <div>
      <section className="relative min-h-[420px] overflow-hidden bg-ink">
        <img src={category.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/20" />
        <div className="page-wrap relative flex min-h-[420px] flex-col justify-end py-12 text-ivory">
          <p className="text-[0.72rem] uppercase tracking-[0.24em] text-mist">
            <Link to="/categories" className="hover:text-ivory">Categories</Link>
            <span aria-hidden="true"> / </span>
            {category.name}
          </p>
          <h1 className="display mt-3 text-5xl md:text-7xl">{category.name}</h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ivory/80">{category.description}</p>
        </div>
      </section>

      <div className="page-wrap py-12 md:py-16">
        {seasonal && (
          <div className="mb-10">
            <div className="flex flex-wrap gap-2" role="group" aria-label="Season">
              <SeasonChip active={season === 'all'} onClick={() => setSeason('all')}>
                All seasons
              </SeasonChip>
              {seasons.map((item) => (
                <SeasonChip key={item.id} active={season === item.id} onClick={() => setSeason(item.id)}>
                  {item.name}
                </SeasonChip>
              ))}
            </div>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone">
              {season === 'all'
                ? 'The full year, from spring light to winter wool.'
                : seasons.find((item) => item.id === season)?.note}
            </p>
          </div>
        )}

        {seasonal && season === 'all' ? (
          <div className="space-y-14">
            {seasons.map((item) => {
              const group = looks.filter((outfit) => outfit.season === item.id);
              if (group.length === 0) return null;
              return (
                <section key={item.id}>
                  <h2 className="display text-4xl">{item.name}</h2>
                  <p className="mt-2 max-w-xl text-sm text-stone">{item.note}</p>
                  <div className="mt-6 grid items-stretch gap-6 md:grid-cols-2 wide:grid-cols-3">
                    {group.map((outfit) => (
                      <OutfitCard key={outfit.id} outfit={outfit} />
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        ) : (
          <div className="grid items-stretch gap-6 md:grid-cols-2 wide:grid-cols-3">
            {visible.map((outfit) => (
              <OutfitCard key={outfit.id} outfit={outfit} />
            ))}
          </div>
        )}

        {visible.length === 0 && (
          <p className="text-stone">Nothing in this edit yet.</p>
        )}
      </div>
    </div>
  );
}

function SeasonChip({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full border px-4 py-2 text-sm transition duration-300 ${
        active ? 'border-ink bg-ink text-ivory' : 'border-line bg-ivory text-ink hover:border-ink'
      }`}
    >
      {children}
    </button>
  );
}
