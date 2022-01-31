import { BrowserRouter, Routes, Route } from "react-router-dom";

//Views
import Layout from "./layouts/Layout";
import Home from "./views/Home";
import Shop from "./views/Shop";
import ItemDetailContainer from "./modules/ItemDetailContainer/ItemDetailContainer";
import CategoryContainer from "./modules/CategoryContainer/CategoryContainer";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route
              path="/shop/category/:category"
              element={<CategoryContainer />}
            />
            <Route path="/shop/item/:id" element={<ItemDetailContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
