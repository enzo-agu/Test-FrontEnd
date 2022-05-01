import React from 'react'
import { useContext, useState } from "react";
import { CartContext } from "../../CartContext/CartContext";

const Cardwidget = () => {
  const { cartList } = useContext(CartContext);

  return (<>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLtw8ETMQAoi6JjDFu4kNp6orXowPvNr5OSQ&usqp=CAU"
      alt="supermarket-car" width="80" height="80" />
    <span>
      {cartList}
    </span>
  </>
  )
}

export default Cardwidget;