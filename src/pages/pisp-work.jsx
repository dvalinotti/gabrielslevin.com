import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import PispPage from '../components/Projects/PispPage';

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <PispPage />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
