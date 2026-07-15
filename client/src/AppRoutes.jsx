import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Login from "./components/Login";
import Register from "./components/Register";
import About from "./components/About";
import Contact from "./components/Contact";
import PropertyDetails from "./components/PropertyDetails";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/property" element={<PropertyDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;