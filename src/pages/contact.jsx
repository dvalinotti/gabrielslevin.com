import React from 'react';
import { Layout } from 'antd';
import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import ContactForm from '../components/ContactForm';
import SEO from '../components/Seo';

export default () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <SEO
        title="Contact Me"
        path="contact"
        keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
      />
      <Header />
      <SidebarWrapper>
        <>
          <ContactForm />
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);
