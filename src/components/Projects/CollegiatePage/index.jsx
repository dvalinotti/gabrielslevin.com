import React from 'react';
import Gallery from "react-photo-gallery";
import style from './ventilatorpage.module.less';

import Video from '../../../images/projects/college/Project2Assembly.mp4'
import Photo1 from '../../../images/projects/college/PistonASM.png';
import Photo2 from '../../../images/projects/college/Clock.jpg';
import Photo3 from '../../../images/projects/college/KitchenTop.jpg';
import Photo4 from '../../../images/projects/college/Letter.jpg';

export default function CollegiatePage() {
  return (
    <div className={style.pageContainer}>
      <div className={style.pageHeader}>
        <h1>Collegiate Projects @ NJIT</h1>
        <p>In-class assignments and projects made using NJIT MakerSpace</p>
        <div>
          <a href="../Presentation 3.pdf" download>Engineering Management Presentation</a>
          <a href="../ai-ethics-position.pdf" target="_blank">AI Ethics Position Paper</a>
        </div>
      </div>
      <div className={style.gallery}>
        <video autoPlay loop preload>
          <source src={Video} type="video/mp4" />
        </video>
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
              width: 1.5,
              height: 2,
            }, {
              src: Photo3,
              width: 2,
              height: 1.5
            }, {
              src: Photo4,
              width: 1.5,
              height: 2
            }
          ]}
        />
      </div>
    </div>
  );
}
