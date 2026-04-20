export default function NarutoSeal({ size = 160 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: size >= 80 ? 'drop-shadow(0 0 12px #00acd7aa)' : 'none', verticalAlign: 'middle' }}
    >
      {/* Outer ring */}
      <circle cx="80" cy="80" r="74" stroke="#00acd7" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" />
      <circle cx="80" cy="80" r="68" stroke="#00acd7" strokeWidth="0.75" opacity="0.3" />

      {/* Eight trigram lines radiating outward */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 45 * Math.PI) / 180;
        const x1 = 80 + 42 * Math.cos(angle);
        const y1 = 80 + 42 * Math.sin(angle);
        const x2 = 80 + 66 * Math.cos(angle);
        const y2 = 80 + 66 * Math.sin(angle);
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#00acd7" strokeWidth="1.2" opacity="0.6" />;
      })}

      {/* Trigram bars (八卦) — 3 bars per direction, solid or broken */}
      {[
        { angle: -90, bars: [true, true, true] },   // ☰ Qian
        { angle: -45, bars: [true, false, true] },  // ☲ Li
        { angle:   0, bars: [false, true, false] }, // ☵ Kan
        { angle:  45, bars: [true, false, false] }, // ☶ Gen
        { angle:  90, bars: [false, false, false] },// ☷ Kun
        { angle: 135, bars: [false, true, true] },  // ☳ Zhen
        { angle: 180, bars: [true, true, false] },  // ☴ Xun
        { angle: 225, bars: [false, false, true] }, // ☱ Dui
      ].map(({ angle, bars }, gi) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 80 + 55 * Math.cos(rad);
        const cy = 80 + 55 * Math.sin(rad);
        const perpRad = rad + Math.PI / 2;
        return bars.map((solid, bi) => {
          const offset = (bi - 1) * 4;
          const bx = cx + offset * Math.cos(perpRad);
          const by = cy + offset * Math.sin(perpRad);
          const halfLen = 4;
          if (solid) {
            return (
              <line
                key={`${gi}-${bi}`}
                x1={bx - halfLen * Math.cos(rad)}
                y1={by - halfLen * Math.sin(rad)}
                x2={bx + halfLen * Math.cos(rad)}
                y2={by + halfLen * Math.sin(rad)}
                stroke="#5dc9e2"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            );
          } else {
            return (
              <g key={`${gi}-${bi}`}>
                <line
                  x1={bx - halfLen * Math.cos(rad)}
                  y1={by - halfLen * Math.sin(rad)}
                  x2={bx - 1.2 * Math.cos(rad)}
                  y2={by - 1.2 * Math.sin(rad)}
                  stroke="#5dc9e2"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
                <line
                  x1={bx + 1.2 * Math.cos(rad)}
                  y1={by + 1.2 * Math.sin(rad)}
                  x2={bx + halfLen * Math.cos(rad)}
                  y2={by + halfLen * Math.sin(rad)}
                  stroke="#5dc9e2"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                />
              </g>
            );
          }
        });
      })}

      {/* Middle ring */}
      <circle cx="80" cy="80" r="40" stroke="#00acd7" strokeWidth="1" opacity="0.5" />
      <circle cx="80" cy="80" r="32" stroke="#00acd7" strokeWidth="0.5" opacity="0.25" />

      {/* Inner swirl — Uzumaki spiral */}
      {Array.from({ length: 180 }).map((_, i) => {
        const t = i / 180;
        const angle = t * 4 * Math.PI;
        const r = 4 + t * 22;
        const x = 80 + r * Math.cos(angle);
        const y = 80 + r * Math.sin(angle);
        const nextT = (i + 1) / 180;
        const nextAngle = nextT * 4 * Math.PI;
        const nextR = 4 + nextT * 22;
        const nx = 80 + nextR * Math.cos(nextAngle);
        const ny = 80 + nextR * Math.sin(nextAngle);
        return (
          <line
            key={i}
            x1={x} y1={y} x2={nx} y2={ny}
            stroke="#00acd7"
            strokeWidth="1.4"
            strokeLinecap="round"
            opacity={0.4 + t * 0.6}
          />
        );
      })}

      {/* Center dot */}
      <circle cx="80" cy="80" r="3" fill="#00acd7" opacity="0.9" />
      <circle cx="80" cy="80" r="1.5" fill="#fff" opacity="0.6" />
    </svg>
  );
}
