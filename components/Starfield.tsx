// Deterministic PRNG so server and client render identical shadows.
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const FIELD = 2000;

// Each star is drawn twice, one field-height apart, so the drift loops seamlessly.
function stars(count: number, seed: number) {
  const rand = mulberry32(seed);
  const shadows: string[] = [];
  for (let i = 0; i < count; i++) {
    const x = Math.floor(rand() * 2560);
    const y = Math.floor(rand() * FIELD);
    shadows.push(`${x}px ${y}px #fff`, `${x}px ${y + FIELD}px #fff`);
  }
  return shadows.join(',');
}

const layers = [
  { size: 1, count: 350, seed: 1, duration: '120s' },
  { size: 2, count: 120, seed: 2, duration: '180s' },
  { size: 3, count: 50, seed: 3, duration: '240s' },
];

export function Starfield() {
  return (
    <div
      aria-hidden="true"
      className="starfield pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {layers.map((layer) => (
        <span
          key={layer.seed}
          style={{
            width: layer.size,
            height: layer.size,
            boxShadow: stars(layer.count, layer.seed),
            animationDuration: layer.duration,
          }}
        />
      ))}
    </div>
  );
}
