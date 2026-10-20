import { useReveal } from "../hooks.js";
import WorkArt from "./WorkArt.jsx";

export default function Work(props) {
  const onOpen = props.onOpen;
  const ref = useReveal({ repeat: true });
  const projects = [
    {
      id: "sistem-iklim-bumi",
      name: "Sistem Iklim Bumi — Media Pembelajaran Interaktif",
      cat: "Proyek Kelompok (Tim 2 Orang)",
      tag: "Climate Education",
      art: "climate",
      cover: "/assets/sistem-iklim-bumi.png",
      size: "large",
      desc: "Media pembelajaran interaktif mengenai sistem iklim dan perubahan iklim. Website menggabungkan materi dengan visualisasi dan simulasi agar pengguna dapat mengeksplorasi komponen serta proses dalam sistem iklim. Sejumlah parameter dapat diubah untuk melihat perubahan pada visualisasi atau nilai simulasi yang tersedia.",
      contribution: "Proyek Kelompok (Tim 2 Orang — Yusuf berkontribusi pada pengerjaan teknis bersama tim)",
      year: "2024",
      tools: "HTML · CSS · JavaScript",
      duration: "Proyek Tim",
      tags: ["Climate Education", "Interactive Learning", "Team Project"],
      demo: "https://nisasinta06.github.io/PBL-SPI/",
      repo: "https://github.com/yusuf-al-qodri/SPI_KELOMPOK1",
    },
    {
      id: "pemetaan-orde-sungai-das-gede-pangrango",
      name: "Pemetaan Orde Sungai DAS Gede Pangrango",
      cat: "Proyek Individu",
      tag: "GIS & Hydrology",
      art: "river",
      cover: "/assets/das-gede-pangrango.png",
      size: "small",
      desc: "Proyek pemetaan jaringan sungai dan orde sungai di kawasan Gede Pangrango. Visualisasi menampilkan kelas orde sungai Strahler, batas Sub-DAS, outlet, relief elevasi, skala peta, dan penunjuk arah utara.",
      contribution: "Proyek Individu",
      year: "2024",
      tools: "Python",
      duration: "Proyek Mandiri",
      tags: ["Python", "GIS", "Hydrology", "River Network Mapping"],
      demo: null,
      repo: "https://github.com/yusuf-al-qodri/Ordo_DAS_Gede_Pangrango",
    },
    {
      id: "analisis-probabilitas-hujan-ntt",
      name: "Analisis Probabilitas Hujan NTT",
      cat: "Proyek Individu",
      tag: "Climate Analysis",
      art: "rain",
      cover: "/assets/probabilitas-hujan-ntt.png",
      size: "med-l",
      desc: "Aplikasi web untuk mengeksplorasi probabilitas hujan di Nusa Tenggara Timur melalui peta dan analisis hubungan antara indeks ONI dan curah hujan. Pengguna dapat menyaring tampilan berdasarkan musim dan tahun untuk membandingkan pola probabilitas hujan serta mengeksplorasi hubungan variabilitas iklim dengan curah hujan.",
      contribution: "Proyek Individu",
      year: "2024",
      tools: "Python · Streamlit",
      duration: "Proyek Mandiri",
      tags: ["Python", "Streamlit", "Climate Analysis", "Rainfall Probability"],
      demo: "https://projekmetklim-probabilitashujan.streamlit.app/",
      repo: "https://github.com/yusuf-al-qodri/ProjekMetklim-ProbabilitasHujan",
    },
    {
      id: "simulasi-pertumbuhan-cabai",
      name: "Simulasi Pertumbuhan Cabai",
      cat: "Proyek Individu / Personal",
      tag: "Agricultural Modeling",
      art: "chili",
      cover: null,
      size: "med-r",
      desc: "Simulasi pertumbuhan tanaman cabai dengan parameter lingkungan yang dapat diubah untuk menganalisis respons perkembangan tanaman terhadap variabel agroklimat dan kondisi sekitar.",
      contribution: "Proyek Individu / Personal",
      year: "2024",
      tools: "Python",
      duration: "Proyek Mandiri",
      tags: ["Python", "Simulation", "Agricultural Modeling"],
      demo: null,
      repo: "https://github.com/yusuf-al-qodri/Simulasi_Pertumbuhan_Cabe",
    },
    {
      id: "tempa-ai-capstone",
      name: "YouTube View Decline Diagnosis & Hippo Academy",
      cat: "Proyek Kelompok · Capstone Tempa AI",
      tag: "AI & Machine Learning",
      art: "ai",
      cover: null,
      size: "large",
      desc: "Platform analitik AI full-stack untuk mendiagnosis penyebab penurunan performa (views) channel YouTube secara ilmiah dan memberikan rekomendasi strategis menggunakan machine learning serta konsultasi cerdas berbasis RAG. Dikerjakan sebagai Capstone Project program Tempa AI (ID: AIC001B6Y0009). Rincian peran individu dalam tim menunggu konfirmasi.",
      contribution: "Peserta Program Tempa AI (Kelulusan: Lulus Penuh · Status Proyek Akhir: Selesai)",
      year: "2026",
      tools: "Python · XGBoost · FastAPI · React",
      duration: "Capstone Project",
      tags: ["Machine Learning", "FastAPI", "React", "Capstone Project"],
      demo: "https://wrappyt.web.id/",
      repo: "https://github.com/xafiertect/wrappyt",
    },
  ];
  return (
    <section id="work" className="section">
      <div ref={ref} className="reveal reveal-anim">
        <div className="work-head">
          <div>
            <div className="section-label anim-left" style={{ "--d": "60ms" }}>
              <span className="section-num">03</span> Proyek Unggulan
            </div>
            <h2 className="work-title anim-left" style={{ "--d": "220ms" }}>
              Karya &amp; <span className="italic-accent">proyek terpilih.</span>
            </h2>
          </div>
        </div>
        <div className="work-grid">
          {projects.map((p, i) => (
            <button
              key={p.id}
              className={"work-card anim-up " + p.size}
              style={{ "--d": 320 + i * 160 + "ms" }}
              onClick={() => onOpen(p)}
            >
              <div className="work-art">
                {p.cover ? (
                  <img className="work-art-cover" src={p.cover} alt={p.name} />
                ) : (
                  <>
                    <div className={"work-art-fill art-" + p.art} />
                    <WorkArt kind={p.art} />
                  </>
                )}
              </div>
              <div className="work-tag-top">{p.tag}</div>
              <div className="work-meta">
                <div>
                  <div className="work-name">{p.name}</div>
                  <div className="work-cat">{p.cat}</div>
                </div>
                <div className="work-arrow">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
