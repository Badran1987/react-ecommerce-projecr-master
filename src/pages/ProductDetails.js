import React from 'react';
import {useParams} from 'react-router-dom'
import Item from 'pages/Item';

const ProductDetails = ({ProductsItem})=>{
const {prodId} = useParams()

const prod = ProductsItem.find((prod) => prod.id === parseInt(prodId))

    return(<>
     
     <h1> details page</h1>
     <Item data={prod} />
    
     </> )

}

export default ProductDetails