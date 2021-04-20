import React from 'react'
import '../css/Item.css'
import {Rate ,Button , Radio, Checkbox, Row, Col } from 'antd';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import {Link} from 'react-router-dom'

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

const Item = ({data}) => {
    

    const {id, name , price , img, disc, color,size} = data


    const allColor = color.map((colors) => <Radio.Button value={colors}>{colors}</Radio.Button>)
    const alSizes =size.map((size) => <Radio.Button value={size}>{size}W</Radio.Button>)
    

    // const productImg = require(`./img/${data.img}`).default
    return (
        <>
            <article className="product">
            <header>
                    <h3> <Link to={`/details/${data.id}`} >{name}</Link>  </h3>
                    <img src={img} alt={name}/>
                    <data value="39"><del>$50.00</del> 
                    <ins>{price}</ins>
                </data>
                <p>{disc}</p>
                <dl>
                <dt>Rating</dt>
                    <Rate disabled defaultValue={4} />
                </dl>
                <a href="#" className="hedin">see more</a>
            </header>
            <form className="form"> 
    
             <div>
              <legend >Colours</legend>
                    <Radio.Group defaultValue="a" buttonStyle="outline" style={{ width: '100%' }}>
                    {allColor}
                    </Radio.Group>
             </div>
      
            <div style={{  width: '100%' }}>
                
                 <legend >Sizes</legend>
                    <Radio.Group style={{ width: '100%' }} defaultValue="a" buttonStyle="outline">
                    {alSizes}
                    </Radio.Group>
            </div>
            
            </form>
            <footer className="bottons">
            
            
            <Button type="primary">Add to Cart</Button>
            <Button>Add Favourite</Button>
          </footer>
    </article>
    
    
    </>
    
    )
}

export default Item