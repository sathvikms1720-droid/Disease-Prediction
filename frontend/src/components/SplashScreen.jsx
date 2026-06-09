import React, { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onFinish, 800); // Slight pause at 100% for effect
          return 100;
        }
        return prev + 1;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onFinish]);

  // Steps configuration based on the image
  const steps = [
    { label: "Initializing", value: 20, color: "#9333ea", icon: "⚙️" },
    { label: "Loading Data", value: 40, color: "#3b82f6", icon: "☁️" },
    { label: "Analyzing", value: 60, color: "#10b981", icon: "📊" },
    { label: "Processing AI", value: 80, color: "#f59e0b", icon: "🧠" },
    { label: "Complete", value: 100, color: "#22c55e", icon: "✅" },
  ];

  return (
    <div style={styles.container}>
      {/* Decorative Background Blobs */}
      <div style={styles.blobTopLeft} />
      <div style={styles.blobBottomRight} />

      {/* Floating Medical Icons (Simplified placeholders) */}
      <div style={{ ...styles.floatingIcon, top: "15%", left: "15%" }}>🧬</div>
      <div style={{ ...styles.floatingIcon, top: "40%", left: "10%" }}>❤️</div>
      <div style={{ ...styles.floatingIcon, top: "48%", left: "18%" }}>💊</div>
      <div style={{ ...styles.floatingIcon, top: "25%", right: "20%" }}>🛡️</div>
      <div style={{ ...styles.floatingIcon, top: "35%", right: "12%" }}>🩺</div>
      <div style={{ ...styles.floatingIcon, top: "48%", right: "18%" }}>🧪</div>

      {/* Header Section */}
      <div style={styles.header}>
        <div style={styles.logoContainer}>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="3">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        </div>
        <h1 style={styles.title}>MediCheck</h1>
        <p style={styles.subtitle}>AI Powered Disease Prediction</p>
      </div>

      {/* Main Circular Progress */}
      <div style={styles.circleWrapper}>
        <svg width="240" height="240">
          <circle
            cx="120" cy="120" r="100"
            stroke="#f1f5f9" strokeWidth="10" fill="none"
          />
          <circle
            cx="120" cy="120" r="100"
            stroke="url(#grad)" strokeWidth="10" fill="none"
            strokeLinecap="round"
            strokeDasharray={628}
            strokeDashoffset={628 - (628 * progress) / 100}
            transform="rotate(-90 120 120)"
            style={{ transition: "stroke-dashoffset 0.1s linear" }}
          />
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
        </svg>
        <div style={styles.percentText}>
          {progress}<span style={{ fontSize: "1.5rem" }}>%</span>
        </div>
      </div>

      <div style={styles.loadingText}>
        Loading <span style={{ color: "#2563eb", fontWeight: 600 }}>MediCheck...</span>
        <div style={styles.subLoadingText}>Please wait while we prepare your experience</div>
      </div>

      {/* Footer Steps Progress */}
      <div style={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} style={styles.stepItem}>
            <div style={{
              ...styles.stepIcon,
              backgroundColor: progress >= step.value ? step.color : "#f1f5f9",
              color: progress >= step.value ? "white" : "#94a3b8",
              boxShadow: progress >= step.value ? `0 0 15px ${step.color}66` : "none"
            }}>
              {step.icon}
            </div>
            <div style={styles.stepLabel}>{step.label}</div>
            <div style={{ ...styles.stepValue, color: progress >= step.value ? step.color : "#94a3b8" }}>
              {step.value}%
            </div>
          </div>
        ))}
        {/* Connector Line */}
        <div style={styles.stepLine} />
      </div>

      {/* Clipboard Illustration Placeholder */}
      <div style={styles.clipboardOverlay}>
         <div style={styles.clipboardCard}>
            <div style={styles.cardLineShort} />
            <div style={styles.cardLineLong} />
            <div style={styles.cardLineLong} />
            <div style={styles.cardBadge}>+</div>
         </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    background: "#ffffff",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    position: "relative",
    overflow: "hidden",
  },
  blobTopLeft: {
    position: "absolute",
    top: "-10%",
    left: "-10%",
    width: "40%",
    height: "40%",
    background: "linear-gradient(135deg, #dbeafe 0%, #ffffff 100%)",
    borderRadius: "50%",
    filter: "blur(60px)",
    zIndex: 0,
  },
  blobBottomRight: {
    position: "absolute",
    bottom: "-10%",
    right: "-10%",
    width: "40%",
    height: "40%",
    background: "linear-gradient(135deg, #ffffff 0%, #ede9fe 100%)",
    borderRadius: "50%",
    filter: "blur(60px)",
    zIndex: 0,
  },
  floatingIcon: {
    position: "absolute",
    fontSize: "1.5rem",
    opacity: 0.6,
    padding: "10px",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  },
  header: {
    textAlign: "center",
    zIndex: 1,
    marginBottom: "20px",
  },
  logoContainer: {
    marginBottom: "10px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "#1e293b",
    margin: 0,
    letterSpacing: "-1px",
  },
  subtitle: {
    color: "#64748b",
    fontSize: "1rem",
    marginTop: "4px",
  },
  circleWrapper: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "30px 0",
    zIndex: 1,
  },
  percentText: {
    position: "absolute",
    fontSize: "4rem",
    fontWeight: "700",
    color: "#1e293b",
  },
  loadingText: {
    textAlign: "center",
    fontSize: "1.1rem",
    color: "#475569",
    zIndex: 1,
  },
  subLoadingText: {
    fontSize: "0.85rem",
    color: "#94a3b8",
    marginTop: "8px",
  },
  stepsContainer: {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    maxWidth: "700px",
    marginTop: "60px",
    position: "relative",
    zIndex: 1,
  },
  stepItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 2,
    flex: 1,
  },
  stepIcon: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.2rem",
    transition: "all 0.4s ease",
    border: "4px solid white",
  },
  stepLabel: {
    fontSize: "0.75rem",
    fontWeight: "600",
    color: "#64748b",
    marginTop: "10px",
  },
  stepValue: {
    fontSize: "0.8rem",
    fontWeight: "700",
    marginTop: "4px",
  },
  stepLine: {
    position: "absolute",
    top: "22px",
    left: "10%",
    right: "10%",
    height: "2px",
    background: "#f1f5f9",
    zIndex: 1,
  },
  clipboardOverlay: {
    position: "absolute",
    bottom: "5%",
    right: "10%",
    zIndex: 1,
    transform: "rotate(5deg)",
  },
  clipboardCard: {
    width: "100px",
    height: "130px",
    background: "white",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    padding: "15px",
    position: "relative",
    border: "1px solid #e2e8f0",
  },
  cardLineShort: { width: "40%", height: "6px", background: "#f1f5f9", marginBottom: "10px" },
  cardLineLong: { width: "100%", height: "6px", background: "#f1f5f9", marginBottom: "8px" },
  cardBadge: {
    position: "absolute",
    bottom: "10px",
    right: "-10px",
    width: "35px",
    height: "35px",
    background: "#3b82f6",
    color: "white",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    boxShadow: "0 4px 10px rgba(59, 130, 246, 0.4)",
  }
};