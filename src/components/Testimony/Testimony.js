import React from 'react';

import useTestimony from '../../Hooks/useTestimony';
import TestimonyDetails from '../TestimonyDetails/TestimonyDetails';

const Testimony = () => {
    const [testimony] = useTestimony();
    console.log(testimony)
    return (
        <div className='my-5 container'>
             <h3 className='my-4'> All Recent Testimonials: </h3>
             <div className="row ">
                 <div className="col-md-12 col-sm-12">
                    <div className="row">  
                    {testimony?.map((testimony) => ( 
                         <TestimonyDetails key={testimony.id} testimony = {testimony}/>
                     ))}
                    </div>
                 </div>
             </div>
        </div>
    );
};

export default Testimony;