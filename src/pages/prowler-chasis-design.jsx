import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import ProwlerPage from '../components/Projects/ProwlerPage';

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <ProwlerPage />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
