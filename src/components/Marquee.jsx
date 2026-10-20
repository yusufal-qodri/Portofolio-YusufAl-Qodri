import { Fragment } from "react";

export default function Marquee() {
  const items = [
    { name: "Data Science & AI", sub: "Python · Machine Learning · Deep Learning" },
    { name: "Meteorologi & Iklim", sub: "Analisis Curah Hujan · Variabilitas Iklim" },
    { name: "Hidrologi Pertanian", sub: "Pemetaan DAS · Analisis Orde Sungai" },
    { name: "Data Spasial & Lingkungan", sub: "Streamlit · GIS · Pemodelan Agroklimat" },
  ];
  const loop = items.concat(items, items);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((t, i) => (
          <Fragment key={i}>
            <span className="marquee-item">{t.name}</span>
            <span className="marquee-dot" />
            <span className="marquee-item outline">{t.sub}</span>
            <span className="marquee-dot" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
