
import web from '../src/assets/images/app.jpeg';
import { NavLink } from 'react-router-dom';

function Cards(props) {
  return (
    <>
 <div className='col-md-4 col-10 mx-auto CARD'>
              <div className="card CARD">
        <img src={props.imgsrc} className="card-img-top card-img" alt="oudpic"/>
       <div className="card-body BODY">
        <h5 className="card-title font-weight-bold">{props.title}</h5>
       <p className="card-text">
       Main Accords: Fruity Strawberry, Vanilla, Floral Rose, Jasmine, Saffron, Carnation.
        </p>
       <NavLink to="/AllOud" >
       <button className="btn btn-outline-primary">
          Buy Now         
         </button>
        </NavLink>
  </div>
</div>
</div>
 
    </>
  )
}

export default Cards