import React, {useContext, useState,useEffect}from 'react'
import { Pagination } from 'antd';
import Item from './Item'
import 'antd/dist/antd.css';
import '../css/Products.css'
import styled from 'styled-components'
import {Container} from '../Styled/Container'
import {Subheading,Results} from '../Styled/Products'
import {ProductsAr} from '../components/App'
import { Row, Col, Divider } from 'antd';

const style = { background: '#0092ff', padding: '8px 0' };

const Products = ({products}) => {

  const [pageNum, setPageNum] = useState(1)
  const [maxResults, setMaxResults] = useState(6)
  
  const ProductsItem = useContext(ProductsAr).productsAr
    const allProducts = products.map((prod) => <Item key={prod.id} data={prod}/>)
    
    const itemLingth = allProducts.length
    // console.log("badran",allProducts)
    // console.log("Size",itemLingth)

    const onPageChange = (current, size) => {
      setPageNum(current)
      // console.log("current",current)
    }



    useEffect(() =>{
      const paheProducts = ProductsItem.slice((pageNum-1)*maxResults, (pageNum-1)*maxResults+maxResults).map((prod) => <Item key={prod.id} data={prod}/>)
    
      // Reset pages due to new search
	
    })

    // const printResults = allProducts
		// .slice((pageNum-1)*maxResults, (pageNum-1)*maxResults+maxResults)
		// .map((s) => <Item data={s} />)

    // console.log("badran",printResults)
	

    return (
 
<>
<Divider orientation="left">Result</Divider>
<Container>
<Row justify = "center">
{allProducts}  
</Row>
        <nav aria-label="Pagination"  style={{ textAlign: 'center' }}>
          <p>1-6 of {allProducts.lingth} products found</p>
          <Pagination id="pagination" current={pageNum} defaultPageSize={maxResults} total={allProducts.length} onChange={onPageChange} />
          <output htmlFor="pagination" class="num-result">{allProducts.length} ITEMS</output>
        </nav>
    </Container>
    </>)
}

export default Products