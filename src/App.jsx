import { BrowserRouter, Routes, Route } from "react-router-dom";

import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";
import { DataProvider } from "./context/DataContext";
import Layout from "./layouts/Layout";
import Home from "./views/Home";
import Shop from "./views/Shop";
import ItemDetailContainer from "./modules/ItemDetailContainer/ItemDetailContainer";
import CategoryContainer from "./modules/CategoryContainer/CategoryContainer";
import Cart from "./views/Cart";
import NotFound from "./views/NotFound";
import Contact from "./views/Contact";
import About from "./views/About";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <ToastProvider>
            <DataProvider>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/shop" element={<Shop />} />
                  <Route
                    path="/shop/category/:category"
                    element={<CategoryContainer />}
                  />
                  <Route
                    path="/shop/item/:id"
                    element={<ItemDetailContainer />}
                  />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/contact-us" element={<Contact />} />
                  <Route path="/about-us" element={<About />} />
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </DataProvider>
          </ToastProvider>
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
