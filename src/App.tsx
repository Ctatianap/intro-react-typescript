import "./App.css";
import ToDoList from "./components/ToDoList";
import Products from "./components/Products";
import NavBarPanel from "./components/NavBarPanel";
import Carrito from "./components/Carrito";
import { Provider } from "react-redux";
import store from "./redux/store/store";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavBarPanel />
          <Routes>
            <Route path="/" element={<Products />}></Route>
            <Route path="/cart" element={<Carrito />}></Route>
            <Route path="/list" element={<ToDoList />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
