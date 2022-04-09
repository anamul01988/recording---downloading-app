import React from 'react';
import './HomeTestimonyDetails.css';
import {RiChatQuoteFill} from 'react-icons/ri';
import{BsFillChatLeftQuoteFill} from 'react-icons/bs'
const HomeTestimonyDetails = ({testimony}) => {
    console.log(testimony)
    const {img,profession, test_user, test_title} = testimony;
    return (
        <div className=' col-sm-12 col-md-4 my-3'>
                 <div className="card mb-3 testimony-card p-2  bg-body rounded shadow " >
                
                     <div className="user-details d-flex m-3">
                         <img src={img} alt="_test_user" />
                         <div className="user-more-details ms-3">
                             <h5 className=''> {test_user}</h5>
                             <p> {profession}</p>   
                         </div>
                     </div>
                     <p><RiChatQuoteFill></RiChatQuoteFill>{ test_title }<BsFillChatLeftQuoteFill/></p>
                  </div>
        </div>
    );
};

export default HomeTestimonyDetails;