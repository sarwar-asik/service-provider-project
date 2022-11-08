import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';
import useTitle from '../../myhooks/useTitle';



const ServiceCard = ({service}) => {
  useTitle('ServiceCard')
    const {_id,name,img,rating,price ,detail,review}= service;

    return (
        <div className="col-12 col-md-4 col-lg-4 my-2">
        <div class="card">
        <PhotoProvider>
      <PhotoView src={img}>
      <img src={img} className='mx-auto rounded ' class="card-img-top" alt="..." style={{'width':'100%','height':'200px'}} />
      </PhotoView>
    </PhotoProvider>

         
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">
             {detail?.length <= 100 ?detail: detail.slice(0,100) +'......' }
            </p>
            <p class="card-text">
                <Link to={`/services/${_id}`} className='btn btn-info w-100'>View Detail</Link>
            </p>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;