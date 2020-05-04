import React from 'react';
import Gallery from "react-photo-gallery";
import style from './ventilatorpage.module.less';

import Photo1 from '../../../images/projects/ventilator/VentilatorInternalView.png';
import Photo2 from '../../../images/projects/ventilator/VentilatorBottomPrint.png';
import Photo3 from '../../../images/projects/ventilator/VentilatorTopPrint.png';

export default function VentilatorPage() {
  console.log(Photo1);

  return (
    <div className={style.pageContainer}>
      <div className={style.pageHeader}>
        <h1>COVID-19 Ventilator Filter</h1>
        <p>3D printable, CNC machninable two piece filter</p>
        <a href="https://drive.google.com/open?id=13xp8f-bN_SUmZzoe1MLlIaiTsKq25cnK" target="_blank">
          Download project on Google Drive
        </a>
      </div>
      <div className={style.gallery}>
        <Gallery
          direction="column"
          columns={1}
          photos={[
            {
              src: Photo1,
              width: 1,
              height: 1
            }, {
              src: Photo2,
              width: 1,
              height: 1,
            }, {
              src: Photo3,
              width: 1,
              height: 0.75
            }
          ]}
        />
      </div>
    </div>
  );
}
