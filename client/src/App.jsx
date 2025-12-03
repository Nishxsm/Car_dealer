import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";


export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<PlaceholderPage title="Cars Page Coming Soon" />} />
        <Route path="/about" element={<PlaceholderPage title="About Page Coming Soon" />} />
        <Route path="/contact" element={<PlaceholderPage title="Contact Page Coming Soon" />} />
      </Routes>

      <Footer />
    </Router>
  );
}

function PlaceholderPage({ title }) { //tenporary until other pages are done 
  return (
    <div style={{
      padding: "120px 40px",
      textAlign: "center",
      fontFamily: "Montserrat, sans-serif"
    }}>
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>{title}</h1>
      <p style={{ fontSize: "18px", opacity: 0.7 }}>
        This page is under construction.
      </p>
    </div>
  );
}
