export const categories = [
  {
    slug: 'casual',
    name: 'Casual',
    eyebrow: 'Everyday',
    description:
      'Ease with a point of view. Coats, shirtdresses, and knits that survive a real day without looking unfinished.',
    image: '/images/weekend-camel.jpg',
    alt: 'A camel overcoat worn open over a white T-shirt and pale trousers',
  },
  {
    slug: 'formal',
    name: 'Formal',
    eyebrow: 'Tailoring',
    description:
      'Suits with a clear line. Navy, a proper shirt, and the small details — belt, pocket square, watch — kept in proportion.',
    image: '/images/navy-line.jpg',
    alt: 'A navy suit with a white shirt, brown belt, and brown oxfords',
  },
  {
    slug: 'party',
    name: 'Party',
    eyebrow: 'After dark',
    description:
      'Columns, ballgowns, and one sheer black blouse. Evening looks with a single point of shine.',
    image: '/images/scarlet-gown.jpg',
    alt: 'A scarlet halter ballgown caught mid-turn on stone steps',
  },
  {
    slug: 'streetwear',
    name: 'Streetwear',
    eyebrow: 'City',
    description:
      'Sets, stripes, leather, and a lace top dressed like sportswear. Color worn on purpose, not by accident.',
    image: '/images/court-yellow.jpg',
    alt: 'A matching yellow cropped hoodie and sweatpants with white pointed boots',
  },
  {
    slug: 'traditional',
    name: 'Traditional',
    eyebrow: 'Ceremony',
    description:
      'Saree and anarkali, cut and bordered for a celebration. Gold is a material here, not a trim.',
    image: '/images/banquet-saree.jpg',
    alt: 'A deep purple saree with a wide gold border and a black blouse',
  },
  {
    slug: 'seasonal',
    name: 'Seasonal',
    eyebrow: 'Collections',
    description:
      'Four edits that follow the light: spring, summer, autumn, and winter. The same eye, different cloth.',
    image: '/images/shop-window.jpg',
    alt: 'A shop window of knitwear in ivory, camel, olive, and cream',
  },
];

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug);
}
