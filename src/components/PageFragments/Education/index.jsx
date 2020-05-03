import React from 'react';
import style from './index.module.less';

export default function Education() {
  return (
    <div className={style.pageContainer}>
      <div className={style.pageHeader}>
        <h1>Education</h1>
      </div>
      <div className={style.workContainer}>
        <div className={style.header}>
          <div className={style.titleContainer}>
            <h3>New Jersey Institute of Technology</h3>
          </div>
          <div className={style.dateContainer}>
            <p>
              May 2019 - September 2019
            </p>
          </div>
        </div>
        <div className={style.details}>
          <p>
            B.S Mechanical Engineering Technology<br/> 
            Minor: Manufacturing Engineering<br/>
            Expected Graduation: Spring 2020
          </p>
        </div>
        <div className={style.body}>
          <p>
          • Relevant Course Work: Industrial Cost Analysis, Circuits, Thermodynamics, Statics, Quality Systems, Engineering/AI Ethics, Fluid Mechanics, Engineering Design, Strengths of Materials, Machine Design Analysis, Automated Control System (PLC)<br/>
          • Relevant Course Projects: Lead Semester CAD project (Creo), Solo, Business Proposal Project, 3D Printed Drone Design (SolidWorks), Senior Design Capstone (Cross project with Robotics Lab)
          </p>
        </div>
      </div>
    </div>
  );
}
