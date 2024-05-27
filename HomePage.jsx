// HomePage.jsx
import React from 'react';
import HomeSectionCarosel from '../components/HomeSectionCarosel/HomeSectionCarosel';
import MainCarosel from '../components/HomeCarosel/MainCarosel';
import { mens_kurta } from '../../Data/mens_kurta';



const HomePage = () => {
  return (
    <div>
      <MainCarosel/>
      <div className='spacy-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarosel data={mens_kurta} sectionName={"Men's Kurta"}/>
        <HomeSectionCarosel data={mens_kurta}sectionName={"Men's shoes"}/>
        <HomeSectionCarosel data={mens_kurta}sectionName={"Men's shirt"}/>
        <HomeSectionCarosel data={mens_kurta}sectionName={"Women's Saree"}/>
        <HomeSectionCarosel data={mens_kurta}sectionName={"Women's Dress"}/>
        
      </div>
    </div>
  );
};

export default HomePage;
