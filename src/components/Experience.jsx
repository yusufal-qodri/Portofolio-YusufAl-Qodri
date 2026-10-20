import { useState } from "react";
import { useReveal } from "../hooks.js";

const EXPERIENCES = [
  {
    id: "brmp-agroklimat",
    category: "Magang",
    role: "Peserta Magang",
    organization: "BRMP Agroklimat dan Hidrologi Pertanian",
    period: "Selesai",
    topic: "Prediksi Kelembaban Time Series untuk Estimasi Pertumbuhan Organisme Pengganggu Tanaman (OPT)",
    desc: "Melaksanakan kegiatan magang dengan fokus topik riset kelembaban time series untuk mendukung estimasi dinamika perkembangan Organisme Pengganggu Tanaman (OPT) pada sektor agroklimat dan hidrologi pertanian.",
    points: [
      "Fokus pada topik 'Prediksi Kelembaban Time Series untuk Estimasi Pertumbuhan Organisme Pengganggu Tanaman (OPT)'",
      "Penerapan analisis data deret waktu (time series) pada parameter kelembaban lingkungan pertanian",
    ],
    tags: ["Time Series", "Agroklimat", "Hidrologi Pertanian"],
  },
  {
    id: "bem-kastrat",
    category: "Organisasi",
    role: "Anggota Departemen Kastrat",
    organization: "BEM FMIPA IPB",
    period: "Desember 2025 – Sekarang",
    desc: "Berkontribusi aktif sebagai anggota Departemen Kajian dan Aksi Strategis (Kastrat) BEM FMIPA IPB dalam mengawal kajian isu-isu strategis kemahasiswaan, sains, dan kebijakan publik kampus.",
    points: [
      "Menjadi bagian dari tim riset dan pengkajian isu strategis kemahasiswaan serta sains di lingkungan FMIPA IPB",
      "Kolaborasi perumusan pandangan kritis terhadap isu internal maupun eksternal kampus",
    ],
    tags: ["Kajian Strategis", "Kebijakan Publik", "Advokasi"],
  },
  {
    id: "bem-biro-eksternal",
    category: "Magang",
    role: "Magang Biro Eksternal dan Riset",
    organization: "BEM FMIPA IPB",
    period: "September – Oktober 2025",
    desc: "Menjalankan program magang pada Biro Eksternal dan Riset BEM FMIPA IPB untuk mendukung koordinasi kelembagaan luar dan pengumpulan data riset organisasi.",
    points: [
      "Program magang kelembagaan di Biro Eksternal dan Riset",
      "Mendukung aktivitas riset dan perluasan jejaring relasi organisasi",
    ],
    tags: ["Riset Organisasi", "Relasi Eksternal"],
  },
  {
    id: "ngariun-g-2026",
    category: "Kepanitiaan",
    role: "Ketua Pelaksana",
    organization: "NGARIUN-G FMIPA IPB 2026",
    period: "2026",
    desc: "Memimpin pelaksanaan forum dialog dan penyampaian aspirasi civitas akademika FMIPA IPB (NGARIUN-G) untuk membangun komunikasi konstruktif dengan pihak dekanat.",
    points: [
      "Menjadi wadah aspirasi mahasiswa secara terstruktur",
      "Membuka komunikasi dua arah yang transparan dengan pimpinan dekanat",
      "Mengubah aspirasi menjadi bahan pertimbangan dan solusi konkret",
      "Memperkuat hubungan antarmahasiswa dan departemen di FMIPA IPB",
      "Mendorong mahasiswa lebih kritis dan peduli terhadap kemajuan fakultas",
    ],
    tags: ["Kepemimpinan", "Manajemen Forum", "Aspirasi Mahasiswa"],
  },
  {
    id: "volunteer-mangrove",
    category: "Volunteer",
    role: "Relawan Konservasi Pesisir",
    organization: "Kegiatan Konservasi Mangrove",
    period: "2026",
    desc: "Turut berpartisipasi dalam kegiatan kerelawanan pelestarian ekosistem pesisir melalui pembelajaran taksonomi mangrove, penanaman bibit, dan aksi bersih pantai.",
    points: [
      "Pengenalan keanekaragaman dan adaptasi jenis mangrove",
      "Praktik penanaman bibit mangrove di habitat pesisir",
      "Aksi pembersihan sampah pantai (coastal clean-up)",
    ],
    tags: ["Konservasi Lingkungan", "Mangrove", "Aksi Pesisir"],
  },
];

const CATEGORIES = ["Semua", "Magang", "Organisasi", "Kepanitiaan", "Volunteer"];

export default function Experience() {
  const ref = useReveal({ repeat: true });
  const [filter, setFilter] = useState("Semua");

  const filtered =
    filter === "Semua"
      ? EXPERIENCES
      : EXPERIENCES.filter((exp) => exp.category === filter);

  return (
    <section id="experience" className="section experience-section">
      <div ref={ref} className="reveal reveal-anim">
        <div className="section-head-wrap">
          <div>
            <div className="section-label anim-left" style={{ "--d": "60ms" }}>
              <span className="section-num">04</span> Pengalaman
            </div>
            <h2 className="section-title anim-left" style={{ "--d": "220ms" }}>
              Pengalaman &amp; <span className="italic-accent">kontribusi.</span>
            </h2>
          </div>

          <div className="filter-pill-group anim-right" style={{ "--d": "320ms" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={"filter-pill" + (filter === cat ? " active" : "")}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="experience-list">
          {filtered.map((exp, i) => (
            <div
              key={exp.id}
              className="experience-card anim-up"
              style={{ "--d": 380 + i * 120 + "ms" }}
            >
              <div className="exp-card-header">
                <div className="exp-header-left">
                  <span className="exp-cat-badge">{exp.category}</span>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-org">{exp.organization}</div>
                </div>
                <div className="exp-period-pill">{exp.period}</div>
              </div>

              {exp.topic && (
                <div className="exp-topic-box">
                  <span className="exp-topic-label">Topik Magang:</span>
                  <span className="exp-topic-title">"{exp.topic}"</span>
                </div>
              )}

              <p className="exp-desc">{exp.desc}</p>

              {exp.points && (
                <ul className="exp-points">
                  {exp.points.map((pt, idx) => (
                    <li key={idx} className="exp-point-item">
                      <span className="exp-point-dot" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="exp-tags">
                {exp.tags.map((t) => (
                  <span key={t} className="exp-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
