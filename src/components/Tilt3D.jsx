import { useRef } from 'react';

function reduceMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function Tilt3D({ children, className = '', max = 8, glare = false }) {
  const inner = useRef(null);
  const still = reduceMotion();

  function move(event) {
    const el = inner.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
    el.style.setProperty('--gx', `${(px + 0.5) * 100}%`);
    el.style.setProperty('--gy', `${(py + 0.5) * 100}%`);
  }

  function leave() {
    const el = inner.current;
    if (!el) return;
    el.style.transform = 'rotateX(0deg) rotateY(0deg)';
  }

  return (
    <div className={`[perspective:1400px] ${className}`}>
      <div
        ref={inner}
        onPointerMove={still ? undefined : move}
        onPointerLeave={still ? undefined : leave}
        className="group relative h-full w-full transition-transform duration-300 ease-out will-change-transform [transform-style:preserve-3d]"
      >
        {children}
        {glare && !still && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 opacity-0 transition duration-300 group-hover:opacity-100"
            style={{
              background:
                'radial-gradient(circle at var(--gx, 50%) var(--gy, 35%), rgba(255,255,255,0.38), transparent 46%)',
            }}
          />
        )}
      </div>
    </div>
  );
}
