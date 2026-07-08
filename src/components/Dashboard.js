import React, { useState } from "react";

function Dashboard({ token, handleLogout }) {
  const [budget, setBudget] = useState(5000);
  const [title, setTitle] = useState("");

  const styles = {
    dashboardContainer: {
      backgroundColor: "#111827",
      minHeight: "100vh",
      color: "#ffffff",
      fontFamily: "'Poppins', 'Segoe UI', sans-serif",
      padding: "40px",
      boxSizing: "border-box",
    },
    headerRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "40px",
      borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
      paddingBottom: "20px",
    },
    heading: {
      fontSize: "2.2rem",
      fontWeight: "800",
      margin: 0,
    },
    subheading: {
      color: "#94a3b8",
      fontSize: "0.95rem",
      margin: "5px 0 0 0",
    },
    logoutBtn: {
      backgroundColor: "#ef4444",
      color: "#ffffff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "12px",
      fontWeight: "600",
      cursor: "pointer",
      boxShadow: "0 4px 15px rgba(239, 68, 68, 0.2)",
    },
    workspaceLayout: {
      display: "flex",
      gap: "30px",
      maxWidth: "1200px",
      margin: "0 auto",
    },
    cardBox: (borderColor) => ({
      backgroundColor: "rgba(24, 31, 46, 0.95)",
      border: `1px solid ${borderColor}`,
      borderRadius: "24px",
      padding: "35px",
      flex: 1,
      boxSizing: "border-box",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    }),
    sectionTag: {
      backgroundColor: "rgba(59, 130, 246, 0.1)",
      color: "#3b82f6",
      padding: "6px 12px",
      borderRadius: "8px",
      display: "inline-block",
      fontSize: "0.8rem",
      fontWeight: "700",
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
      <div style={styles.headerRow}>
        <div>
          <h1 style={styles.heading}>FinTech Tracker Premium 💸</h1>
          <p style={styles.subheading}>
            Advanced Microfinance Operational Matrix Terminal
          </p>
        </div>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Sign Out 跑
        </button>
      </div>

      <div style={styles.workspaceLayout}>
        <div style={styles.cardBox("rgba(59, 130, 246, 0.2)")}>
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

        <div style={styles.cardBox("rgba(16, 185, 129, 0.2)")}>
          <div
            style={{
              ...styles.sectionTag,
              color: "#10b981",
              backgroundColor: "rgba(16, 185, 129, 0.1)",
            }}
          >
            REALTIME ANALYTICS RADAR
          </div>
          <h3 style={{ marginTop: "10px", color: "#94a3b8" }}>
            Total Ledger Balance Summary
          </h3>
          <p
            style={{
              fontSize: "2.8rem",
              fontWeight: "800",
              color: "#10b981",
              margin: "15px 0",
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

export default Dashboard;
