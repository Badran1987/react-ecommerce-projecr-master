import React from 'react';
import {Link} from 'react-router-dom'
import { Layout, Menu, Input, Space, Breadcrumb } from 'antd';

import { AudioOutlined } from '@ant-design/icons';


const Header = ()=>{

    const { Header, Content, Footer } = Layout;
    const { Search } = Input;
    
const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );
    const onSearch = value => console.log(value);


    return(<>

<Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/shop">Shop</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/about">About</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/contact">Contacts</Link></Menu.Item>
      </Menu>
    </Header>

  </Layout>
  <Content>
  <div className="site-layout-background" style={{ float:'right', paddingTop: 80 }}>
  <Space direction="vertical">
 
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      suffix={suffix}
      onSearch={onSearch}
    />
  </Space>
  </div>
     </Content>
  
     </> )

}

export default Header