import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Cart from "./myComponents/cart";
import Navbar from "./myComponents/navbar";
import NotFound from "./myComponents/notFound";
import Products from "./myComponents/products";
import Login from "./myComponents/login";
import SignUp from "./myComponents/sign-up";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>
      </Routes>
      {/* <main className="p-8 container">
        <Routes>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/not-found" element={<NotFound />}></Route>
          <Route exact path="/" element={<Navigate to="/products" />} />
          <Route path="*" element={<Navigate to="/not-found" />} />
        </Routes>
      </main> */}
      <ToastContainer />
    </>
  );
}

export default App;
