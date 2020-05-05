import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import DroneDesignPage from '../components/Projects/DroneDesignPage';

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <DroneDesignPage />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
