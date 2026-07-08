import React, { useState, useEffect } from "react";

function Dashboard({ token, handleLogout }) {
  // 💾 Core Ledger Database State Matrix
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([
    "Food",
    "Fuel",
    "Rent",
    "Gadgets",
    "Entertainment",
    "Medical",
  ]);

  // 📝 Form Inputs State Persistence
  const [budget, setBudget] = useState(5000);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Food");
  const [loading, setLoading] = useState(false);

  // 🔄 Fetch all stored database transactions on render gateway
  const fetchLedgerData = async () => {
    try {
      const response = await fetch(
        "https://expensetracker-production-c04c.up.railway.app/api/expenses/",
        {
          method: "GET",
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
        },
      );
      if (response.ok) {
        const data = await response.json();
        setTransactions(data);
      }
    } catch (err) {
      console.error("Database sync pipeline failure:", err);
    }
  };

  useEffect(() => {
    fetchLedgerData();
  }, [token]);

  // 📤 Form submission execution system
  const handleAddTransaction = async (e) => {
    e.preventDefault();
    if (!title || !amount) return;
    setLoading(true);

    const payload = {
      title,
      amount: parseFloat(amount),
      category: selectedCategory,
    };

    try {
      const response = await fetch(
        "https://expensetracker-production-c04c.up.railway.app/api/expenses/",
        {
          method: "POST",
          headers: {
            Authorization: `Token ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (response.ok) {
        setTitle("");
        setAmount("");
        fetchLedgerData(); // Refresh current ledger view pipeline
      }
    } catch (err) {
      alert("Failed to inject record into cloud database matrix.");
    } finally {
      setLoading(false);
    }
  };

  // 🧮 Math analytics computation engines
  const totalExpenses = transactions.reduce(
    (sum, item) => sum + parseFloat(item.amount || 0),
    0,
  );
  const ledgerBalance = budget - totalExpenses;

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
    heading: { fontSize: "2.2rem", fontWeight: "800", margin: 0 },
    subheading: { color: "#94a3b8", fontSize: "0.95rem", margin: "5px 0 0 0" },
    logoutBtn: {
      backgroundColor: "#ef4444",
      color: "#ffffff",
      padding: "12px 24px",
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
    sectionTag: (color, bg) => ({
      backgroundColor: bg,
      color: color,
      padding: "6px 12px",
      borderRadius: "8px",
      display: "inline-block",
      fontSize: "0.8rem",
      fontWeight: "700",
      marginBottom: "20px",
    }),
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
      marginBottom: "12px",
    },
    submitBtn: {
      width: "100%",
      backgroundColor: "#3b82f6",
      color: "#ffffff",
      padding: "14px",
      border: "none",
      borderRadius: "12px",
      fontWeight: "600",
      fontSize: "1rem",
      cursor: "pointer",
      marginTop: "15px",
      boxShadow: "0 4px 15px rgba(59, 130, 246, 0.2)",
    },
    ledgerItem: {
      display: "flex",
      justifyContent: "space-between",
      padding: "14px",
      backgroundColor: "#1f293d",
      borderRadius: "12px",
      marginBottom: "10px",
      borderLeft: "4px solid #ef4444",
    },
  };

  return (
    <div style={styles.dashboardContainer}>
      {/* Top Navigation Frame */}
      <div style={styles.headerRow}>
        <div>
          <h1 style={styles.heading}>FinTech Tracker Premium 💸</h1>
          <p style={styles.subheading}>
            Advanced Microfinance Operational Matrix Terminal
          </p>
        </div>
        <button style={styles.logoutBtn} onClick={handleLogout}>
          Sign Out 🏃‍♂️
        </button>
      </div>

      {/* Main Core Engine System */}
      <div style={styles.workspaceLayout}>
        {/* Left Side: Controller Form */}
        <div style={styles.cardBox("rgba(59, 130, 246, 0.2)")}>
          <div style={styles.sectionTag("#3b82f6", "rgba(59, 130, 246, 0.1)")}>
            TRANSACTION MANAGEMENT ENGINE
          </div>

          <form onSubmit={handleAddTransaction}>
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
              placeholder="e.g., Dinner, Amazon, Rent"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />

            <label style={styles.inputLabel}>Amount Input Value (INR)</label>
            <input
              type="number"
              style={styles.inputField}
              placeholder="0.00"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />

            <label style={styles.inputLabel}>Operational Category Grid</label>
            <select
              style={styles.inputField}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <button type="submit" style={styles.submitBtn} disabled={loading}>
              {loading ? "Syncing Record..." : "Inject Ledger Record"}
            </button>
          </form>
        </div>

        {/* Right Side: Data Feed and Statistics */}
        <div style={styles.cardBox("rgba(16, 185, 129, 0.2)")}>
          <div style={styles.sectionTag("#10b981", "rgba(16, 185, 129, 0.1)")}>
            REALTIME ANALYTICS RADAR
          </div>

          <div style={{ display: "flex", gap: "20px", marginBottom: "25px" }}>
            <div style={{ flex: 1 }}>
              <h4 style={{ color: "#94a3b8", margin: 0 }}>Available Balance</h4>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "800",
                  color: "#10b981",
                  margin: "5px 0",
                }}
              >
                ₹{ledgerBalance}
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <h4 style={{ color: "#94a3b8", margin: 0 }}>Total Burn Rate</h4>
              <p
                style={{
                  fontSize: "2rem",
                  fontWeight: "800",
                  color: "#ef4444",
                  margin: "5px 0",
                }}
              >
                ₹{totalExpenses}
              </p>
            </div>
          </div>

          <h3
            style={{
              fontSize: "1.1rem",
              marginBottom: "15px",
              color: "#e2e8f0",
            }}
          >
            Stored Database Datastream
          </h3>
          <div
            style={{
              maxHeight: "250px",
              overflowY: "auto",
              paddingRight: "5px",
            }}
          >
            {transactions.length === 0 ? (
              <p
                style={{
                  color: "#64748b",
                  fontSize: "0.9rem",
                  textAlign: "center",
                  marginTop: "20px",
                }}
              >
                No active records found in cloud instance storage matrix.
              </p>
            ) : (
              transactions.map((item) => (
                <div key={item.id} style={styles.ledgerItem}>
                  <div>
                    <strong style={{ display: "block", color: "#ffffff" }}>
                      {item.title}
                    </strong>
                    <span style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
                      {item.category}
                    </span>
                  </div>
                  <span style={{ fontWeight: "700", color: "#ef4444" }}>
                    - ₹{item.amount}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
