import { useReveal } from "../hooks.js";
import MagneticButton from "./MagneticButton.jsx";
import Lanyard from "./Lanyard.jsx";

export default function About() {
  const ref = useReveal({ repeat: true });
  const scrollTo = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="about" className="section">
      <div ref={ref} className="reveal reveal-anim">
        <div className="section-label anim-left" style={{ "--d": "60ms" }}>
          <span className="section-num">01</span> Tentang Saya
        </div>
        <div className="about-grid">
          <div className="about-left">
            <h2 className="about-title about-title-stack">
              <span className="about-hello anim-left" style={{ "--d": "220ms" }}>Halo, saya</span>
              <span className="about-name anim-left" style={{ "--d": "380ms" }}>Yusuf Al-Qodri Tsania Susma</span>
            </h2>
            <p className="about-body anim-left" style={{ "--d": "540ms" }}>
              Saya adalah mahasiswa Geofisika dan Meteorologi Terapan di IPB University
              dengan minat mendalam pada integrasi Data Science, Artificial Intelligence,
              serta Analisis Iklim dan Hidrologi. Saya berfokus pada pengolahan data
              kompleks menjadi wawasan bermakna dan membangun solusi komputasional untuk
              persoalan nyata di bidang sains atmosfer, hidrometeorologi, dan pertanian.
            </p>

            {/* Education Blocks */}
            <div className="about-edu-wrap anim-up" style={{ "--d": "680ms" }}>
              <div className="about-edu-header">
                <span className="about-edu-title">Riwayat Pendidikan</span>
              </div>
              <div className="about-edu-grid">
                <div className="about-edu-card">
                  <div className="about-edu-badge">Pendidikan Tinggi</div>
                  <div className="about-edu-name">IPB University</div>
                  <div className="about-edu-major">Geofisika dan Meteorologi Terapan</div>
                  <div className="about-edu-meta">Status: Mahasiswa Aktif</div>
                </div>
                <div className="about-edu-card">
                  <div className="about-edu-badge">Program Diploma 1</div>
                  <div className="about-edu-name">Institut Teknologi Sepuluh Nopember (ITS)</div>
                  <div className="about-edu-major">D1 Prodistik ITS</div>
                  <div className="about-edu-meta">Tahun: 2024 · Selesai</div>
                </div>
              </div>
            </div>

            <div className="about-actions anim-up" style={{ marginTop: 24, "--d": "780ms" }}>
              <MagneticButton strength={0.2}>
                <a
                  href="#contact"
                  className="btn primary"
                  onClick={(e) => scrollTo(e, "contact")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Hubungi Saya
                </a>
              </MagneticButton>
              <MagneticButton strength={0.2}>
                <a
                  href="#work"
                  className="btn ghost about-btn-ghost"
                  onClick={(e) => scrollTo(e, "work")}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  Lihat Proyek
                </a>
              </MagneticButton>
            </div>
          </div>
          <div className="about-right anim-right" style={{ "--d": "320ms" }}>
            <Lanyard position={[0, 0, 13]} fov={17} transparent />
          </div>
        </div>
      </div>
    </section>
  );
}
