import { Link } from 'react-router-dom';
import { brand } from '../data/brand';

export default function BrandMark({ className = 'text-2xl', light = false, linked = true }) {
  const classes = `display tracking-[0.16em] ${light ? 'text-ivory' : 'text-ink'} ${className}`;
  if (!linked) return <p className={classes}>{brand.wordmark}</p>;
  return (
    <Link to="/" className={classes} aria-label={`${brand.name} home`}>
      {brand.wordmark}
    </Link>
  );
}
