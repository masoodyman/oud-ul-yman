import React from 'react';
// import web from "../src/images/pic1.jpeg";
import Cards from './Cards';
import Sdata from './Sdata';

const Service = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center'>Our Collection</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className='row gy-4'>
              {Sdata.map((val, ind) => (
                <Cards
                  key={ind} 
                  imgsrc={val.imgsrc}
                  title={val.title}
                />
              ))}
              
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
