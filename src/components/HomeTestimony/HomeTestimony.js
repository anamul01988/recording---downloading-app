import React from 'react';
import './HomeTestimony.css';
import { Link } from 'react-router-dom';
import useTestimony from '../../Hooks/useTestimony';
import HomeTestimonyDetails from '../HomeTestimonyDetails/HomeTestimonyDetails';

const HomeTestimony = () => {
    const [testimony] = useTestimony();
    return (
        <div className='my-5 container'>
        <h3 className='my-4 text-center'>Recent Testimony({testimony?.slice(0,3).length})</h3>
        <div className="row ">
            <div className="col-md-12 col-sm-12">
               <div className="row">
               {testimony?.slice(0,3).map((testimony) => ( 
                    <HomeTestimonyDetails key={testimony.id} testimony = {testimony}/>
                ))}
               <div className="button text-center">
               <Link to="/testimony" className='testimony-btn btn btn-success'>All Testimonials</Link>
               </div>
               </div>
            </div>
        </div>
   </div>
    );
};

export default HomeTestimony;