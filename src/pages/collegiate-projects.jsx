import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import CollegiatePage from '../components/Projects/CollegiatePage';

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <CollegiatePage />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
