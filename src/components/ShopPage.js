import React from 'react'
import '../css/Products.css'
import Products from '../components/Products'
import Filter from '../components/Filter'

const ShopPage = ({ProductsItem})=>{

 
   return(

     <main className="Products">
        <header class="heading">
            <h1>MTMTech Smart Bulbs </h1>
        </header>
        <Filter />
        <Products ></Products>
        {/* <Products Products = {Products}/> */}
        </main>
    
     )

}

export default ShopPage