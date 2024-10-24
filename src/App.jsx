import ProductTab from "./productTab";
import "./App.css";
import Msg from "./Msg";
import Button from "./button";


function App() {
  return (
    <>   
    <h2>BlockBuster Deals | Shop Now</h2>  
      <Button />
      <Msg userName="Wajdan" textColor="red" />
      <ProductTab />
    </>
  );
}

export default App;
