import React from 'react';

const ServiceCard = ({service}) => {
    const {_id,name,img,rating,price ,detail,review}= service;

    return (
        <div className="col-12 col-md-4 col-lg-4 my-2">
        <div class="card">
          <img src={img} className='mx-auto rounded ' class="card-img-top" alt="..." style={{'width':'100%','height':'200px'}} />
          <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">
             {detail}
            </p>
            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    );
};

export default ServiceCard;