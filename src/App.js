import "./App.css";
import Item from "./components/Item";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <Item name="Jacket" price="60"/>
      <Item name="Shoes" price="150"/>
      <Item name="Shirt" price="100"/>
      <Item name="Belt" price="30"/>
      <Cart/>
    </div>
  );
}

export default App;
