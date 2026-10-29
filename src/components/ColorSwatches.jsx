export default function ColorSwatches({ colors, size = 'sm' }) {
  const large = size === 'lg';
  return (
    <ul className={`flex flex-wrap ${large ? 'gap-4' : 'gap-x-4 gap-y-2'}`} aria-label="Matching colors">
      {colors.map((color) => (
        <li key={color.name} className="inline-flex items-center gap-2 text-stone">
          <span
            className={`rounded-full border border-ink/15 ${large ? 'h-10 w-10' : 'h-2.5 w-2.5'}`}
            style={{ background: color.hex }}
          />
          <span>
            <span className={`block ${large ? 'text-sm text-ink' : 'text-xs uppercase tracking-[0.14em]'}`}>
              {color.name}
            </span>
            {large && <span className="block text-xs uppercase tracking-[0.14em]">{color.hex}</span>}
          </span>
        </li>
      ))}
    </ul>
  );
}
