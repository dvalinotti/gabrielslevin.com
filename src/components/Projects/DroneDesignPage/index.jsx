import React from 'react';
import Gallery from "react-photo-gallery";
import style from './ventilatorpage.module.less';

import Photo1 from '../../../images/projects/drone/DroneASM.png';
import Photo2 from '../../../images/projects/drone/DronePropeller.png';
import Photo3 from '../../../images/projects/drone/DroneBody.png';
import Photo4 from '../../../images/projects/drone/DroneCage.png';

export default function DroneDesignPage() {
  return (
    <div className={style.pageContainer}>
      <div className={style.pageHeader}>
        <h1>Drone Design</h1>
        <p>Collegiate Project @ NJIT</p>
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
              height: 1.5,
            }, {
              src: Photo3,
              width: 2,
              height: 1.5
            }, {
              src: Photo4,
              width: 2,
              height: 1.5
            }
          ]}
        />
      </div>
    </div>
  );
}
