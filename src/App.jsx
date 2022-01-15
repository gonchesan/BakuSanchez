import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="We are working on the page." />
    </>
  );
};

export default App;
