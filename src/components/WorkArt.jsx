export default function WorkArt(props) {
  const kind = props.kind;
  if (kind === "climate") {
    return (
      <div className="art-svg">
        <svg
          viewBox="0 0 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          {/* Earth globe with latitude / longitude curves */}
          <circle cx="100" cy="60" r="38" />
          <ellipse cx="100" cy="60" rx="38" ry="16" strokeDasharray="3 3" opacity="0.6" />
          <line x1="62" y1="60" x2="138" y2="60" opacity="0.7" />
          <ellipse cx="100" cy="60" rx="18" ry="38" opacity="0.6" />
          <line x1="100" y1="22" x2="100" y2="98" opacity="0.7" />
          {/* Atmosphere envelope rings */}
          <circle cx="100" cy="60" r="48" strokeDasharray="2 4" opacity="0.4" />
          <circle cx="100" cy="60" r="54" strokeDasharray="1 5" opacity="0.25" />
          {/* Solar radiation rays */}
          <line x1="28" y1="28" x2="48" y2="38" strokeWidth="1.5" />
          <line x1="22" y1="42" x2="44" y2="48" strokeWidth="1.5" />
          <circle cx="20" cy="20" r="7" />
          {/* Climate wave cycle indicator */}
          <path d="M 145 35 Q 165 25, 175 45 T 185 65" opacity="0.5" strokeDasharray="2 3" />
          <circle cx="175" cy="45" r="2" fill="currentColor" />
        </svg>
      </div>
    );
  }
  if (kind === "river") {
    return (
      <div className="art-svg">
        <svg
          viewBox="0 0 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          {/* Watershed boundary (Sub-DAS polygon outline) */}
          <path
            d="M 50 85 C 35 65, 45 35, 75 25 C 105 15, 140 20, 160 40 C 175 60, 165 90, 140 100 C 115 110, 75 105, 50 85 Z"
            strokeDasharray="4 4"
            opacity="0.4"
          />
          {/* Elevation contours */}
          <path d="M 70 38 Q 110 32, 145 48" opacity="0.3" />
          <path d="M 60 58 Q 105 50, 150 70" opacity="0.25" />
          {/* Strahler stream network */}
          {/* Order 1 streams */}
          <path d="M 80 30 Q 90 42, 100 52" strokeWidth="0.8" opacity="0.6" />
          <path d="M 125 32 Q 115 44, 100 52" strokeWidth="0.8" opacity="0.6" />
          <path d="M 65 52 Q 80 62, 95 68" strokeWidth="0.8" opacity="0.6" />
          {/* Order 2 streams */}
          <path d="M 100 52 Q 102 60, 95 68" strokeWidth="1.4" opacity="0.8" />
          <path d="M 140 58 Q 120 66, 108 78" strokeWidth="0.8" opacity="0.6" />
          <path d="M 95 68 Q 100 74, 108 78" strokeWidth="1.8" />
          {/* Order 3 main stream to outlet */}
          <path d="M 108 78 Q 118 88, 128 102" strokeWidth="2.4" />
          {/* Outlet pour point marker */}
          <circle cx="128" cy="102" r="4" fill="currentColor" />
          {/* North arrow */}
          <polygon points="168,20 165,30 168,27 171,30" fill="currentColor" stroke="none" />
          <line x1="168" y1="27" x2="168" y2="35" strokeWidth="1" />
          <text x="168" y="16" fontSize="7" fill="currentColor" stroke="none" textAnchor="middle" fontFamily="sans-serif">N</text>
        </svg>
      </div>
    );
  }
  if (kind === "rain") {
    return (
      <div className="art-svg">
        <svg
          viewBox="0 0 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          {/* Spatial Grid Frame */}
          <rect x="25" y="18" width="150" height="84" rx="4" strokeDasharray="3 3" opacity="0.3" />
          <line x1="75" y1="18" x2="75" y2="102" strokeDasharray="2 4" opacity="0.2" />
          <line x1="125" y1="18" x2="125" y2="102" strokeDasharray="2 4" opacity="0.2" />
          <line x1="25" y1="60" x2="175" y2="60" strokeDasharray="2 4" opacity="0.2" />
          {/* Contour curves of rainfall probability */}
          <path d="M 35 85 C 55 60, 85 75, 115 50 C 135 35, 155 45, 168 35" strokeWidth="1.2" opacity="0.7" />
          <path d="M 45 92 C 68 70, 95 82, 125 60 C 145 48, 160 55, 170 48" strokeWidth="1.6" />
          <path d="M 60 98 C 80 82, 105 90, 135 72 C 150 62, 165 68, 172 62" strokeWidth="1" opacity="0.5" />
          {/* Cloud & precipitation icons */}
          <path
            d="M 42 42 C 42 37, 46 33, 51 33 C 53 30, 57 28, 61 28 C 66 28, 70 31, 71 35 C 74 35, 77 38, 77 42 C 77 46, 74 49, 70 49 L 45 49 C 43 49, 42 46, 42 42 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.8"
          />
          {/* Rain lines */}
          <line x1="48" y1="53" x2="45" y2="60" strokeWidth="1.2" opacity="0.7" />
          <line x1="56" y1="53" x2="53" y2="60" strokeWidth="1.2" opacity="0.7" />
          <line x1="64" y1="53" x2="61" y2="60" strokeWidth="1.2" opacity="0.7" />
          {/* ONI index graph line */}
          <polyline points="95,40 108,35 120,44 135,32 150,38 162,28" strokeWidth="1.2" opacity="0.6" strokeDasharray="2 2" />
          <circle cx="162" cy="28" r="2.5" fill="currentColor" />
        </svg>
      </div>
    );
  }
  if (kind === "sap") {
    return (
      <div className="art-svg">
        <svg
          viewBox="0 0 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <rect x="10" y="20" width="80" height="80" rx="4" />
          <rect x="110" y="20" width="80" height="80" rx="4" />
          <line x1="90" y1="60" x2="110" y2="60" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
          <circle cx="50" cy="70" r="3" fill="currentColor" />
          <line x1="60" y1="50" x2="80" y2="50" />
          <line x1="60" y1="70" x2="80" y2="70" />
          <circle cx="150" cy="50" r="3" fill="currentColor" />
          <circle cx="150" cy="70" r="3" fill="currentColor" />
          <line x1="120" y1="50" x2="140" y2="50" />
          <line x1="120" y1="70" x2="140" y2="70" />
        </svg>
      </div>
    );
  }
  if (kind === "video") {
    return (
      <div className="art-svg">
        <svg
          viewBox="0 0 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <rect x="20" y="30" width="160" height="60" rx="4" />
          <polygon
            points="92,50 92,70 112,60"
            fill="currentColor"
            stroke="none"
          />
          <line
            x1="20"
            y1="100"
            x2="180"
            y2="100"
            strokeDasharray="2 4"
          />
          <rect
            x="30"
            y="105"
            width="20"
            height="6"
            fill="currentColor"
            stroke="none"
            opacity="0.6"
          />
          <rect
            x="55"
            y="105"
            width="40"
            height="6"
            fill="currentColor"
            stroke="none"
            opacity="0.4"
          />
          <rect
            x="100"
            y="105"
            width="15"
            height="6"
            fill="currentColor"
            stroke="none"
            opacity="0.6"
          />
          <rect
            x="120"
            y="105"
            width="50"
            height="6"
            fill="currentColor"
            stroke="none"
            opacity="0.4"
          />
        </svg>
      </div>
    );
  }
  if (kind === "uiux") {
    return (
      <div className="art-svg">
        <svg
          viewBox="0 0 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <rect x="20" y="15" width="60" height="90" rx="6" />
          <rect x="90" y="15" width="90" height="90" rx="6" />
          <circle cx="50" cy="35" r="8" />
          <line x1="30" y1="55" x2="70" y2="55" />
          <line x1="30" y1="65" x2="60" y2="65" />
          <rect
            x="30"
            y="78"
            width="40"
            height="14"
            rx="3"
            fill="currentColor"
            stroke="none"
          />
          <line x1="100" y1="25" x2="170" y2="25" strokeWidth="2" />
          <line x1="100" y1="35" x2="150" y2="35" />
          <rect x="100" y="50" width="30" height="30" rx="3" />
          <rect x="135" y="50" width="30" height="30" rx="3" />
          <line x1="100" y1="90" x2="170" y2="90" />
        </svg>
      </div>
    );
  }
  if (kind === "chili") {
    return (
      <div className="art-svg">
        <svg
          viewBox="0 0 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          {/* Simulation axes and grid */}
          <line x1="30" y1="100" x2="170" y2="100" strokeWidth="1.2" opacity="0.6" />
          <line x1="30" y1="20" x2="30" y2="100" strokeWidth="1.2" opacity="0.6" />
          <line x1="30" y1="75" x2="170" y2="75" strokeDasharray="3 3" opacity="0.25" />
          <line x1="30" y1="50" x2="170" y2="50" strokeDasharray="3 3" opacity="0.25" />
          {/* Growth curves */}
          <path d="M 30 100 Q 80 98, 110 65 T 165 30" strokeWidth="1.8" />
          <path d="M 30 100 Q 90 92, 130 50 T 170 20" strokeWidth="1" strokeDasharray="2 3" opacity="0.5" />
          {/* Stylized plant stem with chili fruit */}
          <path d="M 100 100 C 100 80, 105 60, 102 45" strokeWidth="1.6" opacity="0.8" />
          {/* Leaves */}
          <path d="M 102 75 Q 85 68, 88 58 Q 98 65, 102 75" fill="none" strokeWidth="1.2" opacity="0.7" />
          <path d="M 102 62 Q 118 55, 116 46 Q 106 52, 102 62" fill="none" strokeWidth="1.2" opacity="0.7" />
          {/* Chili fruit curve */}
          <path d="M 102 48 Q 112 44, 114 55 Q 115 68, 108 72 Q 104 70, 106 60 Z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.2" />
          {/* Simulation parameter node markers */}
          <circle cx="110" cy="65" r="3" fill="currentColor" />
          <circle cx="165" cy="30" r="3.5" fill="currentColor" />
        </svg>
      </div>
    );
  }
  if (kind === "ai") {
    return (
      <div className="art-svg">
        <svg
          viewBox="0 0 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          {/* Network / Forecasting graph */}
          <line x1="30" y1="95" x2="170" y2="95" strokeWidth="1" opacity="0.4" />
          {/* Time series horizon bands */}
          <path d="M 35 75 Q 70 80, 100 55 T 165 35" strokeWidth="1.8" />
          <path d="M 100 55 Q 130 35, 165 20" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          <path d="M 100 55 Q 130 65, 165 52" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
          {/* Anomaly nodes & connection lines */}
          <circle cx="45" cy="74" r="3" fill="currentColor" />
          <circle cx="75" cy="77" r="3" fill="currentColor" />
          <circle cx="100" cy="55" r="4" fill="currentColor" />
          <circle cx="135" cy="42" r="3" fill="currentColor" />
          <circle cx="165" cy="35" r="3.5" fill="currentColor" />
          {/* Anomaly detection marker ring */}
          <circle cx="100" cy="55" r="9" strokeDasharray="2 2" opacity="0.8" />
        </svg>
      </div>
    );
  }
  if (kind === "motion") {
    return (
      <div className="art-svg">
        <svg
          viewBox="0 0 200 120"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        >
          <circle cx="100" cy="60" r="40" />
          <circle cx="100" cy="60" r="28" opacity="0.6" />
          <circle cx="100" cy="60" r="16" opacity="0.4" />
          <path d="M 60 60 Q 100 20, 140 60 Q 100 100, 60 60" />
          <circle
            cx="100"
            cy="60"
            r="3"
            fill="currentColor"
            stroke="none"
          />
        </svg>
      </div>
    );
  }
  return null;
}
