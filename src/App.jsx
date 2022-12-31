import React from "react";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Navbar/Navbar";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { menus } from "./Components/mock";
import CartFinish from "./Components/CartFinish/CartFinish";

function App() {
  const [categorias, setCategorias] = useState([]);
  useEffect(() => {
    const db = getFirestore();

    const categoryCollection = collection(db, "categorias");

    getDocs(categoryCollection).then((result) => {
      if (result.size === 0) {
        console.log("no retorna nada");
      }
      setCategorias(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      console.log(categorias);
    });
  }, []);

  return (
    <BrowserRouter className="App">
      <NavBar menus={menus} categorias={categorias} />
      <Routes>
        <Route exact path="/" element={<ItemListContainer bgmode="dark" />} />
        <Route exact path="/category/:id" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/cart" element={<CartFinish />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
