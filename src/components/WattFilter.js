import React , {useState,useEffect ,useContext} from 'react';
import { Checkbox, Collapse } from 'antd';

const { Panel } = Collapse


const WattFilter = () =>{



  
   
    return(
     
    <>
<Collapse defaultActiveKey={['0']} >
                <Panel header="Watts" key="1">
                <legend>Watt</legend>
            <ul className="filter-list">
            <li><input type="checkbox" name="size" value="xs" id="xs" /> <label htmlFor="xs">7 W</label></li>
            <li><input type="checkbox" name="size" value="sm" id="sm"/> <label htmlFor="sm">9 W</label></li>
            <li><input type="checkbox" name="size" value="md" id="md"/> <label htmlFor="md">10 W</label></li>
            <li><input type="checkbox" name="size" value="lg" id="lg"/> <label htmlFor="lg">12 W</label></li>
            </ul>
                </Panel>
            </Collapse>
          
        
    </>
     )

}

export default WattFilter