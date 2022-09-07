import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Cart from "./myComponents/cart";
import Navbar from "./myComponents/navbar";
import NotFound from "./myComponents/notFound";
import Products from "./myComponents/products";

function App() {
  return (
    <>
      <Navbar />
      <main className="p-8 container">
        <Routes>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/not-found" element={<NotFound />}></Route>
          <Route exact path="/" element={<Navigate to="/products" />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
