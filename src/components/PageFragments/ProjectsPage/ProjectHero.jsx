import React from 'react';
import style from './projecthero.module.less';
import { navigate } from 'gatsby';

export default function ProjectHero({
  title,
  subtitle,
  handle,
  img,
  height,
}) {
  return (
    <div className={style.heroContainer} onClick={() => navigate(`${handle}`)}>
      <div 
        className={style.imageContainer} 
        style={{ backgroundImage: `url(\"${img || ''}\")` }}
      >
        <div className={style.textContainer}>
          <h3 className={style.heroTitle}>
            {title}
          </h3>
          <p className={style.heroSubtitle}>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
}
