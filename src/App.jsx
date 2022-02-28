import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

//Views
import Layout from "./layouts/Layout";
import Home from "./views/Home";
import Shop from "./views/Shop";
import ItemDetailContainer from "./modules/ItemDetailContainer/ItemDetailContainer";
import CategoryContainer from "./modules/CategoryContainer/CategoryContainer";
import Cart from "./views/Cart";
import { ToastProvider } from "./context/ToastContext";
import { DataProvider } from "./context/DataContext";
import NotFound from "./views/NotFound";

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
