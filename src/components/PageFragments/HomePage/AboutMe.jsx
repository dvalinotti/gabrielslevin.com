import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';

const pageText = {
  paraOne: `I am a final semester senior graduating this <strong>May of 2020 from the New Jersey Institute of Technology</strong>
  majoring in <strong>Mechanical Engineering Technology with a minor in Manufacturing Engineering.</strong> At NJIT, I am part of 
  the Robotics and Drone Science lab as the Mechanical Designer solving problems for the research lab that involve 
  creative ways to help the robots complete their job when programming simply will not do the trick. I am also part 
  of the Greek community excelling in providing examples on how one can exceed scholarly and socially.`,
  paraTwo: `With my past two semesters consisting of <strong>greater than 3.8 GPA</strong> and a highly successful 
  summer internship with a leading generic pharmaceutical company as a Production Engineer, I can proudly say that 
  I am excited to enter the field with impressive skills and experience to offer.`,
};
const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Rolwin', 'Reevan', 'Monteiro', 'FullStack developer', 'Javascript', 'ReactJS', 'NodeJS', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)} />
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
    </>
  );
};
export default AboutMe;
