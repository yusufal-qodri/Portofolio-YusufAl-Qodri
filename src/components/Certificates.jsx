import { useState } from "react";
import { useReveal } from "../hooks.js";

const CERTIFICATES = [
  // Tempa AI
  {
    id: "tempa-ai",
    provider: "Tempa AI",
    category: "Tempa AI",
    title: "Artificial Intelligence",
    organizer: "Tempa & Institut Pertanian Bogor",
    date: "3 Juli 2026",
    credentialId: "AIC001B6Y0009",
    statusText: "Kelulusan: Lulus Penuh · Status Proyek Akhir: Selesai",
    desc: "Program pembelajaran komprehensif AI yang mencakup Dasar Pemrograman, Logika Pemrograman, Git/GitHub, SQL, Dasar AI, Python, Machine Learning, Deep Learning, Proyek Akhir, dan Pengembangan Karir.",
    projectUrl: "https://github.com/xafiertect/wrappyt",
    projectUrlLabel: "Repositori Proyek Akhir",
    verifyUrl: null,
  },

  // Dicoding
  {
    id: "dicoding-deep-learning",
    provider: "Dicoding",
    category: "Dicoding",
    title: "Belajar Fundamental Deep Learning",
    organizer: "Dicoding Indonesia",
    date: "20 Juli 2026",
    verifyUrl: "https://www.dicoding.com/certificates/MEPJO4KJJZ3V",
    desc: "Sertifikat penyelesaian kursus arsitektur dan implementasi Deep Learning (Neural Networks).",
  },
  {
    id: "dicoding-data-analysis",
    provider: "Dicoding",
    category: "Dicoding",
    title: "Belajar Fundamental Analisis Data",
    organizer: "Dicoding Indonesia",
    date: "27 Mei 2026",
    verifyUrl: "https://www.dicoding.com/certificates/JLX1VRE22Z72",
    desc: "Sertifikat penyelesaian kursus teknik eksplorasi dan analisis data menggunakan pustaka Python.",
  },
  {
    id: "dicoding-ml-pemula",
    provider: "Dicoding",
    category: "Dicoding",
    title: "Belajar Machine Learning untuk Pemula",
    organizer: "Dicoding Indonesia",
    date: "4 Mei 2026",
    verifyUrl: "https://www.dicoding.com/certificates/ERZRL20QQZYV",
    desc: "Sertifikat penyelesaian kursus konsep dan penerapan model Machine Learning klasifikasi dan regresi.",
  },
  {
    id: "dicoding-python",
    provider: "Dicoding",
    category: "Dicoding",
    title: "Memulai Pemrograman dengan Python",
    organizer: "Dicoding Indonesia",
    date: "12 April 2026",
    verifyUrl: "https://www.dicoding.com/certificates/GRX5WOW9KZ0M",
    desc: "Sertifikat penyelesaian kursus dasar pemrograman Python, struktur data, dan penanganan logika.",
  },
  {
    id: "dicoding-sql",
    provider: "Dicoding",
    category: "Dicoding",
    title: "Belajar Dasar Structured Query Language (SQL)",
    organizer: "Dicoding Indonesia",
    date: "14 Maret 2026",
    verifyUrl: "https://www.dicoding.com/certificates/MEPJOVOWWZ3V",
    desc: "Sertifikat penyelesaian kursus query basis data relasional, penggabungan tabel, dan agregasi data.",
  },
  {
    id: "dicoding-logic",
    provider: "Dicoding",
    category: "Dicoding",
    title: "Pengenalan ke Logika Pemrograman (Programming Logic 101)",
    organizer: "Dicoding Indonesia",
    date: "28 Februari 2026",
    verifyUrl: "https://www.dicoding.com/certificates/0LZ0Y18NNX65",
    desc: "Sertifikat penyelesaian kursus fondasi logika algoritma dan pemecahan masalah komputasional.",
  },
  {
    id: "dicoding-software-dev",
    provider: "Dicoding",
    category: "Dicoding",
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    organizer: "Dicoding Indonesia",
    date: "27 Februari 2026",
    verifyUrl: "https://www.dicoding.com/certificates/MEPJOE3VLZ3V",
    desc: "Sertifikat penyelesaian kursus pengenalan dunia rekayasa perangkat lunak dan ekosistem developer.",
  },

  // MySkill — Kelas Data Analysis & Basic Data
  {
    id: "myskill-data-analysis-prep",
    provider: "MySkill",
    category: "MySkill",
    title: "Data Analysis Preparation",
    organizer: "MySkill",
    date: "15 Agustus 2025",
    desc: "Kelas persiapan alur kerja analisis data dan perumusan objektif analitik.",
  },
  {
    id: "myskill-data-analysis-fundamental",
    provider: "MySkill",
    category: "MySkill",
    title: "Data Analysis Fundamental",
    organizer: "MySkill",
    date: "15 Agustus 2025",
    desc: "Kelas dasar pemahaman siklus hidup data, pengumpulan, dan pembersihan data.",
  },
  {
    id: "myskill-statistics",
    provider: "MySkill",
    category: "MySkill",
    title: "Statistics",
    organizer: "MySkill",
    date: "17 Agustus 2025",
    desc: "Kelas pemahaman statistik deskriptif dan inferensial untuk kebutuhan analitik.",
  },
  {
    id: "myskill-business-metrics",
    provider: "MySkill",
    category: "MySkill",
    title: "Business Metrics",
    organizer: "MySkill",
    date: "17 Agustus 2025",
    desc: "Kelas pengenalan indikator kinerja utama (KPI) dan metrik bisnis berbasis data.",
  },
  {
    id: "myskill-product-metrics",
    provider: "MySkill",
    category: "MySkill",
    title: "Product Metrics",
    organizer: "MySkill",
    date: "18 Agustus 2025",
    desc: "Kelas pemahaman metrik performa produk digital dan retensi pengguna.",
  },
  {
    id: "myskill-marketing-metrics",
    provider: "MySkill",
    category: "MySkill",
    title: "Marketing Business Metrics",
    organizer: "MySkill",
    date: "18 Agustus 2025",
    desc: "Kelas pengukuran performa akuisisi dan efektivitas pemasaran berbasis data.",
  },
  {
    id: "myskill-data-to-insight",
    provider: "MySkill",
    category: "MySkill",
    title: "Data to Insight",
    organizer: "MySkill",
    date: "12 Agustus 2025",
    desc: "Kelas transformasi data mentah menjadi wawasan strategis yang dapat ditindaklanjuti.",
  },
  {
    id: "myskill-data-story",
    provider: "MySkill",
    category: "MySkill",
    title: "Data Story",
    organizer: "MySkill",
    date: "12 Agustus 2025",
    desc: "Kelas teknik komunikasi dan narasi data secara persuasif bagi pemangku kepentingan.",
  },
  {
    id: "myskill-understanding-bp",
    provider: "MySkill",
    category: "MySkill",
    title: "Understanding Business Process",
    organizer: "MySkill",
    date: "12 Agustus 2025",
    desc: "Kelas pemetaan alur proses bisnis organisasi dan integrasi titik data kunci.",
  },
  {
    id: "myskill-story-vs-dashboard",
    provider: "MySkill",
    category: "MySkill",
    title: "Data Story vs Dashboard",
    organizer: "MySkill",
    date: "14 Agustus 2025",
    desc: "Kelas perbandingan penyusunan visualisasi interaktif dashboard dan penyampaian cerita data.",
  },
  {
    id: "myskill-business-value",
    provider: "MySkill",
    category: "MySkill",
    title: "Business Value from Data",
    organizer: "MySkill",
    date: "14 Agustus 2025",
    desc: "Kelas optimalisasi nilai ekonomi dan efisiensi operasional berbasis analitik data.",
  },
  {
    id: "myskill-data-mgmt",
    provider: "MySkill",
    category: "MySkill",
    title: "Business Data and Information Management for Long-Term Used",
    organizer: "MySkill",
    date: "14 Agustus 2025",
    desc: "Kelas tata kelola penyimpanan dan keandalan data bisnis untuk jangka panjang.",
  },
  {
    id: "myskill-data-driven-decission",
    provider: "MySkill",
    category: "MySkill",
    title: "Data Driven-Decission",
    organizer: "MySkill",
    date: "14 Agustus 2025",
    desc: "Kelas kerangka pengambilan keputusan strategis berbasis pembuktian data faktual.",
  },
  {
    id: "myskill-getting-started-project",
    provider: "MySkill",
    category: "MySkill",
    title: "Getting Started with Data Project",
    organizer: "MySkill",
    date: "15 Agustus 2025",
    desc: "Kelas panduan memulai inisiasi proyek analitik data dari perumusan hingga implementasi.",
  },
  {
    id: "myskill-preparing-career",
    provider: "MySkill",
    category: "MySkill",
    title: "Preparing Career in Data Role",
    organizer: "MySkill",
    date: "15 Agustus 2025",
    desc: "Kelas persiapan kompetensi profesional untuk memasuki karir di bidang data.",
  },
];

const PROVIDERS = ["Semua", "Tempa AI", "Dicoding", "MySkill"];

export default function Certificates() {
  const ref = useReveal({ repeat: true });
  const [filter, setFilter] = useState("Semua");

  const filtered =
    filter === "Semua"
      ? CERTIFICATES
      : CERTIFICATES.filter((c) => c.category === filter);

  return (
    <section id="certificates" className="section certificates-section">
      <div ref={ref} className="reveal reveal-anim">
        <div className="section-head-wrap">
          <div>
            <div className="section-label anim-left" style={{ "--d": "60ms" }}>
              <span className="section-num">05</span> Sertifikat &amp; Pelatihan
            </div>
            <h2 className="section-title anim-left" style={{ "--d": "220ms" }}>
              Sertifikat &amp; <span className="italic-accent">pembelajaran.</span>
            </h2>
            <p className="cert-disclaimer anim-left" style={{ "--d": "280ms" }}>
              Seluruh entri berikut adalah <strong>sertifikat penyelesaian kelas/kursus</strong> yang telah diselesaikan pada program pelatihan resmi.
            </p>
          </div>

          <div className="filter-pill-group anim-right" style={{ "--d": "320ms" }}>
            {PROVIDERS.map((p) => (
              <button
                key={p}
                type="button"
                className={"filter-pill" + (filter === p ? " active" : "")}
                onClick={() => setFilter(p)}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        <div className="cert-grid">
          {filtered.map((cert, i) => (
            <div
              key={cert.id}
              className={"cert-card anim-up" + (cert.category === "Tempa AI" ? " cert-card-highlight" : "")}
              style={{ "--d": 360 + (i % 6) * 90 + "ms" }}
            >
              <div className="cert-card-top">
                <span className={"cert-badge cert-badge-" + cert.category.toLowerCase().replace(/[^a-z0-9]/g, "")}>
                  {cert.provider}
                </span>
                <span className="cert-date">{cert.date}</span>
              </div>

              <h3 className="cert-title">{cert.title}</h3>
              <div className="cert-org">{cert.organizer}</div>

              {cert.credentialId && (
                <div className="cert-meta-row">
                  <span className="cert-meta-label">ID Sertifikat:</span>
                  <code className="cert-code">{cert.credentialId}</code>
                </div>
              )}

              {cert.statusText && (
                <div className="cert-status-badge">
                  {cert.statusText}
                </div>
              )}

              {cert.desc && <p className="cert-desc">{cert.desc}</p>}

              <div className="cert-actions">
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-btn primary"
                  >
                    <span>Verifikasi Sertifikat</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                )}

                {cert.projectUrl && (
                  <a
                    href={cert.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-btn ghost"
                  >
                    <span>{cert.projectUrlLabel || "Lihat Proyek"}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
