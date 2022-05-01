import { useEffect, useState } from "react";
import ItemList from "../Components/ItemList/ItemList";
import './ItemContainer.css'
const ItemContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            fetch('https://corebiz-test.herokuapp.com/api/v1/products')
                .then(response => response.json())
                .then(data => setProducts(data))
                .catch(err => console.log("err :" + err))
                .finally(() => setLoading(false))
        }, 2000)

    }, [])

    return (<>
        <div>
            {
                loading ? <h3 className='waitMessage'>Waiting products...</h3> :
                    products.map((product) => <ItemList key={product.productId} products={product} />)
            }
        </div>
    </>
    )
}
export default ItemContainer