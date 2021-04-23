import React from 'react'
import '../css/Item.css'
import {Rate ,Button , message, Radio, Checkbox, Row, Col,Divider } from 'antd';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import {Link} from 'react-router-dom'
import styled from 'styled-components'

function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

const Item = ({data}) => {
    
console.log(data)
    const {id, rating, name , price , img, disc, color,size,disPrice} = data

 
console.log("dedf",color.value)


    const allColor = color.map((colors) => <Radio.Button value={colors}>{colors}</Radio.Button>)
    const alSizes =size.map((size) => <Radio.Button value={size}>{size}W</Radio.Button>)
    console.log("allColor",allColor)
    console.log("alSizes",alSizes)
    const style = { background: '#0092ff', padding: '8px 0' };

    const Article = styled.article`{
    background-color:#ffffff;
    border-radius: 30px;
    margin-bottom: 30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
    `
 

    const Del = styled.del `{
        
            display: block;
            text-align: center;
            font-size: 1em;
            color: red;
 
    }`
    const Ins =styled.ins`{
        color: #971032;
        font-size: 1.5em;   
        display: block;
        text-align: center;
    }`

    const Images = styled.img`{
           border-radius: 30px 30px 0px 0px;
    border-bottom: 1px solid #e3e3e3;
    
    }`

    const Div = styled.div`{
        margin-left: 14px;
        margin-right: 14px;
    }`
    const Form = styled.form`{
        padding: 0px 30px 0 30px;

    }`
    const Footer = styled.button`{
        display: flex;
        padding: 3px;
       
        width: 100%;
    }`
    
    const addToFav = () => {
        message.success('Your Item added to Favourite Page', 4);
      };

    const success = () => {
        message.success('Added Successfully', 4);
      };

    // const productImg = require(`./img/${data.img}`).default
    return (
        <>
          
        
            {/* <Col span={6} xs={{ order: 1 }} sm={{ order: 1 }} md={{ order: 3 }} lg={{ order: 4 }}> */}
            {/* <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}> */}
            <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                <Article className="product">
                        <header>
                                <Images src={img} alt={name}/>
                                <h3> <Link to={`/details/${data.id}`} >{name}</Link>  </h3>
                                <data value="39"><Del>$ {disPrice}</Del> 
                                <Ins>$ {price}</Ins>
                            </data>
                        
                            <Div>
                            <p>{disc}</p>
                            <dl>
                            <a> <Link to={`/details/${data.id}`} >see more</Link></a>

                            <dt>Rating</dt>
                                <Rate disabled defaultValue={rating} /> {rating} / 5
                            </dl>
                            </Div>
                        </header>
                        
                        <Form> 
                            <div>
                                <legend >Colours</legend>
                                <Radio.Group defaultValue="a" value={color} buttonStyle="outline" style={{ width: '100%' }}>
                                {allColor}
                               
                                
                                </Radio.Group>
                            </div>
                            <div style={{  width: '100%' }}>
                                
                                <legend >Sizes</legend>
                                    <Radio.Group style={{ width: '100%' }} defaultValue="a" buttonStyle="outline">
                                    {alSizes}
                                    </Radio.Group>
                            </div>
                                    
                        </Form>
                            
                        <Footer>
                            <Button onClick={success} type="primary">Add to Cart</Button>
                            <Button onClick={addToFav}>Add Favourite</Button>
                        </Footer>
                </Article>
            </Col>
       
    </>)}

export default Item