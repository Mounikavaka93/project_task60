import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function reduceMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export default function Rail3D({ looks }) {
  const scene = useRef(null);
  const ring = useRef(null);
  const motion = useRef({ rot: 0, dragging: false, lastX: 0, moved: 0 });
  const [depth, setDepth] = useState(280);
  const [still, setStill] = useState(false);
  const step = 360 / looks.length;

  useEffect(() => {
    const reduced = reduceMotion();
    setStill(reduced);
    const sceneEl = scene.current;
    if (!sceneEl) return undefined;

    const measure = () => {
      const width = sceneEl.clientWidth;
      setDepth(width < 640 ? 148 : width < 1024 ? 230 : 320);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(sceneEl);

    if (reduced) return () => observer.disconnect();

    let frame = 0;
    const tick = () => {
      if (!motion.current.dragging) motion.current.rot += 0.09;
      if (ring.current) ring.current.style.transform = `rotateY(${motion.current.rot}deg)`;
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);

  function onPointerDown(event) {
    if (still) return;
    motion.current.dragging = true;
    motion.current.lastX = event.clientX;
    motion.current.moved = 0;
    scene.current?.setPointerCapture(event.pointerId);
  }

  function onPointerMove(event) {
    if (!motion.current.dragging) return;
    const delta = event.clientX - motion.current.lastX;
    motion.current.lastX = event.clientX;
    motion.current.moved += Math.abs(delta);
    motion.current.rot += delta * 0.4;
  }

  function onPointerUp() {
    motion.current.dragging = false;
  }

  function onCardClick(event) {
    if (motion.current.moved > 8) {
      event.preventDefault();
      motion.current.moved = 0;
    }
  }

  if (still) {
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {looks.map((look) => (
          <Link key={look.id} to={`/looks/${look.id}`} className="group block">
            <div className="aspect-[3/4] overflow-hidden bg-sand">
              <img src={look.image} alt={look.alt} className="h-full w-full object-cover" />
            </div>
            <p className="display mt-3 text-2xl">{look.name}</p>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={scene}
      className="rail-scene"
      role="group"
      aria-label="Turning rail of looks. Drag sideways to spin."
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div ref={ring} className="rail-ring">
        {looks.map((look, index) => (
          <Link
            key={look.id}
            to={`/looks/${look.id}`}
            className="rail-card"
            style={{ transform: `rotateY(${index * step}deg) translateZ(${depth}px)` }}
            onClick={onCardClick}
          >
            <img src={look.image} alt="" className="h-full w-full object-cover" />
            <span>{look.name}</span>
          </Link>
        ))}
      </div>
      <div className="rail-floor" aria-hidden="true" />
    </div>
  );
}
