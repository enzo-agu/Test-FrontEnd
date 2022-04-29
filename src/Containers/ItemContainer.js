import { useEffect, useState } from "react";
import ItemList from "../Components/ItemList/ItemList";
const ItemContainer=()=>{
    const[products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);


    
    useEffect(()=>{
        setTimeout(()=>{
            fetch('https://corebiz-test.herokuapp.com/api/v1/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(err=>console.log("err :" + err))
            .finally(()=>setLoading(false))
        },2000)

     },[])


    return(<>
    
    <div>
           {
               loading ? <span>Waiting products...</span>:
               products.map((product)=> <ItemList key={product.productId} products={product} ></ItemList>)
           }
       </div>
    </>
    )
}
export default ItemContainer