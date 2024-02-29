// AllOud.jsx

import React from 'react';
import Common from './Common';
import web from '../src/assets/images/oud.jpg';

const AllOud = () => {
  return (
    <>
      <Common 
        name="ایسی خوشبو جو آپ کو فرحت بخشے"
        imgsrc={web}
        brandname="OUD QADEEM"
        visit="/service"
        btname="Go back"
        whatsapp="03156623046" 
        email="masoodurrehmaan046@gmail.com" 
      />
    </>
  );
};

export default AllOud;
