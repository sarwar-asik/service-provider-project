import React from 'react';

const MyExtra = () => {
  return (
    <div className='row my-5  py-3 shadow '>
      <div className="col-12 col-md-6 col-lg-6">
        <img className='img-fluid'
          src="https://img.freepik.com/premium-vector/travel-icon-elements_1639-5063.jpg?w=826"
          alt="" 
        />
      </div>

      <div className="col-12 col-md-6 col-lg-6 ">
        <h3 className='fw-bold  text-info py-2'> Why My Service for Tourist </h3>
       <div className="row">
       <p className='col-6 shadow'>  
        <img className=' rounded-pill' src="https://img.freepik.com/free-vector/electronic-document-electronic-paper-paperless-office-internet-article-online-documentation-organization-typing-text-file-computer-vector-isolated-concept-metaphor-illustration_335657-2745.jpg?w=740&t=st=1668069054~exp=1668069654~hmac=921cd2f1e21c8fc946f5c50ada62327bcdcb4e7a5ac76d00934996e6afbb21ce" alt="" style={{'maxWidth':'180px'}}  />
        <h6>Simple Online Service </h6>
        </p>
       <p className='col-6 shadow'>  
       <img className=' ' src="https://img.freepik.com/free-vector/blockchain-transport-technology-abstract-concept-illustration_335657-3955.jpg?w=740&t=st=1668069235~exp=1668069835~hmac=fc3da3d318e357b006e6eecb4293ae71ec5426be74d056b758019eba7f5a5c8e" alt="" style={{'maxWidth':'180px'}} /> 
       <h6>
        Available EveryWhere
        </h6></p>
       <p className='col-6 shadow'>  



       <img src="https://img.freepik.com/free-vector/airplane-flying-around-globe_1284-42938.jpg?w=740&t=st=1668069708~exp=1668070308~hmac=5a7bec50ff793171fd71b300ff5485a962b7939458878e05c15f45f97ec09d38" alt="" style={{'maxWidth':'180px'}}  />

       <h6>Safe Travelb </h6>
        </p>
       <p className='col-6 shadow'> 
       <img src="https://img.freepik.com/premium-vector/delivery-boy-ride-scooter-delivery-service-order-fast-shipping-hand-drawn-sketch-vector-background_460848-15173.jpg?w=996" alt="" style={{'maxWidth':'180px'}}  />
       <h6> Fast Delivery </h6>
        </p>
       <p className='col-6 '> 
       
        </p>
       </div>
      </div>
    </div>
  );
};

export default MyExtra;