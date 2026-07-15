function PropertyCard() {
  return (
    <div
      style={{
        width: "320px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
        transition: "0.3s",
      }}
    >
      <img
        src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
        alt="Luxury Villa"
        style={{
          width: "100%",
          height: "220px",
          objectFit: "cover",
        }}
      />

      <div style={{ padding: "15px" }}>
        <h2>Luxury Villa</h2>

        <p>📍 Hyderabad</p>

        <p>🛏 3 BHK | 🚗 Parking | 🌳 Garden</p>

        <h3 style={{ color: "#2563eb" }}>₹1.20 Crore</h3>

        <button
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          View Details
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;