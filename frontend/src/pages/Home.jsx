import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

function Home() {
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
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            padding: "140px 40px 40px 40px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              fontSize: "3.8rem",
              fontWeight: "800",
              color: "#0f172a",
              marginBottom: "24px",
              letterSpacing: "-0.02em",
            }}
          >
            Your Health, Our Priority
          </h1>

          <p
            style={{
              fontSize: "1.3rem",
              color: "#64748b",
              maxWidth: "750px",
              margin: "0 auto 40px auto",
              lineHeight: "1.6",
            }}
          >
            Get instant disease predictions based on your symptoms. Our
            advanced algorithm helps you understand potential health
            conditions.
          </p>

          {/* Hero CTA Buttons */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "16px",
              marginBottom: "50px",
            }}
          >
            <Link to="/predict" style={{ textDecoration: "none" }}>
              <button
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "14px 28px",
                  background: "#0f172a",
                  color: "white",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Start Symptom Check <span>→</span>
              </button>
            </Link>

            <Link to="/about">
              <button
                style={{
                  padding: "16px 32px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  background: "#ffffff",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Learn More
              </button>
            </Link>
          </div>

          {/* Medical Disclaimer Alert Box */}
          <div
            style={{
              background: "#fffbeb",
              border: "1px solid #fde68a",
              borderRadius: "8px",
              padding: "16px 24px",
              maxWidth: "1100px",
              margin: "0 auto",
              textAlign: "left",
              fontSize: "0.95rem",
              lineHeight: "1.5",
              color: "#92400e",
            }}
          >
            <span style={{ fontWeight: "700" }}>
              Medical Disclaimer:
            </span>{" "}
            This tool is for informational purposes only and should not
            replace professional medical advice. Always consult a healthcare
            provider for accurate diagnosis and treatment.
          </div>
        </motion.div>
                {/* Why Choose MediCheck? Section */}
        <section
          style={{
            padding: "60px 40px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.2rem",
              fontWeight: "700",
              marginBottom: "40px",
              color: "#0f172a",
            }}
          >
            Why Choose MediCheck?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "24px",
              width: "100%",
              maxWidth: "1300px",
              margin: "0 auto",
            }}
          >
            {/* Card 1 */}
            <motion.div
              whileHover={{
                scale: 1.04,
                y: -8,
                boxShadow: "0 20px 40px rgba(37,99,235,0.12)",
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              style={{
                background: "#ffffff",
                padding: "35px 24px",
                borderRadius: "16px",
                border: "1px solid #dbe4ee",
                boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
                cursor: "pointer",
                minHeight: "280px",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>
                🧠
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "10px",
                  fontWeight: "700",
                }}
              >
                AI-Powered Analysis
              </h3>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                }}
              >
                Advanced symptom matching algorithm for accurate predictions.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              whileHover={{
                scale: 1.04,
                y: -8,
                boxShadow: "0 20px 40px rgba(37,99,235,0.12)",
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              style={{
                background: "#ffffff",
                padding: "35px 24px",
                borderRadius: "16px",
                border: "1px solid #dbe4ee",
                boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>
                🩺
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "10px",
                  fontWeight: "700",
                }}
              >
                Comprehensive Database
              </h3>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                }}
              >
                Extensive disease database with detailed information.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              whileHover={{
                scale: 1.04,
                y: -8,
                boxShadow: "0 20px 40px rgba(37,99,235,0.12)",
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              style={{
                background: "#ffffff",
                padding: "35px 24px",
                borderRadius: "16px",
                border: "1px solid #dbe4ee",
                boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>
                🛡️
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "10px",
                  fontWeight: "700",
                }}
              >
                Privacy First
              </h3>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                }}
              >
                Your health data stays private and secure.
              </p>
            </motion.div>

            {/* Card 4 */}
            <motion.div
              whileHover={{
                scale: 1.04,
                y: -8,
                boxShadow: "0 20px 40px rgba(37,99,235,0.12)",
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: 0.2,
              }}
              style={{
                background: "#ffffff",
                padding: "35px 24px",
                borderRadius: "16px",
                border: "1px solid #dbe4ee",
                boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "16px" }}>
                ⚡
              </div>

              <h3
                style={{
                  fontSize: "1.25rem",
                  marginBottom: "10px",
                  fontWeight: "700",
                }}
              >
                Instant Results
              </h3>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.95rem",
                  lineHeight: "1.5",
                }}
              >
                Get immediate insights based on your symptoms.
              </p>
            </motion.div>
          </div>
        </section>
                {/* How It Works Section */}
        <section
          style={{
            padding: "60px 40px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.2rem",
              fontWeight: "700",
              marginBottom: "50px",
              color: "#0f172a",
            }}
          >
            How It Works
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "40px",
              maxWidth: "1300px",
              margin: "0 auto",
            }}
          >
            {/* Step 1 */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "800",
                  color: "#2563eb",
                  background: "#eff6ff",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px auto",
                }}
              >
                01
              </div>

              <h3
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "12px",
                  fontWeight: "700",
                }}
              >
                Select Symptoms
              </h3>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                }}
              >
                Choose from a comprehensive list of symptoms you're
                experiencing.
              </p>
            </div>

            {/* Step 2 */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "800",
                  color: "#2563eb",
                  background: "#eff6ff",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px auto",
                }}
              >
                02
              </div>

              <h3
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "12px",
                  fontWeight: "700",
                }}
              >
                Analyze
              </h3>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                }}
              >
                Our algorithm matches your symptoms with our disease
                database.
              </p>
            </div>

            {/* Step 3 */}
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "800",
                  color: "#2563eb",
                  background: "#eff6ff",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px auto",
                }}
              >
                03
              </div>

              <h3
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "12px",
                  fontWeight: "700",
                }}
              >
                Get Results
              </h3>

              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                }}
              >
                Receive detailed predictions with recommendations and next
                steps.
              </p>
            </div>
          </div>
        </section>
                {/* Gradient Bottom CTA Banner Section */}
        <section
          style={{
            padding: "60px 40px 20px 40px",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              background:
                "linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)",
              borderRadius: "24px",
              padding: "60px 40px",
              maxWidth: "1200px",
              margin: "0 auto",
              textAlign: "center",
              color: "#ffffff",
              boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)",
            }}
          >
            <h2
              style={{
                fontSize: "2.4rem",
                fontWeight: "700",
                marginBottom: "14px",
              }}
            >
              Ready to Check Your Symptoms?
            </h2>

            <p
              style={{
                fontSize: "1.15rem",
                opacity: "0.9",
                marginBottom: "55px",
              }}
            >
              Start your health assessment now and get instant insights.
            </p>

            <Link to="/predict" style={{ textDecoration: "none" }}>
              <button
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "16px 36px",
                  background: "#ffffff",
                  color: "#1e293b",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "700",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                Begin Diagnosis <span>→</span>
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

export default Home;