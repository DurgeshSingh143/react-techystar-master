import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "../src/components/Header";
import Home from "../src/components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services.jsx";
import Footer from "../src/components/Footer";


import "../src/styles/App.scss";
import "../src/styles/header.scss";
import "../src/styles/home.scss";
import "../src/styles/contact.scss";
import "../src/styles/footer.scss"
import "../src/styles/mediaquery.scss"


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
