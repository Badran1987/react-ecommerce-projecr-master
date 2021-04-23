import React,{useContext, useEffect, useState} from 'react';
import styled from 'styled-components';
import {ProductsAr} from 'components/App'
import {sortProducts,sortAsc,sortDsc,sortNews} from 'hooks/sortProducts'
import {filterProducts,rgb} from 'hooks/filterProduct'
import {ShopPage,FilterAr} from 'pages/ShopPage'
import ColorFilter from 'components/ColorFilter'
import WattFilter from 'components/WattFilter'
import {Rate , Select,Row, Col, Divider ,Radio, Layout, Menu, Input, Space, Breadcrumb } from 'antd';

import { AudioOutlined } from '@ant-design/icons';
const Filter = ({allProducts,setProductResult,filters,setFiltersResult})=>{

    const { Header, Content, Footer } = Layout;
    const { Search } = Input;
    
        const suffix = (
        <>
            <AudioOutlined
            style={{
                fontSize: 16,
                color: '#1890ff',
            }}
            />

        </>
        );
    const onSearch = value => console.log(value);


    const handleRatingChange = (event)=>{
        setFiltersResult({
          ...filters,
          rating: event.target.value
        })
      }
    
    const { Option } = Select;

const Fieldset = styled.fieldset`
margin-left: 30px;
}
`

const handleChange =(event) => {
   
    if (event.key === 'isDsc'){
        setProductResult(sortProducts(allProducts,sortAsc))
    }else if (event.key === 'isAsc'){
        setProductResult( sortProducts(allProducts,sortDsc))
    } else{
        console.log("badran 0")
    }
  
  }
 
    return(

<>

        <Divider orientation="left">Filter</Divider>
        <Row>
      <Col span={24}>
      <Space direction="vertical" style={{ width: '100%' }}>
                    <Search   placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    suffix={suffix}
                    onSearch={onSearch} 
                    type="search" 
                    value={filters.query} onChange={(event)=>{
                            setFiltersResult({
                                ...filters,
                                query: event.target.value
                            })
                            }} />
                </Space>
                <div className="site-layout-background" style={{ float:'right', paddingTop: 80 }}>
                
                </div>
           

      </Col>
    </Row>
        <Row>
          <Col span={6} xs={{ order: 1 }} sm={{ order: 1 }} md={{ order: 1 }} lg={{ order: 1 }}>
          <ColorFilter handleFilters = {filters => handleFilters(filters,"items") } />
          </Col>
          <Col span={6} xs={{ order: 1 }} sm={{ order: 1 }} md={{ order: 1 }} lg={{ order: 1 }}>
          <WattFilter />
          </Col>
          <Col span={12} xs={{ order: 1 }} sm={{ order: 1 }} md={{ order: 1 }} lg={{ order: 1 }}>
          <Fieldset>
                <ul style={{ width: '100%' }} className="filter-list rating">
                <Input type="radio" name="rating" value="all" id="aboveZero" onChange={handleRatingChange} checked={(filters.rating === `all`) ? true : false} />
                <Rate onChange={handleRatingChange} disabled defaultValue={1} /> (8)
                <Input type="radio" name="rating" value="1" id="aboveOne" onChange={handleRatingChange} />
                <Rate  disabled defaultValue={2} /> (22)
                <Input type="radio" name="rating" value="2" id="aboveTwo" onChange={handleRatingChange} />
                <Rate disabled defaultValue={3} /> (1)
                <Input type="radio" name="rating" value="3" id="aboveThree" onChange={handleRatingChange} /> 
                <Rate  disabled defaultValue={4} />(44)
                <Input type="radio" name="rating" value="4" id="aboveFour" onChange={handleRatingChange} />
                <Rate  disabled defaultValue={5} />(133)
                </ul>
            </Fieldset>
          </Col>
          
        </Row>
        <Divider orientation="left">Show</Divider>
        <Row>
      <Col flex={2}>

                  
        <Select labelInValue defaultValue={{ value: '0' }} style={{ width: 120 }} onChange={handleChange} >
 
 <Option value='0' disabled selected>--Sort By --</Option>
 <Option value='isDsc'>Price, highest to lowest</Option>
 <Option value='isAsc'>Price, lowest to highest</Option>

</Select>
      </Col>
    
    </Row>


        
       
    </>     )

}

export  {Filter,FilterAr}