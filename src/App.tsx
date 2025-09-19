import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Home from '@/components/Home';
import AboutUs from './pages/AboutUs';
import Products from './components/Products';
import Navbar from './components/Navbar';
import { Footer } from './components/Footer';
import Contact from './pages/Contact';
import Cart from './components/Cart';
import ResetScroll from './components/ResetScroll';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <ResetScroll />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;