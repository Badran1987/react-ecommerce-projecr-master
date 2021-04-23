import React , {useState,useEffect ,useContext} from 'react';
import firebase from '../util/fierbase'
import {FilterAr} from './Filter'
import { Checkbox, Collapse } from 'antd';

const { Panel } = Collapse


const Input = (props) =>{

    const ProductsItem = useContext(FilterAr).filterAr
    
    const [Checked, setChecked] = useState([])
    
    const handleToggle = (value) => {

        const currentIndex = Checked.indexOf(value);
        const newChecked = [...Checked];

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
        props.handleFilters(newChecked)
        //update this checked information into Parent Component 

    }

    const renderFilter =()=>  ProductsItem.map((value,index) => (
        <React.Fragment key = {index}>
                <Checkbox onChange={() => handleToggle(value.id)}  type="checkbox" value="ddd"  checked={Checked.indexOf(value._id) === -1 ? false : true}>{value.filterName}</Checkbox>
        </React.Fragment>

        ))
   
    return(
     
    <>
<Collapse defaultActiveKey={['0']} >
                <Panel header="Colors" key="1">
                {renderFilter()}
                </Panel>
            </Collapse>
          
            {/* <Checkbox onChange={() => handleToggle(id)}  type="checkbox" value="ddd" checked ={checked.indexOf(id)===-1 ? false :true} >{filterName}</Checkbox> */}
             
                
          
            {/* <li><input type="checkbox" name={filterName} value="dd" id={id}/> <label htmlFor="RGB-WC">{filterName}</label></li> */}
           
    {/* </ZiseFilter.Provider> */}
    </>
     )

}

export default Input