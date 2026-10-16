import { useReveal } from "../hooks.js";
import WorkArt from "./WorkArt.jsx";

export default function Work(props) {
  const onOpen = props.onOpen;
  const ref = useReveal({ repeat: true });
  const projects = [
    {
      id: "sap-migration",
      name: "BRIFIRST - SAP Basis Operations & Administration",
      cat: "SAP Basis · 2025–2026",
      tag: "SAP S/4HANA",
      art: "sap",
      cover: "/assets/SAP Project BRIFIRST.png",
      size: "large",
      desc: "Handled day-to-day SAP Basis operations for the BRIFIRST landscape at Bank BRI, including user and authorization management, transport request handling, batch job monitoring, and deployment across development, QA, and production systems.",
      year: "Nov 2023 – Nov 2024",
      tools: "SAP S/4HANA · BMC Control-M · SAP Fiori · SAP HANA",
      duration: "12 months",
      tags: ["S/4HANA", "BMC Control-M", "SAP Fiori", "User Management"],
    },
    {
      id: "niagahoster-checkout",
      name: "Niagahoster - Seamless Checkout Experience",
      cat: "UI/UX Design · Web Design · 2024",
      tag: "UI/UX Design",
      art: "video",
      cover: "/assets/Niagahoster Web.jpg",
      size: "small",
      desc: "A comprehensive UI/UX redesign of a web hosting checkout flow, focusing on user-centered design to reduce cart abandonment and streamline the purchasing journey.",
      year: "2024",
      tools: "Figma · InVision · Maze",
      duration: "1-2 months",
      tags: ["UI/UX", "Figma", "E-commerce"],
    },
    {
      id: "waste4change-app",
      name: "Waste4Change - Mobile App Redesign",
      cat: "UI / UX · 2025",
      tag: "UI/UX Design",
      art: "uiux",
      cover: "/assets/Waste4Change Apps.jpg",
      size: "med-l",
      desc: "The project aimed to simplify the process for users to manage, schedule, and send their sorted waste right from their smartphones. By reducing cognitive load and optimizing the visual layout.",
      year: "2025",
      tools: "Figma · InVision",
      duration: "8 weeks",
      tags: ["Mobile App", "Sustainability", "User-Centered Design"],
    },
    {
      id: "sap-basis-consultant",
      name: "PT SISI - SAP Basis Consultant",
      cat: "SAP Basis · Enterprise Infrastructure · 2025",
      tag: "SAP ECC",
      art: "motion",
      cover: "/assets/SAP ECC PT SISI.jpg",
      size: "med-r",
      desc: "Comprehensive end-to-end SAP Basis Consulting and system management to ensure high availability, security, and optimal performance of enterprise SAP environments (ERP, ECC, and Oracle).",
      year: "Feb 2025 – May 2025",
      tools: "SAP GUI · SAP ECC · Oracle Database",
      duration: "4 months",
      tags: ["Basis Consulting", "System Monitoring", "Landscape Config"],
    },
  ];
  return (
    <section id="work" className="section">
      <div ref={ref} className="reveal reveal-anim">
        <div className="work-head">
          <div>
            <div className="section-label anim-left" style={{ "--d": "60ms" }}>
              <span className="section-num">03</span> Selected Work
            </div>
            <h2 className="work-title anim-left" style={{ "--d": "220ms" }}>
              Things I've <span className="italic-accent">shipped.</span>
            </h2>
          </div>
        </div>
        <div className="work-grid">
          {projects.map((p, i) => (
            <button
              key={p.id}
              className={"work-card anim-up " + p.size}
              style={{ "--d": 320 + i * 200 + "ms" }}
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
