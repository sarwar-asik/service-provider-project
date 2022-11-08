import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Sliders = () => {
    return (
        <div className='mx-auto rounded' style={{'maxWidth':'90%'}}>
             <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/premium-photo/beautiful-tropical-beach-sea-with-umbrella-chair-around-swimming-pool-hotel-resort-travel-vacation_1339-159442.jpg?w=1060"
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='https://img.freepik.com/free-photo/travelling-concept-with-group-travelers-miniature_1150-17844.jpg?w=1060&t=st=1667845175~exp=1667845775~hmac=0c04f3582866bcb24f3e6c8dec9ab70723493d1f86dc0e833c63a9387b3b03d0'
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/hammocks-with-palm-trees_1203-201.jpg?w=1060&t=st=1667845743~exp=1667846343~hmac=cfa7d19a1d2796a16ece982acd3a52555ced96854734e42176c9f650f55de9f3"
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
            
        </div>
    );
};

export default Sliders;