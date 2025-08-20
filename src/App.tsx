import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/components/Home";
import AboutUs from "./pages/AboutUs";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";
import Contact from "./pages/Contact";
import { FloatingWhatsApp } from 'react-floating-whatsapp'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
     <FloatingWhatsApp
  phoneNumber="551151963789"
  accountName="WSN Suporte"
  avatar="/images/logo.png"       // caminho para seu logo ou avatar
  statusMessage="Normalmente responde em alguns minutos"
  chatMessage="Olá! Gostaria de mais informações sobre os produtos WSN."
  allowEsc
  allowClickAway
  notification
  notificationDelay={5}
/>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
