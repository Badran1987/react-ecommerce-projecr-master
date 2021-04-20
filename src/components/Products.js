import React, {useContext}from 'react'
import { Pagination } from 'antd';
import Item from './Item'
import 'antd/dist/antd.css';
import '../css/Products.css'
import {ProductsAr} from '../components/App'

const Products = () => {


  
  const ProductsItem = useContext(ProductsAr).productsAr
    const allProducts = ProductsItem.map((prod) => <Item key={prod.id} data={prod}/>)
    console.log(allProducts)

    return (
  <>

        <section className="results">
         <h2 className="subheading">Results</h2>

         {allProducts}
        
        </section>

        <nav aria-label="Pagination"  style={{ textAlign: 'center' }}>
        <p>1-6 of {allProducts.lingth} products found</p>
        <Pagination defaultCurrent={1} total={50}  />
      </nav>
    </>
    )
}

export default Products