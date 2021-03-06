import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import FeaturedProjects from '../components/PageFragments/HomePage/FeaturedProjects';

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <AboutMe />
          <FeaturedProjects />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
