import { useEffect } from 'react';

import { brand } from '../data/brand';

export default function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} · ${brand.name}` : brand.title;
  }, [title]);
}
