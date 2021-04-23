import React,{useContext, useState, useEffect} from 'react'
// import '../css/Products.css'
import Products from 'pages/Products'
import {Filter} from 'components/Filter'
import {ProductsAr} from 'components/App'
import firebase from '../util/fierbase'
import { PageHeader } from 'antd';


const FilterAr = React.createContext()

const ShopPage = ()=>{

   const [filterAr,setProductsAr] = useState([])
   
const allProducts =  useContext(ProductsAr).productsAr
const [productResult, setProductResult] = useState(allProducts)
 const [filterResult,setFilterResult] = useState(allProducts)
const [filters, setFiltersResult] = useState({
    query: ``,
    rating: `all`,
  
  })
useEffect ( async() =>{

	const db = firebase.firestore()

	    db.collection(`filter`).get().then(
		(snapshot) => {
			const productData =[]
			snapshot.docs.forEach(doc => {
				const record = doc.data()
			
				productData.push(record)
					
				//document.body.style.backgroundColor = `rgb(${record.rgb.r}, ${record.rgb.g}, ${record.rgb.b})`
			})
			setProductsAr (productData)
			setLodingData (false)
		}
	)
},[])

useEffect(() => {
    
    // Creat a clone Array
    let filteredProducts = [...allProducts]

    // Check all the filters
    if (filters.query)
      filteredProducts = filteredProducts.filter((prod) => prod.name.toLowerCase().includes(filters.query.toLowerCase().trim()))
    if (filters.rating !== `all`)
      filteredProducts = filteredProducts.filter((prod) => Number(prod.rating) >= Number(filters.rating))


    // Assign the filtered products to the result state
    setProductResult(filteredProducts)

  }, [filters])





   return(

     <main className="Products">
  
		<PageHeader className="site-page-header" onBack={() => null} title="MTMTech Shop Bulbs " subTitle="Smart Shop"/>
        <FilterAr.Provider value = {{filterAr:filterAr}}>	
          <Filter filters={filters} setFiltersResult={setFiltersResult} allProducts={allProducts} setProductResult={setProductResult} />
          </FilterAr.Provider>

        <Products products={productResult}></Products>
       
        </main>
    
     )

}

export {ShopPage,FilterAr}