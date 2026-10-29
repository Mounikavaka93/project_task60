import { Link, useParams } from 'react-router-dom';
import ColorSwatches from '../components/ColorSwatches';
import DetailSection from '../components/DetailSection';
import OutfitCard from '../components/OutfitCard';
import Tilt3D from '../components/Tilt3D';
import { getCategory } from '../data/categories';
import { categoryName, getOutfit, relatedLooks, seasonName } from '../data/outfits';
import useDocumentTitle from '../hooks/useDocumentTitle';
import NotFound from './NotFound';

export default function OutfitDetail() {
  const { id } = useParams();
  const outfit = getOutfit(id);
  useDocumentTitle(outfit ? outfit.name : 'Look');

  if (!outfit) return <NotFound />;

  const category = getCategory(outfit.category);
  const related = relatedLooks(outfit);
  const query = new URLSearchParams({
    occasion: outfit.occasions[0],
    style: outfit.styles[0],
    color: outfit.colorKeys[0],
    clothing: outfit.clothingTypes[0],
  });

  return (
    <div className="page-wrap py-10 md:py-14">
      <p className="text-[0.72rem] uppercase tracking-[0.2em] text-stone">
        <Link to="/" className="hover:text-ink">Home</Link>
        <span aria-hidden="true"> / </span>
        <Link to={`/categories/${outfit.category}`} className="hover:text-ink">{categoryName(outfit.category)}</Link>
        <span aria-hidden="true"> / </span>
        <span className="text-ink">{outfit.name}</span>
      </p>

      <div className="mt-8 grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="lg:sticky lg:top-24">
          <Tilt3D max={5} glare>
            <div className="overflow-hidden bg-sand">
              <img src={outfit.image} alt={outfit.alt} className="aspect-[4/5] w-full object-cover" />
            </div>
          </Tilt3D>
        </div>

        <div>
          <p className="kicker">
            {category?.name} · {seasonName(outfit.season)}
          </p>
          <h1 className="display mt-3 text-5xl md:text-7xl">{outfit.name}</h1>
          <p className="mt-5 text-base leading-relaxed text-stone md:text-lg">{outfit.description}</p>

          <DetailSection title="Clothing">
            <ul className="divide-y divide-line border-y border-line">
              {outfit.items.map((item) => (
                <li key={item.name} className="py-4">
                  <p className="font-medium">{item.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-stone">{item.detail}</p>
                </li>
              ))}
            </ul>
          </DetailSection>

          <DetailSection title="Accessories">
            <ul className="space-y-4">
              {outfit.accessories.map((item) => (
                <li key={item.name}>
                  <p className="font-medium">{item.name}</p>
                  <p className="mt-1 text-sm leading-relaxed text-stone">{item.detail}</p>
                </li>
              ))}
            </ul>
          </DetailSection>

          <DetailSection title="Matching colors">
            <ColorSwatches colors={outfit.matchingColors} size="lg" />
          </DetailSection>

          <DetailSection title="Styling suggestions">
            <ol className="space-y-4">
              {outfit.tips.map((tip, index) => (
                <li key={tip} className="grid grid-cols-[2.5rem_1fr] items-start gap-3">
                  <span className="display text-2xl leading-none text-bronze">0{index + 1}</span>
                  <p className="text-sm leading-relaxed text-stone">{tip}</p>
                </li>
              ))}
            </ol>
          </DetailSection>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to={`/style?${query.toString()}`} className="btn-primary">
              Restyle this direction
            </Link>
            <Link to={`/categories/${outfit.category}`} className="btn-line">
              More {categoryName(outfit.category).toLowerCase()}
            </Link>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="display text-4xl md:text-5xl">Worn nearby</h2>
          <div className="mt-8 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <OutfitCard key={item.id} outfit={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
