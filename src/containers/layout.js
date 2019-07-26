import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {Link} from 'react-router-dom';


const { Header, Content, Footer } = Layout;


const CustomLayout = ( props ) => {

  return (

    <Layout className="layout">
      <Header data-test="Header-Test">
        <div className="logo" />
        <Menu
          data-test="Menu-Test"
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1"><Link to="/">Home</Link></Menu.Item>
          
        </Menu>
      </Header>
      <Content data-test="Content-Test"
      style={{ padding: '0 50px' }}>
        <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          {props.children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>

  )

}

export default CustomLayout;
