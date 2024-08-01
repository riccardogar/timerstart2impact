import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ResourcesPage from "./pages/ResourcesPage";
import ContactsPage from "./pages/ContactsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />{" "}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
