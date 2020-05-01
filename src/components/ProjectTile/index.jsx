import React from 'react';
import style from './projecttile.module.less';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { navigate } from 'gatsby';

const ProjectTile = ({
  title,
  subtitle,
  alt,
  height,
  width,
  img,
  handle,
}) => {
  return (
    <Card 
      hoverable
      bordered
      onClick={() => navigate(`/${handle}`)}
      className={style.tileCard}
      cover={
        <div
          style={{ 
            height: height, 
            overflow: 'hidden',
            position: 'relative'
          }}
        >
          <img 
            alt={alt || ''} 
            src={img || ''} 
            style={{
              width: '100%',
              height: 'auto',
              position: 'absolute',
              left: 0,
              top: height / -4,
              zIndex: 0
            }}
          />
        </div>
      }
    >
      <Meta title={title || 'Title'} description={subtitle || 'Subtitle'} />
    </Card>
  )
}

export default ProjectTile;
