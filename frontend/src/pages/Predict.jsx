import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Search, AlertTriangle } from "lucide-react";

const ALL_SYMPTOMS = [
  "Fever",
  "High Fever",
  "Cough",
  "Fatigue",
  "Headache",
  "Chills",
  "Sweating",
  "Weight Loss",
  "Loss of Appetite",
  "Nausea",
  "Vomiting",
  "Diarrhea",
  "Constipation",
  "Stomach Pain",
  "Acidity",
  "Chest Pain",
  "Back Pain",
  "Neck Pain",
  "Joint Pain",
  "Muscle Pain",
  "Muscle Weakness",
  "Weakness in Limbs",
  "Dizziness",
  "Breathlessness",
  "Fast Heart Rate",
  "Palpitations",
  "Dehydration",
  "Skin Rash",
  "Itching",
  "Yellow Skin",
  "Red Spots Over Body",
  "Swollen Lymph Nodes",
  "Burning Urination",
  "Frequent Urination",
  "Dark Urine",
  "Blurred Vision",
  "Loss of Balance",
  "Restlessness",
  "Lethargy",
  "Mood Swings",
  "Anxiety",
  "Depression",
  "Irritability",
  "Confusion",
  "Stiff Neck",
  "Pain Behind Eyes",
  "Runny Nose",
  "Sneezing",
  "Sore Throat",
  "Phlegm",
  "Blood in Sputum",
  "Abdominal Pain",
  "Cramps",
  "Obesity",
  "Cold Hands and Feet",
].sort((a, b) => a.localeCompare(b));

const ADVANCED_SYMPTOMS = [
  "Nodal Skin Eruptions",
  "Ulcers On Tongue",
  "Muscle Wasting",
  "Burning Micturition",
  "Spotting Urination",
  "Patches In Throat",
  "Sunken Eyes",
  "Indigestion",
  "Yellowish Skin",
  "Yellow Urine",
  "Yellowing Of Eyes",
  "Acute Liver Failure",
  "Swelling Of Stomach",
  "Malaise",
  "Blurred And Distorted Vision",
  "Throat Irritation",
  "Redness Of Eyes",
  "Sinus Pressure",
  "Congestion",
  "Pain During Bowel Movements",
  "Pain In Anal Region",
  "Bloody Stool",
  "Irritation In Anus",
  "Bruising",
  "Swollen Legs",
  "Enlarged Thyroid",
  "Brittle Nails",
  "Excessive Hunger",
  "Slurred Speech",
  "Knee Pain",
  "Hip Joint Pain",
  "Swelling Joints",
  "Movement Stiffness",
  "Spinning Movements",
  "Unsteadiness",
  "Loss Of Smell",
  "Bladder Discomfort",
  "Passage Of Gases",
  "Internal Itching",
  "Toxic Look",
  "Altered Sensorium",
  "Belly Pain",
  "Abnormal Menstruation",
  "Watering From Eyes",
  "Increased Appetite",
  "Polyuria",
  "Family History",
  "Mucoid Sputum",
  "Rusty Sputum",
  "Visual Disturbances",
  "Coma",
  "Stomach Bleeding",
  "Distention Of Abdomen",
  "History Of Alcohol Consumption",
  "Prominent Veins On Calf",
  "Painful Walking",
  "Pus Filled Pimples",
  "Blackheads",
  "Skin Peeling",
  "Small Dents In Nails",
  "Inflammatory Nails",
  "Blister",
  "Red Sore Around Nose",
  "Yellow Crust Ooze",
  "Continuous Sneezing",
  "Shivering",
  "Irregular Sugar Level",
  "Swollen Blood Vessels",
  "Swollen Extremities",
  "Weakness Of One Body Side",
  "Continuous Feel Of Urine",
  "Foul Smell Of Urine",
  "Dischromic Patches",
  "Receiving Blood Transfusion",
  "Receiving Unsterile Injections",
  "Fluid Overload",
].sort((a, b) => a.localeCompare(b));

console.log("Common Symptoms:", ALL_SYMPTOMS.length);
console.log("Advanced Symptoms:", ADVANCED_SYMPTOMS.length);
console.log(
  "Total Symptoms:",
  ALL_SYMPTOMS.length + ADVANCED_SYMPTOMS.length
);
console.log(ADVANCED_SYMPTOMS);

function Predict() {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [showAdvancedSymptoms, setShowAdvancedSymptoms] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const filteredSymptoms = useMemo(() => {
    return [...ALL_SYMPTOMS, ...ADVANCED_SYMPTOMS].filter((symptom) =>
      symptom.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const commonMatches = ALL_SYMPTOMS.filter((symptom) =>
    symptom.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const advancedMatches = ADVANCED_SYMPTOMS.filter((symptom) =>
    symptom.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleToggleSymptom = (symptom) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(
        selectedSymptoms.filter((s) => s !== symptom)
      );
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleRemoveChip = (symptom) => {
    setSelectedSymptoms(
      selectedSymptoms.filter((s) => s !== symptom)
    );
  };

  const handleAnalyzeSymptoms = async () => {
    if (selectedSymptoms.length < 5) {
      setPopupMessage(
        `Please select at least ${
          5 - selectedSymptoms.length
        } more symptom(s) for a more accurate prediction.`
      );

      setTimeout(() => {
        setPopupMessage("");
      }, 3000);

      return;
    }

    setLoading(true);

    try {
      const backendSymptoms = selectedSymptoms.map((symptom) =>
        symptom.toLowerCase().replaceAll(" ", "_")
      );

      const response = await axios.post(
        "http://127.0.0.1:5000/predict",
        {
          symptoms: backendSymptoms,
        }
      );

      navigate("/result", {
        state: {
          selectedSymptoms,
          mostLikely: {
            disease: response.data.disease,
            matchScore: response.data.confidence,
            description:
              "Predicted using Random Forest Machine Learning model.",
            recommendation:
              "Please consult a healthcare professional for confirmation.",
          },
          otherConditions: response.data.top_predictions
            .slice(1)
            .map((item, index) => ({
              id: index + 2,
              name: item.disease,
              desc: "Possible alternative prediction",
              score: item.confidence,
            })),
        },
      });
    } catch (error) {
      console.error(error);
      alert("Prediction failed");
    }

    setLoading(false);
  };

  const navigate = useNavigate();

  return (
        <>
      <Navbar />

      <style>
        {`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>

      {popupMessage && (
        <div
          style={{
            position: "fixed",
            top: "100px",
            right: "20px",
            background: "#ffffff",
            border: "1px solid #f59e0b",
            borderLeft: "5px solid #f59e0b",
            color: "#92400e",
            padding: "16px 20px",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            zIndex: 9999,
            animation: "slideIn 0.4s ease",
            minWidth: "350px",
            fontWeight: "600",
          }}
        >
          ⚠️ {popupMessage}
        </div>
      )}

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
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            margin: "0 auto",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "800",
                color: "#0f172a",
                marginBottom: "8px",
              }}
            >
              Disease Prediction
            </h1>

            <p
              style={{
                fontSize: "1.1rem",
                color: "#64748b",
              }}
            >
              Select all symptoms you're currently experiencing
            </p>
          </motion.div>

          {/* Dynamic Top Block: Shown only when items are checked */}
          {selectedSymptoms.length > 0 && (
            <div
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "12px",
                padding: "24px",
                marginBottom: "24px",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)",
                display: "flex",
                justifyContent: "between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "16px",
              }}
            >
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                    marginBottom: "12px",
                    color: "#334155",
                  }}
                >
                  Selected Symptoms ({selectedSymptoms.length})
                </h3>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                  }}
                >
                  {selectedSymptoms.map((symptom) => (
                    <span
                      key={symptom}
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        background: "#eff6ff",
                        color: "#2563eb",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "0.875rem",
                        fontWeight: "600",
                        border: "1px solid #bfdbfe",
                      }}
                    >
                      {symptom}

                      <button
                        onClick={() => handleRemoveChip(symptom)}
                        style={{
                          background: "none",
                          border: "none",
                          color: "#2563eb",
                          cursor: "pointer",
                          fontWeight: "bold",
                          fontSize: "14px",
                          padding: "0 2px",
                        }}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <button
                onClick={handleAnalyzeSymptoms}
                disabled={loading}
                style={{
                  background: "#0f172a",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  padding: "12px 24px",
                  fontSize: "0.95rem",
                  fontWeight: "700",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow:
                    "0 4px 6px -1px rgba(15,23,42,0.1)",
                }}
              >
                {loading
                  ? "Analyzing..."
                  : `Analyze ${selectedSymptoms.length} Symptoms →`}
              </button>
            </div>
          )}
                    {/* Search Input Bar Wrapper */}
          <div
            style={{
              position: "relative",
              marginBottom: "24px",
            }}
          >
            <Search
              size={20}
              color="#94a3b8"
              style={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            />

            <input
              type="text"
              placeholder="Search symptoms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "16px 16px 16px 48px",
                borderRadius: "12px",
                border: "1px solid #e2e8f0",
                background: "#ffffff",
                fontSize: "1rem",
                color: "#0f172a",
                outline: "none",
                boxSizing: "border-box",
                boxShadow: "0 2px 4px rgba(0,0,0,0.01)",
              }}
            />
          </div>

          {/* Yellow/Orange Informational Advice Banner */}
          <div
            style={{
              background: "#fffbeb",
              border: "1px solid #fef3c7",
              borderRadius: "12px",
              padding: "16px 20px",
              marginBottom: "32px",
              display: "flex",
              gap: "12px",
              alignItems: "flex-start",
            }}
          >
            <AlertTriangle
              size={20}
              color="#d97706"
              style={{
                flexShrink: 0,
                marginTop: "2px",
              }}
            />

            <p
              style={{
                margin: 0,
                fontSize: "0.92rem",
                color: "#92400e",
                lineHeight: "1.5",
              }}
            >
              This tool provides general information only. For severe symptoms,
              chest pain, difficulty breathing, or emergencies, call emergency
              services immediately.
            </p>
          </div>

          {/* Main Selectable Grid System container */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 4px 6px -1px rgba(0,0,0,0.02)",
            }}
          >
            {(!searchQuery.trim() || commonMatches.length > 0) && (
              <>
                <h2
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    marginBottom: "24px",
                    color: "#1e293b",
                  }}
                >
                  Common Symptoms
                </h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "16px",
                  }}
                >
                  {(searchQuery.trim()
                    ? commonMatches
                    : ALL_SYMPTOMS
                  ).map((symptom) => {
                    const isChecked =
                      selectedSymptoms.includes(symptom);

                    return (
                      <div
                        key={symptom}
                        onClick={() =>
                          handleToggleSymptom(symptom)
                        }
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "14px",
                          padding: "16px",
                          borderRadius: "10px",
                          border: isChecked
                            ? "2px solid #2563eb"
                            : "1px solid #e2e8f0",
                          background: isChecked
                            ? "#f8fafc"
                            : "#ffffff",
                          cursor: "pointer",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          readOnly
                          style={{
                            width: "18px",
                            height: "18px",
                            accentColor: "#0f172a",
                          }}
                        />

                        <span
                          style={{
                            fontSize: "0.975rem",
                            fontWeight: isChecked
                              ? "600"
                              : "500",
                            color: isChecked
                              ? "#1e293b"
                              : "#475569",
                          }}
                        >
                          {symptom}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </>
            )}

            {commonMatches.length === 0 &&
              advancedMatches.length === 0 && (
                <div
                  style={{
                    textAlign: "center",
                    padding: "40px 0",
                    color: "#64748b",
                  }}
                >
                  No symptoms found.
                </div>
              )}
                          {!searchQuery.trim() && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "24px",
                }}
              >
                <button
                  onClick={() =>
                    setShowAdvancedSymptoms(!showAdvancedSymptoms)
                  }
                  style={{
                    background: "transparent",
                    border: "none",
                    color: "#2563eb",
                    fontSize: "0.95rem",
                    fontWeight: "700",
                    cursor: "pointer",
                    padding: "8px",
                  }}
                >
                  {showAdvancedSymptoms
                    ? "Hide Advanced Symptoms ▲"
                    : "Show Advanced Symptoms ▼"}
                </button>
              </div>
            )}

            {(showAdvancedSymptoms ||
              (searchQuery.trim() &&
                advancedMatches.length > 0)) && (
              <div
                style={{
                  marginTop: "24px",
                  padding: "0",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    marginBottom: "24px",
                    color: "#1e293b",
                  }}
                >
                  Advanced Symptoms
                </h2>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "16px",
                  }}
                >
                  {(searchQuery.trim()
                    ? advancedMatches
                    : ADVANCED_SYMPTOMS
                  ).map((symptom) => {
                    const isChecked =
                      selectedSymptoms.includes(symptom);

                    return (
                      <div
                        key={symptom}
                        onClick={() =>
                          handleToggleSymptom(symptom)
                        }
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "14px",
                          padding: "16px",
                          borderRadius: "10px",
                          border: isChecked
                            ? "2px solid #2563eb"
                            : "1px solid #e2e8f0",
                          background: isChecked
                            ? "#f8fafc"
                            : "#ffffff",
                          cursor: "pointer",
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          readOnly
                          style={{
                            width: "18px",
                            height: "18px",
                            accentColor: "#0f172a",
                            cursor: "pointer",
                          }}
                        />

                        <span
                          style={{
                            fontSize: "0.975rem",
                            fontWeight: isChecked
                              ? "600"
                              : "500",
                            color: isChecked
                              ? "#1e293b"
                              : "#475569",
                          }}
                        >
                          {symptom}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px",
              marginBottom: "20px",
            }}
          >
            <button
              onClick={handleAnalyzeSymptoms}
              disabled={
                loading || selectedSymptoms.length === 0
              }
              style={{
                background: "#020617",
                color: "#ffffff",
                border: "none",
                borderRadius: "12px",
                padding: "14px 32px",
                fontSize: "1rem",
                fontWeight: "700",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {loading
                ? "Analyzing..."
                : `Analyze ${selectedSymptoms.length} Symptoms →`}
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
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
          © 2026 MediCheck. For informational purposes only. Not medical
          advice.
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

export default Predict;