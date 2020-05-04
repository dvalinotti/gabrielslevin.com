import React from 'react';
import { Row, Col, Button } from 'antd';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';
import { navigate } from 'gatsby';
import ProjectHero from './ProjectHero';
import ProjectTile from '../../ProjectTile';
import style from './allprojectslist.module.less';

import ventilator from '../../../images/ventilator.png';
import ProwlerASM from '../../../images/ProwlerASM.png';
import PerrigoBG from '../../../images/projects/perrigo/PerrigoBG.jpg';
import NjitBG from '../../../images/projects/college/NjitBG.jpg';
import DroneASM from '../../../images/projects/drone/DroneASM.png';


export default function AllProjectsList({
  list = [],
}) {
  return (
    <div className={style.allProjectsContainer}>
      <h1>All Projects</h1>
      <Row gutter={16}>
        <Col className="gutter-row" span={24}>
          <ProjectHero 
            title="COVID-19 Ventilator Filter"
            subtitle="3D printable, CNC machninable two piece filter"
            img={ventilator}
            height={450}
            handle="covid-19-ventilator-filter"
          />
          <ProjectHero 
            title="Prowler Chasis Design" 
            subtitle="NJIT Robotics and Data Science Lab" 
            img={ProwlerASM}
            height={450}
            handle="prowler-chasis-design"
          />
          <ProjectHero 
            title="Perrigo Pharmaceuticals" 
            subtitle="Production Engineering Intern Projects 2019" 
            img={PerrigoBG}
            height={450}
            handle="perrigo-internship"
          />
          <ProjectHero 
            title="Collegiate Projects" 
            subtitle="In-class assignments and projects made using NJIT MakerSpace" 
            img={NjitBG}
            height={450}
            handle="collegiate-projects"
          />
          <ProjectHero 
            title="Drone Design" 
            subtitle="Collegiate Project" 
            img={DroneASM}
            height={450}
            handle="drone-design"
          />
        </Col>
      </Row>
    </div>
  )
}
