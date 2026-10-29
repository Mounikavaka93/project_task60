import { Link } from 'react-router-dom';
import SectionHeading from '../components/SectionHeading';
import Tilt3D from '../components/Tilt3D';
import { getOutfit } from '../data/outfits';
import { trends } from '../data/trends';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Trends() {
  useDocumentTitle('Trends');

  return (
    <div className="page-wrap py-12 md:py-16">
      <SectionHeading
        as="h1"
        kicker="Trends"
        title="Four directions, currently."
        text="The house is not chasing everything. These are the looks setting the temperature right now."
      />
      <div className="mt-14 space-y-20">
        {trends.map((trend, index) => {
          const outfit = getOutfit(trend.outfitId);
          const reversed = index % 2 === 1;
          return (
            <article id={trend.id} key={trend.id} className="grid items-center gap-8 lg:grid-cols-2 lg:items-center lg:gap-16">
              <Tilt3D className={reversed ? 'lg:order-2' : ''} max={6} glare>
                <div className="overflow-hidden bg-sand">
                  <img src={trend.image} alt={trend.alt} className="aspect-[4/5] w-full object-cover md:aspect-[5/4]" />
                </div>
              </Tilt3D>
              <div>
                <p className="kicker">{trend.kicker}</p>
                <h2 className="display mt-3 text-5xl md:text-6xl">{trend.title}</h2>
                <p className="mt-4 text-base leading-relaxed text-stone md:text-lg">{trend.summary}</p>
                {outfit && (
                  <p className="mt-4 text-sm leading-relaxed text-stone">{outfit.tips[0]}</p>
                )}
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  {outfit && (
                    <Link to={`/looks/${outfit.id}`} className="btn-primary">
                      View {outfit.name}
                    </Link>
                  )}
                  <Link to="/style" className="btn-line">
                    Style me this way
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
