import { Routes, Route, Outlet, Link } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Posters from './pages/Posters';
import Company from './pages/Company';
import Collections from './pages/Collections';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PosterView from './pages/PosterView';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="posters" element={<Posters />} />
          <Route path="company" element={<Company />} />
          <Route path="collections" element={<Collections />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="posters/:id" element={<PosterView />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
