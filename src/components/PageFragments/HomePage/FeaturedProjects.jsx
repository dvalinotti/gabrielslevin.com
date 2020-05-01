import React from 'react';
import { Row, Col, Button } from 'antd';
import ProjectTile from '../../ProjectTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';
import style from './FeaturedProjects.module.less';
import ventilator from '../../../images/ventilator.png';
import ProwlerASM from '../../../images/ProwlerASM.png';
import { navigate } from 'gatsby';

const FeaturedProjects = () => {
  const allProjectsLink = () => {
    navigate('/projects');
  }

  return (
    <>
      <div className={style.featuredProjects}>
        <SEO
          title="Home"
          path=""
          keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">Featured Projects</h1>
        <Row gutter={16}>
          <Col className="gutter-row" lg={12} md={24}>
            <ProjectTile 
              title="COVID-19 Ventilator Filter" 
              subtitle="3D printable, CNC machninable two piece filter" 
              img={ventilator} 
              alt="example" 
              height={240}
              handle="covid-19-ventilator-filter"
            />
          </Col>
          <Col className="gutter-row" lg={12} md={24}>
            <ProjectTile 
              title="Prowler Chasis Design" 
              subtitle="NJIT Robotics and Data Science Lab" 
              img={ProwlerASM} 
              alt="example" 
              height={240}
            />
          </Col>
        </Row>
      </div>
      <Row gutter={16} style={{ marginTop: '1rem' }}>
        <Col className="gutter-row" lg={24} >
          <Button
            size="large"
            type="primary"
            style={{ width: '100%' }}
            className={style.button}
            onClick={allProjectsLink}
          >
            View all projects
          </Button>
        </Col>
      </Row>
    </>
  );
};
export default FeaturedProjects;
