import React from 'react';
import Gallery from "react-photo-gallery";
import style from './ventilatorpage.module.less';

import Photo1 from '../../../images/projects/pisp/PispBG.jpg';
import Photo2 from '../../../images/projects/pisp/Img1.jpg';
import Photo3 from '../../../images/projects/pisp/Img2.jpg';

export default function PispPage() {
  return (
    <div className={style.pageContainer}>
      <div className={style.pageHeader}>
        <h1>Lead Production Engineer</h1>
        <p>Work during my time at Partners in Sound Productions</p>
        <a href="../PISPNJ.pdf" target="_blank">Engineering Management Proposal</a>
      </div>
      <div className={style.gallery}>
        <Gallery
          direction="column"
          columns={1}
          photos={[
            {
              src: Photo1,
              width: 2,
              height: 1.5
            }, {
              src: Photo2,
              width: 2,
              height: 2,
            }, {
              src: Photo3,
              width: 2,
              height: 1.5
            }
          ]}
        />
      </div>
    </div>
  );
}
