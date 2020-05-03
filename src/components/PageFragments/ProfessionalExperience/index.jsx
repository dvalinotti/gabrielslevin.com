import React from 'react';
import style from './index.module.less';

export default function Education() {
  return (
    <div className={style.pageContainer}>
      <div className={style.pageHeader}>
        <h1>Professional Experience</h1>
      </div>
      <div className={style.workContainer}>
        <div className={style.header}>
          <div className={style.titleContainer}>
            <h3>Perrigo Pharmaceuticals</h3>
            <p>
              Production Engineering Intern
            </p>
          </div>
          <div className={style.dateContainer}>
            <p>
              May 2019 - September 2019
            </p>
          </div>
        </div>
        <div className={style.body}>
          <p>
          • Received unique experience and training for the corporate office environment<br/>
          • Worked along side Quality, Maintenance, and Operations departments<br/>
          • Executed projects utilizing Six Sigma and PDCA Cycles<br/>
          • Project Scopes include: CAD (AutoCAD 3D), Training Line Personnel, Procedural Changes of SOP,
          GMP Practices, SharePoint Application Design, 3D Printed Prototyping, Cross Departmental Research
          </p>
        </div>
      </div>
      <div className={style.workContainer}>
        <div className={style.header}>
          <div className={style.titleContainer}>
            <h3>Partners in Sound Productions</h3>
            <p>
              Lead Production Engineer
            </p>
          </div>
          <div className={style.dateContainer}>
            <p>
              May 2019 - September 2019
            </p>
          </div>
        </div>
        <div className={style.body}>
          <p>
          • Responsible for installation, maintenance, repair and removal of audio systems, video equipment, wired/wireless public address sound equipment, lighting, and sets for Live Entertainment shows.
          • Worked nights, weekends, and holidays while pursuing bachelor’s degree
          • Responsible for company assets
          • Hiring and onboarding technicians
          • Engineering Management Proposal Project: Created a Business proposal about improving day to
          day operations and work flow habits
          o Scope of Project was to advance company to going concern and long-term growth using PDCA
          Cycles and Lean Manufacturing principles
          </p>
        </div>
      </div>
    </div>
  );
}
