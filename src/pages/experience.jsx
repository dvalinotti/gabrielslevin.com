import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import ProfessionalExpereince from '../components/PageFragments/ProfessionalExperience';
import Education from '../components/PageFragments/Education';

export default function Experience() {
  return (
    <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <ProfessionalExpereince />
          <Education />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
  );
}
