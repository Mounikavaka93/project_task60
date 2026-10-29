export default function DetailSection({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="text-sm font-medium uppercase tracking-[0.18em]">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}
