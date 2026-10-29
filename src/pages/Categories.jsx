import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import Tilt3D from '../components/Tilt3D';
import { categories } from '../data/categories';
import { outfitsForCategory } from '../data/outfits';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Categories() {
  useDocumentTitle('Categories');

  return (
    <div className="page-wrap py-12 md:py-16">
      <SectionHeading
        as="h1"
        kicker="Categories"
        title="Choose a room in the house."
        text="Casual, formal, party, streetwear, traditional, and the seasonal collections. Open one and the looks are waiting."
      />
      <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const count = outfitsForCategory(category.slug).length;
          return (
            <Tilt3D key={category.slug} className="h-full" max={6}>
              <Link to={`/categories/${category.slug}`} className="group flex h-full flex-col border border-line bg-ivory shadow-[0_12px_32px_rgba(28,25,21,0.05)]">
                <div className="relative aspect-[5/4] overflow-hidden bg-sand">
                  <img
                    src={category.image}
                    alt={category.alt}
                    className="h-full w-full object-cover transition duration-700 motion-safe:group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <p className="kicker">{category.eyebrow}</p>
                  <h2 className="display mt-2 text-4xl">{category.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{category.description}</p>
                  <p className="mt-auto pt-4 text-[0.72rem] uppercase tracking-[0.18em] text-ink">
                    {count} {count === 1 ? 'look' : 'looks'}
                  </p>
                </div>
              </Link>
            </Tilt3D>
          );
        })}
      </div>
    </div>
  );
}
