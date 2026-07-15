function Hero() {
  return (
    <div
      style={{
        height: "500px",
        backgroundColor: "#f1f5f9",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>Find Your Dream Home</h1>
      <p>Buy • Rent • Sell Properties Easily</p>

      <button
        style={{
          padding: "12px 25px",
          backgroundColor: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Explore Properties
      </button>
    </div>
  );
}

export default Hero;