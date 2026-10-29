export const occasions = [
  { id: 'office', label: 'Office' },
  { id: 'date', label: 'Date night' },
  { id: 'wedding', label: 'Wedding guest' },
  { id: 'weekend', label: 'Weekend' },
  { id: 'travel', label: 'Travel' },
  { id: 'celebration', label: 'Celebration' },
];

export const styles = [
  { id: 'minimal', label: 'Minimal' },
  { id: 'classic', label: 'Classic' },
  { id: 'bold', label: 'Bold' },
  { id: 'bohemian', label: 'Bohemian' },
  { id: 'edgy', label: 'Edgy' },
  { id: 'romantic', label: 'Romantic' },
];

export const colors = [
  { id: 'black', label: 'Black', hex: '#1c1915' },
  { id: 'ivory', label: 'Ivory', hex: '#f3eee4' },
  { id: 'navy', label: 'Navy', hex: '#1d2a44' },
  { id: 'camel', label: 'Camel', hex: '#c4a574' },
  { id: 'crimson', label: 'Crimson', hex: '#8d2f2f' },
  { id: 'emerald', label: 'Emerald', hex: '#1f6a5b' },
  { id: 'blush', label: 'Blush', hex: '#e7cfc6' },
  { id: 'gold', label: 'Gold', hex: '#c6a15b' },
];

export const clothing = [
  { id: 'dress', label: 'Dress' },
  { id: 'tailoring', label: 'Tailoring' },
  { id: 'separates', label: 'Separates' },
  { id: 'layers', label: 'Layers' },
  { id: 'traditional', label: 'Traditional' },
  { id: 'knitwear', label: 'Knitwear' },
];

export const seasons = [
  {
    id: 'spring',
    name: 'Spring Light',
    note: 'Washed cloth, open collars, and color that can take the sun.',
  },
  {
    id: 'summer',
    name: 'Summer Linen',
    note: 'Breathable dresses, one loud set, and shoes that can walk.',
  },
  {
    id: 'autumn',
    name: 'Autumn Layer',
    note: 'Camel, knit, and tailoring with a little texture.',
  },
  {
    id: 'winter',
    name: 'Winter Wool',
    note: 'Coats, evening color, and cloth that holds its shape.',
  },
];

export const choiceGroups = {
  occasion: occasions,
  style: styles,
  color: colors,
  clothing,
};

export function labelFor(list, id) {
  return list.find((item) => item.id === id)?.label ?? '';
}
