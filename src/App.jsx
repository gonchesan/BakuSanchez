import { BrowserRouter, Routes, Route } from "react-router-dom";

//Views
import Layout from "./layouts/Layout";
import ItemDetailContainer from "./modules/ItemDetailContainer/ItemDetailContainer";
import Home from "./views/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/products/:id" element={<ItemDetailContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
