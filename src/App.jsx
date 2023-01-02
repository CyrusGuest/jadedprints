import React, { useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Posters from "./pages/Posters";
import Company from "./pages/Company";
import Collections from "./pages/Collections";
import Cart from "./pages/Cart";
import PosterView from "./pages/PosterView";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import CartContext from "./context/CartContext";
import OrderSuccess from "./pages/OrderSuccess";

function App() {
  const localCartJSON = localStorage.getItem("cart");
  const localCart = JSON.parse(localCartJSON);

  const [cart, setCart] = useState(localCart ? localCart : []);

  const value = useMemo(() => ({ cart, setCart }), [cart]);

  return (
    <div>
      <CartContext.Provider value={value}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="posters" element={<Posters />} />
            <Route path="company" element={<Company />} />
            <Route path="collections" element={<Collections />} />
            <Route path="cart" element={<Cart />} />
            <Route path="posters/:id" element={<PosterView />} />
            <Route path="search/:query" element={<Search />} />
            <Route path="ordersuccess" element={<OrderSuccess />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </CartContext.Provider>
    </div>
  );
}

export default App;
