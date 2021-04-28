import React from 'react';
import {Link} from 'react-router-dom'
import { Layout, Menu, Input, Space, Breadcrumb } from 'antd';


const Header = ()=>{

    const { Header, Content, Footer } = Layout;
   


    return(<>

    <Header style={{ position: 'relative' , zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/shop">Shop</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/contact">Contacts</Link></Menu.Item>
      </Menu>
    </Header>
  
     </> )

}

export default Header