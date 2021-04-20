import React,{useContext, useEffect, useState} from 'react';
import {Rate , Select } from 'antd';
import styled from 'styled-components';
import {ProductsAr} from '../components/App'

const Filter = ()=>{
    const { Option } = Select;
    const ProductsItem = useContext(ProductsAr).productsAr
    const onUpdateDataViewResult = useContext(ProductsAr).onUpdateDataViewResult

    

     const resultSet = ProductsItem.map((s) => `${s.price}, ${s.id}`)
     ProductsItem.sort((a,b) => {
        return a.price-b.price
    })

    const [value, setValue] = useState(``)
    const [isAsc, setAsc] = useState(true)
    const [results, setResults] = useState([])

    // hook sideeffect when render new query
    useEffect(() =>{
        
        if (value.key === 'isAsc'){
         
            resultSet.sort((a,b) => {
                return a.price-b.price
            })
           
            onUpdateDataViewResult(results)
      

        }else{
            resultSet.sort((a,b) => {
                return b.price - a.price
            })
           
            onUpdateDataViewResult(results)
    
        }
        setResults(resultSet)
       
    },[isAsc])

    const handleChange =(event) => {
        setValue(event)
        setAsc(!isAsc)
      
      }
    

   

const Fieldset = styled.fieldset`
display:flex;
background-color:#e2e2e2
}
`



    return(

        <form class="filters">
        <a href="javascript:void(0);" class="iconfilter" onclick="myFilterFunction()" >
        <i class="fa fa-filter">Filter</i>
        </a>
        <div class="filter-options variationfilter" id="filter">
        <Fieldset>
            <legend>Shape</legend>
            <ul class="filter-list" >
            <li><input type="checkbox" name="colour" value="RGB-WC" id="RGB-WC"/> <label for="RGB-WC">RGB-WC</label></li>
            <li><input type="checkbox" name="colour" value="white" id="white"/> <label for="white">White</label></li>
            <li><input type="checkbox" name="colour" value="worm" id="worm"/> <label for="worm">worm</label></li>
            <li><input type="checkbox" name="colour" value="Day-cool" id="Day-cool"/> <label for="Day-cool">Day-cool</label></li>
            </ul>
        </Fieldset>
        <hr class="solid" />
        <fieldset>
            <legend>Watt</legend>
            <ul class="filter-list">
            <li><input type="checkbox" name="size" value="xs" id="xs" /> <label for="xs">7 W</label></li>
            <li><input type="checkbox" name="size" value="sm" id="sm"/> <label for="sm">9 W</label></li>
            <li><input type="checkbox" name="size" value="md" id="md"/> <label for="md">10 W</label></li>
            <li><input type="checkbox" name="size" value="lg" id="lg"/> <label for="lg">12 W</label></li>
            </ul>
        </fieldset>
        <hr class="solid" />
        <fieldset>
            <legend>Ratings (above)</legend>

            <ul style={{ width: '100%' }} className="filter-list rating">
            <Rate  disabled defaultValue={5} />
            <Rate  disabled defaultValue={4} />
            <Rate disabled defaultValue={3} />
            <Rate  disabled defaultValue={2} />
            <Rate  disabled defaultValue={1} />
            </ul>
        </fieldset>
        </div>
        <fieldset class="show">
        <label for="sort">Show</label>
        <Select labelInValue defaultValue={{ value: 'highest' }} style={{ width: 120 }} onChange={handleChange}>
    <Option value='isAsc'>Price, highest to lowest</Option>
    <Option value='isDsc'>Price, lowest to highest</Option>

  </Select>
        
        </fieldset>
  </form>
     )

}

export default Filter