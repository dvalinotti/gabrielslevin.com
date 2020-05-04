import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import PerrigoPage from '../components/Projects/PerrigoPage';

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <PerrigoPage />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
