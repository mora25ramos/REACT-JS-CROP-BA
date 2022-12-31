import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import React from 'react'

const ItemDetail = ({ producto }) => {
  const { addCount } = useContext(CartContext);

  const handlerAddCount = (count) => {
    addCount(count, producto);
  };
  return (
    <div>
      <h1>Detalle del producto {producto.name}</h1>
      <img src={producto.img} width={300} height={300} />
      <ItemCount onChangeCount={(e) => handlerAddCount(e)} />
    </div>
  );
};

export default ItemDetail;