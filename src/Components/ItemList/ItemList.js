

import Button from "react-bootstrap/Button";
import { useState } from "react"
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card"
// import ItemCount from "../ItemCount/ItemCount"
// import "./ItemList.css"

const ItemList = ({ products }) => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)

  }
  const decrement = () => {
    setCount(count - 1)
  }


  return (<>

    <div style={{ width: "10rem" }}>
      <h4>Stock {products.productName}</h4>
      <img src={products.imageUrl} className="card-img-top" width="150" height="150" alt="..." />
      <Button className="btn-dark" onClick={increment} disabled={count >= products.stock} >+</Button>
      <div className="">{count}</div>

      <Button className="btn-dark" onClick={decrement} disabled={count < 1} >-</Button>
      <div className="card-body">
        {/* <ItemCount/> */}

      </div>
    </div>
  </>
  )
}

export default ItemList;