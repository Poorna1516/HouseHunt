import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import PropertyCard from "./components/PropertyCard";

function App() {
  return (
    <div>
      <Navbar />

      <Hero />

      <SearchBar />

      <h1
        style={{
          textAlign: "center",
          marginTop: "40px",
          marginBottom: "20px",
          fontSize: "36px",
          color: "#1e293b",
        }}
      >
        Featured Properties
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "25px",
          padding: "20px",
        }}
      >
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
        <PropertyCard />
      </div>

      <footer
        style={{
          background: "#0f172a",
          color: "white",
          textAlign: "center",
          padding: "25px",
          marginTop: "50px",
        }}
      >
        <h2>🏠 HouseHunt</h2>
        <p>Find Your Dream Home with Ease</p>
        <p>© 2026 HouseHunt. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;