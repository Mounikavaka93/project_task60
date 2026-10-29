import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main" key={pathname} className="page-enter flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
