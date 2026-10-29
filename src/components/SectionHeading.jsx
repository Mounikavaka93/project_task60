export default function SectionHeading({ kicker, title, text, light = false, as = 'h2' }) {
  const Title = as;
  const size = as === 'h1' ? 'text-5xl md:text-7xl' : 'text-4xl md:text-6xl';

  return (
    <div className="max-w-2xl">
      {kicker && <p className={light ? 'kicker text-mist' : 'kicker'}>{kicker}</p>}
      <Title className={`display mt-3 ${size} ${light ? 'text-ivory' : 'text-ink'}`}>{title}</Title>
      {text && (
        <p className={`mt-4 max-w-xl text-base leading-relaxed md:text-lg ${light ? 'text-ivory/75' : 'text-stone'}`}>
          {text}
        </p>
      )}
    </div>
  );
}
