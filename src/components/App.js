// import { Home } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import {BrowserRouter as Router , Route, Link, Switch} from 'react-router-dom'
import ShopPage from '../components/ShopPage'
import About from '../components/About'
import ProductDetails from '../components/ProductDetails'
import Contact from '../components/Contact'
import Home from '../components/Home'
import Footers from '../components/Footers'
import Products from './Products'
import firebase from '../util/fierbase'
import Header from '../components/Header'

import Page404 from '../components/Page404'

const ProductsAr =React.createContext()


const App = () => {

const [productsAr,setProductsAr] = useState([])
const [lodingData,setLodingData] = useState('true')

useEffect ( async() =>{
	let productData = await getAPIData(`src/util/data.json`)
	setProductsAr (productData)
	setLodingData (false)
},[])


// get data function 

const getAPIData = async (url) =>{
	setLodingData(true)
	let response = await fetch(url)
	return await response.json()
	
	
}

const UpdateDataViewResult = (data) =>{
		console.log("DD",data)
	}


	const Styling = {
		hearo2 : {
			height: `20em`,
			backgroundColor: `aquamarine`,
			backgroundPosition:` center`,
			backgroundRepeat:` no-repeat`,
			backgroundSize:` cover`,
			position: `center`,
		},
		social_li_i: {
			color: "#241717",
			alignItems: `center`,
			fontSize: `30px`,
			paddingLeft: `10px`
		  },
		  hearo2_p: {
			  "textAlign": "left",
			  "position": "absolute",
			  "top": "57px",
			  "right": "0",
			  "width": "86%",
			  "color": "#971032"
			},
			"hearo2_h1": {
			  "textAlign": "center",
			  "position": "absolute",
			  "top": "0px",
			  "right": "0",
			  "width": "100%",
			  "color": "#971032"
			},
			"page_header": {
			  "padding": "0px"
			},
			"header_img": {
			  "width": "100%",
			  "height": "15em"
			},
			"btn": {
			  "backgroundColor": "unset",
			  "color": "#971032",
			  "border": "1px solid  #971032",
			  "padding": "0px 10px",
			  "cursor": "pointer"
			},
			"content": {
			  "position": "relative",
			  "top": "4em",
			  "width": "400px",
			  "height": "200px"
			},
			"hearo2_button": {
			  "textAlign": "center",
			  "position": "absolute",
			  "top": "60%",
			  "right": "0",
			  "transform": "translate(-50%, -50%)"
			},
			"header_a": {
			  "color": "#971032",
			  "textDecoration": "none"
			},
			"find": {
			  "width": "70%",
			  "marginTop": "15px",
			  "borderRadius": "11px",
			  "marginLeft": "19px",
			  "marginBottom": "15px",
			  "textAlign": "center"
			},
			"menu_a": {
			  "color": "white",
			  "textDecoration": "none",
			  "fontSize": "17px"
			},
			"menu": {
			  "position": "relative",
			  "display": "inline-block"
			},
			"menu_hover__submenu": {
			  "display": "contents"
			},
			"submenu": {
			  "display": "none",
			  "position": "absolute",
			  "backgroundColor": "black",
			  "minWidth": "160px",
			  "boxShadow": "0px 8px 16px 0px rgba(0,0,0,0.2)",
			  "zIndex": "1"
			},
			"filter_options": {
			  "display": "block",
			  "backgroundColor": "#000000",
			  "borderRadius": "10px",
			  "padding": "10px",
			  "margin": "10px 0px 0px 0px"
			},
			"filter": {
			  "display": "none"
			},
			"icon": {
			  "color": "#000000",
			  "marginRight": "14px",
			  "paddingTop": "18px"
			},
			"iconfilter": {
			  "color": "#3399ff",
			  "border": "1px solid",
			  "padding": "3px",
			  "marginLeft": "20px",
			  "fontSize": "0.7em"
			},
			"sort": {
			  "width": "79%",
			  "paddingLeft": "10px",
			  "marginLeft": "10px"
			},
			"logo": {
			  "gridColumn": "1",
			  "gridRow": "1"
			},
			"logo_img": {
			  "width": "50px",
			  "height": "unset"
			},
			"nav_toggle": {
			  "gridColumn": "4",
			  "gridRow": "1"
			},
			"search": {
			  "gridRow": "1 / span 4"
			},
			"navigation": {
			  "gridRow": "3 / span 4"
			},
			"hr_solid": {
			  "borderTop": "0.5px solid #bbb"
			},
			"your_products": {
			  "gridRow": "1",
			  "gridColumn": "3",
			  "marginTop": "10px",
			  "position": "absolute",
			  "top": "10px",
			  "right": "46px"
			},
			"filter_list": {
			  "display": "flex"
			},
			"hedin": {
			  "display": "none"
			},
			"rating": {
			  "display": "block",
			  "color": "#ee1"
			},
			"products": {
			  "padding": "0px"
			},
			"page_footer": {
			  "backgroundColor": "#971131",
			  "color": "#971131"
			},
			"pagination": {
			  "textAlign": "center"
			},
			"pages": {
			  "display": "flex",
			  "justifyContent": "center"
			},
			"pages___li": {
			  "margin": "4px"
			},
			"social": {
			  "paddingTop": "10px"
			},
			"legal": {
			  "display": "flex",
			  "justifyContent": "center",
			  "marginTop": "5xp"
			},
			"legal_li_a": {
			  "color": "#000000",
			  "paddingLeft": "20px"
			},
			"copyright": {
			  "textAlign": "center"
			},
			"pages_li": {
			  "background": "#e3e3e3",
			  "borderRadius": "11px",
			  "border": "1px solid #ddd",
			  "color": "#fff"
			},
			"pages_li_a": {
			  "color": "#fff"
			}
			
		  }

	
	
	return (
		<>
			{
				(lodingData) ?
				<h1>Loding Data</h1>
			:
			<Router>

			<Header />
			
			<div>
				<h1>10W Smart Bulb WiFi</h1>
				<p>Now 2-Packs for <span>$39</span></p>
				<button >Buy Now</button> 
			</div>
				
				<ProductsAr.Provider value = {{productsAr:productsAr , onUpdateDataViewResult:UpdateDataViewResult}}>		
					<Switch>
						<Route exact path="/" component= {Home}></Route>
						<Route path="/about" component={About}></Route>
						<Route path="/contact" component={Contact}></Route>
						<Route path="/shop" ><ShopPage /></Route>
						<Route path="/details/:prodId"><ProductDetails ProductsItem={productsAr} /> </Route>
						<Route path="*" component={Page404} />
					</Switch>
				</ProductsAr.Provider>
			<Footers />
			</Router>
			}
		</>
	)
}



export {App,ProductsAr } 
