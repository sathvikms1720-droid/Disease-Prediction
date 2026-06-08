import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { FaRegHeart } from "react-icons/fa";
import { LuBrain } from "react-icons/lu";
import { LuDatabase } from "react-icons/lu";
import { LuShield } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import {
  MdHealthAndSafety,
  MdScience,
  MdSecurity,
  MdPsychology,
  MdMenuBook,
  MdPerson,
} from "react-icons/md";

function About() {
  return (
    <>
      <Navbar />

      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          background: "#ffffff",
          fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
          color: "#1e293b",
          margin: 0,
          padding: "40px 0 0 0",
          boxSizing: "border-box",
        }}
      >
        {/* Hero Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            padding: "40px 20px 30px 20px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              fontSize: "3.5rem",
              fontWeight: "800",
              color: "#0f172a",
              marginBottom: "16px",
              letterSpacing: "-0.02em",
            }}
          >
            About MediCheck
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              color: "#475569",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.6",
              fontWeight: "500",
            }}
          >
            Empowering you with instant health insights through advanced symptom
            analysis
          </p>
        </motion.div>

        {/* Main Content Layout Wrapper */}
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
            boxSizing: "border-box",
          }}
        >
          {/* 1. Our Mission Box */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "32px 40px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "20px",
              }}
            >
              <FaRegHeart size={28} color="#ff3b3b" />
              <span style={{ color: "#0f172a" }}>Our Mission</span>
            </div>

            <p
              style={{
                color: "#475569",
                fontSize: "1.05rem",
                lineHeight: "1.7",
                marginBottom: "20px",
              }}
            >
              MediCheck was created to bridge the gap between experiencing
              symptoms and seeking professional medical care. We understand that
              health concerns can be worrying, and our goal is to provide you
              with preliminary information to help you make informed decisions
              about your health.
            </p>

            <p
              style={{
                color: "#475569",
                fontSize: "1.05rem",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              Our platform uses a comprehensive symptom database and intelligent
              matching algorithms to suggest possible conditions based on your
              reported symptoms. While we can't replace a doctor's expertise, we
              can help you understand potential causes of your symptoms and
              guide you on the next steps to take.
            </p>
          </div>

          {/* 2. How Our System Works Box */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "32px 40px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: "#7c3aed",
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "32px",
              }}
            >
              <LuBrain size={28} color="#8b2cf5" />
              <span style={{ color: "#0f172a" }}>
                How Our System Works
              </span>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "28px",
              }}
            >
              {/* Step 1 */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    background: "#eff6ff",
                    color: "#2563eb",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}
                >
                  1
                </div>

                <div>
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "#0f172a",
                      margin: "0 0 6px 0",
                    }}
                  >
                    Symptom Collection
                  </h4>

                  <p
                    style={{
                      color: "#64748b",
                      fontSize: "0.98rem",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    You select from a comprehensive list of over 50 common
                    medical symptoms that you're currently experiencing.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    background: "#eff6ff",
                    color: "#2563eb",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}
                >
                  2
                </div>

                <div>
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "#0f172a",
                      margin: "0 0 6px 0",
                    }}
                  >
                    Pattern Matching
                  </h4>

                  <p
                    style={{
                      color: "#64748b",
                      fontSize: "0.98rem",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    Our algorithm compares your symptoms against our disease
                    database, calculating match percentages based on symptom
                    overlap.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    background: "#eff6ff",
                    color: "#2563eb",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "1rem",
                    flexShrink: 0,
                  }}
                >
                  3
                </div>

                <div>
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "#0f172a",
                      margin: "0 0 6px 0",
                    }}
                  >
                    Results & Recommendations
                  </h4>

                  <p
                    style={{
                      color: "#64748b",
                      fontSize: "0.98rem",
                      lineHeight: "1.5",
                      margin: 0,
                    }}
                  >
                    You receive a ranked list of possible conditions with
                    detailed information, severity levels, and actionable
                    recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Key Features Box */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "16px",
              padding: "32px 40px",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: "#16a34a",
                fontSize: "1.5rem",
                fontWeight: "700",
                marginBottom: "28px",
              }}
            >
              <LuDatabase size={28} color="#16a34a" />
              <span style={{ color: "#0f172a" }}>
                Key Features
              </span>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px 40px",
              }}
            >
              {/* Feature 1 */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "8px",
                  }}
                >
                  <LuShield size={22} color="#2563eb" />
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "#0f172a",
                      margin: 0,
                    }}
                  >
                    Privacy First
                  </h4>
                </div>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.96rem",
                    lineHeight: "1.5",
                    margin: 0,
                    paddingLeft: "28px",
                  }}
                >
                  All data stays in your browser. We don't collect or store
                  personal health information.
                </p>
              </div>

              {/* Feature 2 */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "8px",
                  }}
                >
                  <LuBrain size={22} color="#8b2cf5" />
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "#0f172a",
                      margin: 0,
                    }}
                  >
                    Smart Matching
                  </h4>
                </div>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.96rem",
                    lineHeight: "1.5",
                    margin: 0,
                    paddingLeft: "28px",
                  }}
                >
                  Advanced algorithm that considers symptom combinations and
                  severity.
                </p>
              </div>

              {/* Feature 3 */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "8px",
                  }}
                >
                  <LuDatabase size={24} color="#16a34a" />
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "#0f172a",
                      margin: 0,
                    }}
                  >
                    Comprehensive Database
                  </h4>
                </div>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.96rem",
                    lineHeight: "1.5",
                    margin: 0,
                    paddingLeft: "28px",
                  }}
                >
                  Extensive collection of diseases with detailed symptom
                  profiles.
                </p>
              </div>

              {/* Feature 4 */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "8px",
                  }}
                >
                  <LuUsers size={22} color="#f97316" />
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "#0f172a",
                      margin: 0,
                    }}
                  >
                    User-Friendly
                  </h4>
                </div>

                <p
                  style={{
                    color: "#64748b",
                    fontSize: "0.96rem",
                    lineHeight: "1.5",
                    margin: 0,
                    paddingLeft: "28px",
                  }}
                >
                  Intuitive interface designed for ease of use during stressful
                  times.
                </p>
              </div>
            </div>
          </div>

          {/* 4. Important Medical Disclaimer Box */}
          <div
            style={{
              background: "#fffbeb",
              border: "1px solid #fde68a",
              borderRadius: "12px",
              padding: "24px 32px",
              fontSize: "0.98rem",
              lineHeight: "1.6",
              color: "#451a03",
            }}
          >
            <p style={{ margin: "0 0 16px 0" }}>
              <span style={{ fontWeight: "700", color: "#b45309" }}>
                Important Medical Disclaimer:
              </span>
            </p>

            <p style={{ margin: "0 0 16px 0" }}>
              <span style={{ fontWeight: "700" }}>
                MediCheck is not a substitute for professional medical advice,
                diagnosis, or treatment.
              </span>{" "}
              Always seek the advice of your physician or other qualified health
              provider with any questions you may have regarding a medical
              condition.
            </p>

            <p style={{ margin: "0 0 16px 0" }}>
              Never disregard professional medical advice or delay in seeking it
              because of something you have read on this website. If you think
              you may have a medical emergency, call your doctor or emergency
              services immediately.
            </p>

            <p style={{ margin: 0 }}>
              The information provided by MediCheck is for educational and
              informational purposes only. The predictions made by our system
              are based on pattern matching and should be used as a general
              guide, not a definitive diagnosis.
            </p>
          </div>
        </div>

        {/* Purple-to-Blue Call-To-Action Banner Component */}
        <section
          style={{
            padding: "60px 24px 80px 24px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
              borderRadius: "20px",
              padding: "50px 40px",
              maxWidth: "1000px",
              margin: "0 auto",
              textAlign: "center",
              color: "#ffffff",
              boxShadow: "0 16px 36px rgba(37, 99, 235, 0.15)",
            }}
          >
            <h2
              style={{
                fontSize: "2.2rem",
                fontWeight: "700",
                marginBottom: "12px",
                letterSpacing: "-0.01em",
              }}
            >
              Ready to Check Your Symptoms?
            </h2>

            <p
              style={{
                fontSize: "1.1rem",
                opacity: "0.9",
                marginBottom: "30px",
              }}
            >
              Get instant insights and take the first step towards understanding
              your health
            </p>

            <Link to="/predict" style={{ textDecoration: "none" }}>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 32px",
                  background: "#ffffff",
                  color: "#1e293b",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "15px",
                  fontWeight: "700",
                  cursor: "pointer",
                  boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                }}
              >
                Start Symptom Check <span>→</span>
              </button>
            </Link>
          </div>
        </section>

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
            marginTop: "80px",
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
      </div>
    </>
  );
}

export default About;