// import { Home } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router , Route, Link, Switch, BrowserRouter} from 'react-router-dom'
import {ShopPage} from 'pages/ShopPage'
import About from 'pages/About'
import ProductDetails from 'pages/ProductDetails'
import Contact from 'pages/Contact'
import Home from 'pages/Home'
import Footers from '../components/Footers'
import Products from 'pages/Products'
import firebase from '../util/fierbase'
 import Headers from 'components/Headers'
import Page404 from 'pages/Page404'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;

const ProductsAr = React.createContext()


const App = () => {

const [productsAr,setProductsAr] = useState([])
const [lodingData,setLodingData] = useState('true')



useEffect ( async() =>{

	const db = firebase.firestore()

	    db.collection(`Items`).get().then(
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





const UpdateDataViewResult = (data) =>{
		console.log("DD",data)
	}


	
	
	return (
		<> 
		 {	<BrowserRouter>
			<Layout className="layout">

				
			
				<Content style={{ padding: '0 50px' }}>
				
				<div className="site-layout-content">
					{
				
							(lodingData) ?
							<h1>Loding Data</h1>
						:
						<Router>
							<Headers />
							<Breadcrumb style={{ margin: '16px 0' }}>
								<Breadcrumb.Item>Home</Breadcrumb.Item>
								<Breadcrumb.Item>List</Breadcrumb.Item>
								<Breadcrumb.Item>App</Breadcrumb.Item>
							</Breadcrumb>
						{/*  */}
							
							<ProductsAr.Provider value = {{productsAr:productsAr , onUpdateDataViewResult:UpdateDataViewResult}}>
								<Switch>
									<Route exact path="/" component= {Home}></Route>
									<Route path="/about" component={About}></Route>
									<Route path="/contact" component={Contact}></Route>
									<Route path="/shop" ><ShopPage/></Route>
									<Route path="/details/:prodId"><ProductDetails ProductsItem={productsAr} /> </Route>
									<Route path="*" component={Page404} />
									</Switch>
							</ProductsAr.Provider>
						
						</Router>
						}
				</div>
				</Content>

		
				<Footer style={{ textAlign: 'center' }}>MTM Tech ©2021 Created by Mohammed Badran</Footer>
			</Layout>
		
			</BrowserRouter>}

	</>)
}



export {App,ProductsAr } 
