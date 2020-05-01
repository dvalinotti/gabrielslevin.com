import React from 'react';
import { Layout } from 'antd';
import SEO from '../components/Seo';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import AllProjectsList from '../components/PageFragments/ProjectsPage/AllProjectsList';

export default function Projects() {
  return (
    <div>
      <SEO
        title="Projects"
        path="projects"
        keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
      />
      <Layout className="outerPadding">
        <Layout className="container">
          <Header />
          <SidebarWrapper>
            <>
              <AllProjectsList/>
            </>
          </SidebarWrapper>
        </Layout>
      </Layout>
    </div>
  );
}
