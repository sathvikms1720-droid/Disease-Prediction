import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,

    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    padding: "20px 80px",

    background: "rgba(255,255,255,0.95)",
    backdropFilter: "blur(10px)",

    borderBottom: "1px solid #f1f5f9",
    boxShadow: "0 2px 20px rgba(0,0,0,0.05)",

    fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
  }}
>
      {/* Brand Logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {/* Simple pulse graphic resembling the logo icon in the video */}
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#2563eb"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
        <span
          style={{
            fontSize: "1.4rem",
            fontWeight: "700",
            color: "#0f172a",
            letterSpacing: "-0.03em",
          }}
        >
          MediCheck
        </span>
      </div>

      {/* Navigation Links and Action Button */}
      <div style={{ display: "flex", alignItems: "center", gap: "35px" }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#64748b",
            fontSize: "0.95rem",
            fontWeight: "500",
          }}
        >
          Home
        </Link>

        <Link
          to="/about"
          style={{
            textDecoration: "none",
            color: "#64748b",
            fontSize: "0.95rem",
            fontWeight: "500",
          }}
        >
          About
        </Link>

        <Link to="/predict" style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: "10px 20px",
              background: "#0f172a",
              color: "#ffffff",
              border: "none",
              borderRadius: "6px",
              fontSize: "0.95rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "background 0.2s ease",
            }}
          >
            Start Diagnosis
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;