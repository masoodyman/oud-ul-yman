// Common.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                  <h1 style={{fontFamily:"jameelNooriNastaleeq"}}>
                    {props.name}
                    <strong className="brand-name"> <br/> {props.brandname}  </strong>
                  </h1>
                  <h2 className="my-3">
                  We do not compromise our quality but meet our customer's standards
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit}>
                      <button type="button" className="btn btn-outline-primary">
                        {props.btname}
                      </button>
                    </NavLink>
                    {props.whatsapp && (
                      <p className="mt-3">
                        <strong>WhatsApp:</strong> {props.whatsapp}
                      </p>
                    )}
                    {props.email && (
                      <p>
                        <strong>Email:</strong> {props.email}
                      </p>
                    )}
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.imgsrc} className="img-fluid animated" alt="home img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
