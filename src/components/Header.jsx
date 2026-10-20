import { useScrollSpy } from "../hooks.js";
import MagneticButton from "./MagneticButton.jsx";

export default function Header() {
  const active = useScrollSpy(["home", "about", "work", "experience", "certificates", "contact"]);
  const links = [
    { id: "home", label: "Beranda" },
    { id: "about", label: "Tentang Saya" },
    { id: "work", label: "Proyek" },
    { id: "experience", label: "Pengalaman" },
    { id: "certificates", label: "Sertifikat" },
    { id: "contact", label: "Kontak" },
  ];
  const onJump = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="nav">
      <a
        href="#home"
        className="nav-brand"
        onClick={(e) => onJump(e, "home")}
      >
        <span className="nav-brand-dot" />
        Yusuf
      </a>
      <div className="nav-links">
        {links.map((l) => (
          <a
            key={l.id}
            href={"#" + l.id}
            className={"nav-link" + (active === l.id ? " active" : "")}
            onClick={(e) => onJump(e, l.id)}
          >
            {l.label}
          </a>
        ))}
      </div>
      <div className="nav-right">
        <MagneticButton strength={0.3}>
          <a
            href="#contact"
            className="btn primary"
            onClick={(e) => onJump(e, "contact")}
          >
            Hubungi Saya <span className="btn-arrow">→</span>
          </a>
        </MagneticButton>
      </div>
    </nav>
  );
}
