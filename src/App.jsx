import { ReactLenis } from 'lenis/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Categories from './pages/Categories';
import CategoryDetail from './pages/CategoryDetail';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import OutfitDetail from './pages/OutfitDetail';
import StyleStudio from './pages/StyleStudio';
import Trends from './pages/Trends';

const smooth = typeof window === 'undefined' || !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function App() {
  const routes = (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="style" element={<StyleStudio />} />
        <Route path="trends" element={<Trends />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/:slug" element={<CategoryDetail />} />
        <Route path="looks/:id" element={<OutfitDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );

  return (
    <BrowserRouter>
      {smooth ? (
        <ReactLenis root options={{ autoRaf: true, lerp: 0.085, smoothWheel: true, syncTouch: false }}>
          {routes}
        </ReactLenis>
      ) : (
        routes
      )}
    </BrowserRouter>
  );
}
