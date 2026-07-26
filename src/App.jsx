import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import NotFound from "./pages/NotFound/NotFound";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Cart from "./pages/Cart/Cart";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="cart" element={<Cart />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
