function SearchBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "40px 0",
      }}
    >
      <input
        type="text"
        placeholder="Search by city, location..."
        style={{
          width: "400px",
          padding: "12px",
          border: "2px solid #2563eb",
          borderRadius: "8px 0 0 8px",
          outline: "none",
          fontSize: "16px",
        }}
      />

      <button
        style={{
          padding: "12px 20px",
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: "0 8px 8px 0",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;