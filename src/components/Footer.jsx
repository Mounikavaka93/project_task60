import { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandMark from './BrandMark';
import { categories } from '../data/categories';
import { validateEmail } from '../lib/validate';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [joined, setJoined] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    const nextError = validateEmail(email);
    setError(nextError);
    if (nextError) return;
    setJoined(true);
  }

  return (
    <footer className="mt-20 border-t border-line bg-ink text-ivory">
      <div className="page-wrap grid gap-12 py-14 md:grid-cols-2 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-4">
          <BrandMark light className="text-4xl" />
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/70">
            A cloth house with an AI stylist. Tell us the hour, the temperament, and the cloth, and we compose a look from the edit.
          </p>
        </div>

        <div className="lg:col-span-3">
          <p className="kicker text-mist">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link className="hover:text-mist" to="/style">AI Styling</Link></li>
            <li><Link className="hover:text-mist" to="/trends">Trends</Link></li>
            <li><Link className="hover:text-mist" to="/categories">Categories</Link></li>
            {categories.map((category) => (
              <li key={category.slug}>
                <Link className="text-ivory/80 hover:text-mist" to={`/categories/${category.slug}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-5">
          <p className="kicker text-mist">Atelier notes</p>
          <p className="mt-4 text-sm leading-relaxed text-ivory/70">
            A short letter when the edit changes. No account, no backend — this stays in your browser.
          </p>
          {joined ? (
            <p className="mt-6 border border-ivory/20 px-4 py-4 text-sm" role="status">
              You are on the list. We will pretend the post is already on its way.
            </p>
          ) : (
            <form onSubmit={onSubmit} noValidate className="mt-6">
              <label htmlFor="footer-email" className="text-sm">
                Email
              </label>
              <div className="mt-2 flex flex-col gap-3 sm:flex-row">
                <input
                  id="footer-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (error) setError(validateEmail(event.target.value));
                  }}
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? 'footer-email-error' : undefined}
                  placeholder="you@atelier.com"
                  className="w-full border border-ivory/25 bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-ivory/40"
                />
                <button type="submit" className="btn-light shrink-0">
                  Join
                </button>
              </div>
              {error && (
                <p id="footer-email-error" className="mt-2 text-sm text-mist" role="alert">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="page-wrap flex flex-col gap-2 py-5 text-xs uppercase tracking-[0.16em] text-ivory/50 sm:flex-row sm:justify-between">
          <p>Velquin · cloth house</p>
          <p>Composed in the browser</p>
        </div>
      </div>
    </footer>
  );
}
