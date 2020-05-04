import React from 'react';
import Gallery from "react-photo-gallery";
import style from './ventilatorpage.module.less';

import Photo1 from '../../../images/projects/prowler/ProwlerASM.png';
import Photo2 from '../../../images/projects/prowler/ProwlerBOM.png';
import Photo3 from '../../../images/projects/prowler/ProwlerDrawing.png';

export default function PerrigoPage() {
  console.log(Photo1);

  return (
    <div className={style.pageContainer}>
      <div className={style.pageHeader}>
        <h1>Perrigo Pharmaceuticals</h1>
        <p>Production Engineering Intern Projects 2019</p>
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
            }
          ]}
        />
      </div>
    </div>
  );
}
