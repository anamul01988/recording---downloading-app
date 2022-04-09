import React from 'react';
import './TestimonyDetails.css';
import {RiChatQuoteFill} from 'react-icons/ri';
import{BsFillChatLeftQuoteFill} from 'react-icons/bs';
const TestimonyDetails = ({testimony}) => {
    console.log(testimony)
    const {img,profession, test_user, test_title} = testimony;
    return (
        <div className=' col-sm-12 col-md-6 col-lg-4 my-3'>
        <div className="card mb-3 testimony-card p-2  bg-body rounded shadow " >
      
            <div className="user-details d-flex m-3">
                <img src={img} alt="_test_user" />
                <div className="user-more-details ms-3">
                    <h5 className='user-name'> {test_user}</h5>
                    <p className='user-professional'> {profession}</p>   
                </div>
            </div>
            <p><RiChatQuoteFill className='text-success me-2'></RiChatQuoteFill>{ test_title }<BsFillChatLeftQuoteFill className='text-success ms-2'/></p>
         </div>
</div>
    );
};

export default TestimonyDetails;