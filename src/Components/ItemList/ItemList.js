import Button from "react-bootstrap/Button";
import { useState } from "react"
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import './ItemList.css'

const ItemList = ({ products }) => {
  const [count, setCount] = useState(1)
  const { onAdd } = useContext(CartContext);

  const setOnAdd = () => {
    setCount(count + 1)
    onAdd(count)
  }

  return (<>

    <div className="boxProducts" style={{ width: "10rem" }}>
      <h4>Product {products.productName}</h4>
      <h5>Price: $ {products.price}</h5>
      <img src={products.imageUrl} className="card-img-top" width="150" height="150" alt="..." />
      <Button className="btn-dark" onClick={setOnAdd}  >Comprar</Button>
    </div>
  </>
  )
}

export default ItemList;