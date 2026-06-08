import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import React from "react";
import Navbar from "../components/Navbar";
import { Link, useLocation } from "react-router-dom";
import { 
  ArrowLeft, 
  CheckCircle2, 
  HeartPulse, 
  Info, 
  AlertTriangle, 
  RotateCcw, 
  ClipboardList 
} from "lucide-react";

function Result() {
  const location = useLocation();
  
  // Dynamic fallback data matching the state payload values exactly
  const { 
    selectedSymptoms = ["Fever", "Cough", "Headache", "Sore Throat", "Fatigue"],
    mostLikely = {
      disease: "Common Cold",
      matchScore: 92,
      description: "A viral infection affecting the nose and throat (upper respiratory tract).",
      recommendation: "Rest, drink plenty of fluids, and consult a doctor if symptoms worsen."
    },
    otherConditions = [
      { id: 2, name: "Flu (Influenza)", desc: "A viral infection that attacks your respiratory system.", score: 78 },
      { id: 3, name: "Allergy", desc: "An immune system reaction to allergens.", score: 65 },
      { id: 4, name: "Sinusitis", desc: "Inflammation of the sinuses causing pain and congestion.", score: 45 }
    ]
  } = location.state || {};
  const matchScore = mostLikely.matchScore;

const confidenceLabel =
  matchScore >= 80
    ? "High Confidence"
    : matchScore >= 50
    ? "Medium Confidence"
    : "Low Confidence";

const stars =
  matchScore >= 80
    ? "★★★★★"
    : matchScore >= 50
    ? "★★★☆☆"
    : "★☆☆☆☆";
    

  return (
    <>
      <Navbar />
<div
  style={{
    minHeight: "calc(100vh - 120px)",
    width: "100%",
    overflowX: "hidden",
    background: "#f8fafc",
    fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
    color: "#0f172a",
    paddingTop: "120px",
    paddingBottom: "40px",
    boxSizing: "border-box",
  }}
>
      <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
        
        {/* Back Button Link */}
       

        {/* Header Summary Dashboard Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "32px",
          }}
        >
          <div>
            <h1 style={{ fontSize: "2.25rem", fontWeight: "800", color: "#0f172a", margin: "0 0 8px 0", letterSpacing: "-0.02em" }}>
              Analysis Results
            </h1>
            <p style={{ margin: 0, color: "#64748b", fontSize: "085", fontWeight: "500" }}>
              Based on the symptoms you selected
            </p>
          </div>

          {/* Top-Right Metrics Counter Indicator */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "16px 24px",
              display: "flex",
              alignItems: "center",
              gap: "16px",
            border: "1px solid #dbe3ef",
boxShadow: "0 10px 25px rgba(15,23,42,0.08)",
            }}
          >
            <div style={{ background: "#eff6ff", padding: "10px", borderRadius: "12px" }}>
              <ClipboardList size={22} color="#2563eb" />
            </div>
            <div>
              <div style={{ fontSize: "0.75rem", color: "#64748b", fontWeight: "600", marginBottom: "2px" }}>Symptoms Analyzed</div>
              <div style={{ fontSize: "1.35rem", fontWeight: "800", color: "#0f172a" }}>
                {selectedSymptoms.length} <span style={{ fontSize: "0.875rem", fontWeight: "500", color: "#64748b" }}>symptoms</span>
              </div>
            </div>
          </div>
        </div>

        {/* TOP ROW SECTION: Full Width Primary Card */}
        <div
          style={{
            background: "#ffffff",
            border: "1px solid #e2e8f0",
            borderRadius: "16px",
            padding: "36px",
          background: "#ffffff",
border: "1px solid #dbe3ef",
borderRadius: "16px",
padding: "24px 28px",
boxShadow: "0 8px 20px rgba(15,23,42,0.06)",
            marginBottom: "24px"
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div>
              <span
                style={{
                  background: "#eff6ff",
                  color: "#2563eb",
                  fontSize: "0.75rem",
                  fontWeight: "700",
                  padding: "6px 14px",
                  borderRadius: "20px",
                  display: "inline-block",
                  marginBottom: "16px",
                }}
              >
                Most Likely Condition
              </span>

              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
                <h2 style={{ fontSize: "2.25rem", fontWeight: "800", color: "#0f172a", margin: 0, letterSpacing: "-0.02em" }}>
                  {mostLikely.disease}
                </h2>
                <div style={{ background: "#e0f2fe", borderRadius: "50%", padding: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <CheckCircle2 size={18} color="#22c55e" fill="#ffffff" />
                </div>
              </div>

              <p style={{ color: "#475569", fontSize: "085", lineHeight: "1.6", margin: "0 0 20px 0", maxWidth: "600px" }}>
                {mostLikely.description}
              </p>

              {/* Confidence Stars Row */}
              <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
  <span
    style={{
      color: "#eab308",
      fontSize: "1rem",
    }}
  >
    {stars}
  </span>

  <span
    style={{
      color:
        matchScore >= 80
          ? "#16a34a"
          : matchScore >= 50
          ? "#d97706"
          : "#dc2626",
      fontSize: "0.95rem",
      fontWeight: "600",
      marginLeft: "4px",
    }}
  >
    {confidenceLabel}
  </span>
</div>
              
            </div>

            {/* Circular Gauge Progression Indicator */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginRight: "40px", marginTop: "10px" }}>
              <div style={{ position: "relative", width: "350px", height: "200px" }}>
                <svg viewBox="0 0 100 100" style={{ transform: "rotate(-220deg)", width: "100%", height: "100%" }}>
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#f1f5f9"
                    strokeWidth="9"
                    strokeDasharray="251.2"
                    strokeDashoffset="70"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    stroke="#2563eb"
                    strokeWidth="9"
                    strokeDasharray="251.2"
                    strokeDashoffset={251.2 - (251.2 - 70) * (mostLikely.matchScore / 100)}
                    strokeLinecap="round"
                  />
                </svg>
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    top: "12px"
                  }}
                >
                  <span
  style={{
    color:
      matchScore >= 80
        ? "#16a34a"
        : matchScore >= 50
        ? "#d97706"
        : "#dc2626",
    fontWeight: "700",
    fontSize: "1.2rem",
    background:
      matchScore >= 80
        ? "#f0fdf4"
        : matchScore >= 50
        ? "#fff7ed"
        : "#fef2f2",
    padding: "6px 12px",
    borderRadius: "8px",
  }}
>
  {matchScore}% Match
</span>
                  <span style={{ fontSize: "0.85rem", color: "#2563eb", fontWeight: "700", marginTop: "2px" }}>
                    Match Score
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Inline Action Advisory Split Grid Footer Frames */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", borderTop: "1px solid #f1f5f9", paddingTop: "24px" }}>
            {/* Recommendation block wrapper */}
            <div
              style={{
                background: "#f0fdf4",
border: "2px solid #86efac",
boxShadow: "0 8px 20px hsla(0, 0%, 100%, 0.87)",
                borderRadius: "12px",
                padding: "16px 20px",
                display: "flex",
                gap: "12px",
              }}
            >
              <div style={{ background: "#22c55e", borderRadius: "50%", width: "28px", height: "28px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                <HeartPulse size={15} color="#ffffff" />
              </div>
              <div>
                <h4 style={{ margin: "0 0 4px 0", fontSize: "0.875rem", fontWeight: "700", color: "#14532d" }}>
                  Recommendation
                </h4>
                <p style={{ margin: 0, fontSize: "0.85rem", color: "#166534", lineHeight: "1.5", fontWeight: "500" }}>
                  {mostLikely.recommendation}
                </p>
              </div>
            </div>

            {/* AI Warning block container */}
<div
  style={{
    background: "#f8fbff",
    border: "1px solid #bfdbfe",
    borderRadius: "14px",
    padding: "18px 22px",
    display: "flex",
    gap: "14px",
    alignItems: "center",

    // shadow
    boxShadow: "0 8px 20px rgba(37,99,235,0.08)",
  }}
>
  <div
    style={{
      width: "38px",
      height: "38px",
      borderRadius: "50%",
      background: "#dbeafe",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    <Info size={18} color="#2563eb" />
  </div>

  <p
    style={{
      margin: 0,
      fontSize: "0.9rem",
      color: "#475569",
      lineHeight: "1.6",
      fontWeight: "500",
    }}
  >
  This is an AI prediction, not a medical diagnosis.
Confidence scores below 30% indicate low reliability and should be interpreted with caution.
  </p>
</div>
          </div>
        </div>

        {/* BOTTOM SECTION: Two Column Master Layout Grid Split */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "24px" }}>
          
          {/* LEFT COLUMN: Other Possible Conditions Accordion List Container */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "32px",
             border: "1px solid #dbe3ef",
boxShadow: "0 10px 25px rgba(15,23,42,0.08)",
            }}
          >
            <h3 style={{ fontSize: "1rem", fontWeight: "800", color: "#0f172a", margin: "0 0 20px 0" }}>
              Other Possible Conditions
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {otherConditions.map((condition) => (
                <div
                  key={condition.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 20px",
                    background: "#ffffff",
                    border: "1px solid #f1f5f9",
                    borderRadius: "12px",
                  }}
                >
                  <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        background: "#eff6ff",
                        color: "#2563eb",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.85rem",
                        fontWeight: "700",
                      }}
                    >
                      {condition.id}
                    </div>
                    <div>
                      <h4 style={{ margin: "0 0 2px 0", fontSize: "085", fontWeight: "700", color: "#0f172a" }}>
                        {condition.name}
                      </h4>
                      <p style={{ margin: 0, fontSize: "0.825rem", color: "#64748b", fontWeight: "500" }}>{condition.desc}</p>
                    </div>
                  </div>

                  {/* Horizontal Linear Metric Sliders */}
                  <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ width: "110px", height: "6px", background: "#f1f5f9", borderRadius: "10px", overflow: "hidden" }}>
                      <div style={{ width: `${condition.score}%`, height: "100%", background: "#2563eb", borderRadius: "10px" }} />
                    </div>
                    <span style={{ fontSize: "0.85rem", fontWeight: "700", color: "#1e293b", minWidth: "32px", textAlign: "right" }}>
                      {condition.score}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* View More dropdown toggle anchor line control */}
            
          </div>

          {/* RIGHT COLUMN: Stacked Sidebar Modules (Symptoms + Warning Panel) */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            {/* Box: Your Selected Symptoms Tag Chips list container */}
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "16px",
                padding: "24px 28px",
               border: "1px solid #dbe3ef",
boxShadow: "0 10px 25px rgba(15,23,42,0.08)",
              }}
            >
              <h3 style={{ fontSize: "085", fontWeight: "800", color: "#0f172a", margin: "0 0 16px 0" }}>
                Your Selected Symptoms
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {selectedSymptoms.map((symptom, idx) => (
                  <span
                    key={idx}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "6px",
                      background: "#eff6ff",
                      color: "#2563eb",
                      padding: "6px 12px",
                      borderRadius: "8px",
                      fontSize: "0.85rem",
                      fontWeight: "600",
                    }}
                  >
                    <span style={{ color: "#3b82f6", fontWeight: "bold" }}>✓</span> {symptom}
                  </span>
                ))}
              </div>
            </div>

            {/* Box: Important Warning Advisory Notice Card info container frame */}
            <div
              style={{
                background: "#fffbeb",
                border: "1px solid #fcd34d",
boxShadow: "0 8px 20px rgba(217,119,6,0.08)",
                borderRadius: "16px",
                padding: "24px 28px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", color: "#d97706" }}>
                <AlertTriangle size={18} />
                <h4 style={{ margin: 0, fontSize: "0.9rem", fontWeight: "800" }}>Important Notice</h4>
              </div>
              <p style={{ margin: "0 0 10px 0", fontSize: "0.825rem", color: "#92400e", lineHeight: "1.5", fontWeight: "500" }}>
                This tool provides general information only and should not replace professional medical advice, diagnosis, or treatment.
              </p>
              <p style={{ margin: 0, fontSize: "0.825rem", color: "#92400e", lineHeight: "1.5", fontWeight: "700" }}>
                If you have severe symptoms, seek immediate medical attention.
              </p>
            </div>
          </div>
        </div>

        {/* Start New Diagnosis Call to Action Button */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "36px" }}>
          <Link to="/predict" style={{ textDecoration: "none" }}>
            <button
              style={{
                background: "#0f172a",
                color: "#ffffff",
                border: "none",
                borderRadius: "8px",
                padding: "14px 28px",
                fontSize: "0.875rem",
                fontWeight: "700",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                cursor: "pointer",
                boxShadow: "0 4px 6px -1px rgba(15,23,42,0.15)",
              }}
            >
              <RotateCcw size={15} />
              Start New Check
            </button>
          </Link>
        </div>

      </div>
                  {/* Footer */}

    </div>
<footer
  style={{
    borderTop: "1px solid #e2e8f0",
    padding: "30px 60px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    background: "#ffffff",
  }}
>
  {/* Logo */}
  <div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "8px",
  }}
>
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

  {/* Copyright */}
  <p
    style={{
      color: "#64748b",
      fontSize: "0.95rem",
      margin: 0,
    }}
  >
    © 2026 MediCheck. For informational purposes only. Not medical advice.
  </p>

  {/* Links */}
  <div
  style={{
    display: "flex",
    gap: "30px",
  }}
>
  <span
    style={{
      color: "#64748b",
      cursor: "default",
    }}
  >
    Privacy
  </span>

  <span
    style={{
      color: "#64748b",
      cursor: "default",
    }}
  >
    Terms
  </span>

  <Link
    to="/about"
    style={{
      textDecoration: "none",
      color: "#64748b",
    }}
  >
    About
  </Link>
</div>
</footer>
    </>
  );
}

export default Result;