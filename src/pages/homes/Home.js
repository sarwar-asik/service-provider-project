import React from 'react';
import Services from '../services/Services';
import Sliders from './Sliders';

const Home = () => {
    return (
        <div className='bg-light mx-auto' style={{'maxWidth':'90%',}}>
            <Sliders></Sliders>
            <Services/>
        </div>
    );
};

export default Home;