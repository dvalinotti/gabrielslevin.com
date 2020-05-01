import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import VentilatorPage from '../components/Projects/VentilatorPage';

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <VentilatorPage />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
