import React, { useState, useEffect } from "react";

function Dashboard({ token, handleLogout }) {
  const [budget, setBudget] = useState(5000);
  const [title, setTitle] = useState("");

  // Common Inline Styles Matrix
  const styles = {
    dashboardContainer: {
      backgroundColor: "#111827",
      minHeight: "100vh",
      color: "#ffffff",
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      padding: "20px",
      boxSizing: "border-box",
    },
    // 🔥 FIX 1: Responsive Top Header Row
    headerRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      flexWrap: "wrap",
      gap: "15px",
      marginBottom: "30px",
      maxWidth: "1200px",
      margin: "0 auto 30px auto",
    },
    titleBlock: {
      flex: "1 1 250px", // மொபைல்ல இடம் பத்தலனா தனியா பிரிஞ்சுரும்
    },
    heading: {
      fontSize: "clamp(1.8rem, 5vw, 2.5rem)", // Responsive Font size for phone/laptop
      fontWeight: "800",
      margin: "0 0 10px 0",
      lineHeight: "1.2",
    },
    subheading: {
      color: "#94a3b8",
      fontSize: "0.9rem",
      margin: 0,
      maxWidth: "400px",
    },
    // 🔥 FIX 2: Modern Round Sign Out Button Layout
    logoutBtn: {
      backgroundColor: "#ef4444",
      color: "#ffffff",
      border: "none",
      borderRadius: "50%",
      width: "65px",
      height: "65px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "0.75rem",
      fontWeight: "700",
      cursor: "pointer",
      boxShadow: "0 10px 15px -3px rgba(239, 68, 68, 0.3)",
      flexShrink: 0, // போன்ல சுருங்கக் கூடாது
    },
    // 🔥 FIX 3: Dynamic Matrix Workspace (Laptop-la side-by-side, Phone-la vertical-stack!)
    workspaceLayout: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap", // THIS IS THE MAGIC FOR MOBILE RESPONSIVENESS
      gap: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      justifyContent: "center",
    },
    // 🔥 FIX 4: Flexible Responsive Cards
    cardBox: (borderColor) => ({
      backgroundColor: "rgba(24, 31, 46, 0.95)",
      border: `2px solid ${borderColor}`,
      borderRadius: "24px",
      padding: "25px",
      flex: "1 1 340px", // 340px வரைக்கும் சுருங்கும், அப்புறம் தானா அடுத்த லைனுக்கு போயிடும் da
      maxWidth: "550px",
      boxSizing: "border-box",
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.3)",
    }),
    sectionTag: {
      backgroundColor: "rgba(59, 130, 246, 0.15)",
      color: "#3b82f6",
      padding: "8px 14px",
      borderRadius: "10px",
      display: "inline-block",
      fontSize: "0.8rem",
      fontWeight: "700",
      letterSpacing: "0.05em",
      marginBottom: "20px",
    },
    inputLabel: {
      display: "block",
      fontSize: "0.85rem",
      fontWeight: "600",
      color: "#94a3b8",
      marginBottom: "8px",
      marginTop: "15px",
    },
    inputField: {
      width: "100%",
      padding: "12px 14px",
      backgroundColor: "#182235",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "12px",
      color: "#ffffff",
      fontSize: "0.95rem",
      boxSizing: "border-box",
    },
  };

  return (
    <div style={styles.dashboardContainer}>
      {/* Header section with alignment tracking */}
      <div style={styles.headerRow}>
        <div style={styles.titleBlock}>
          <h1 style={styles.heading}>FinTech Tracker Premium 💸</h1>
          <p style={styles.subheading}>
            Advanced Microfinance Operational Matrix Terminal
          </p>
        </div>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          <span>Sign</span>
          <span>Out</span>
          <span style={{ fontSize: "0.65rem" }}>🏃‍♂️</span>
        </button>
      </div>

      {/* Main engine dashboard split system layout */}
      <div style={styles.workspaceLayout}>
        {/* Left Controller Input Engine Card */}
        <div style={styles.cardBox("#2563eb")}>
          <div style={styles.sectionTag}>TRANSACTION MANAGEMENT ENGINE</div>

          <label style={styles.inputLabel}>
            🎯 Set Monthly Budget Target (INR)
          </label>
          <input
            type="number"
            style={styles.inputField}
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />

          <label style={styles.inputLabel}>Transaction Title</label>
          <input
            type="text"
            style={styles.inputField}
            placeholder="e.g., Dinner, Fuel"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Right Statistics Insights Display Card */}
        <div style={styles.cardBox("#10b981")}>
          <div
            style={styles.sectionTag}
            style={{
              ...styles.sectionTag,
              color: "#10b981",
              backgroundColor: "rgba(16, 185, 129, 0.15)",
            }}
          >
            REALTIME ANALYTICS RADAR
          </div>
          <h3 style={{ marginTop: "10px", color: "#94a3b8" }}>
            Total Ledger Balance Summary
          </h3>
          <p
            style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              color: "#10b981",
              margin: "10px 0",
            }}
          >
            ₹{budget}
          </p>
          <span style={{ color: "#64748b", fontSize: "0.85rem" }}>
            *Synchronized directly with production-tier cloud datastore matrix
          </span>
        </div>
      </div>
    </div>
  );
}

// eslint-disable-next-line react-hooks/exhaustive-deps
export default Dashboard;
