import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/footer/Footer';
import Headers from '../pages/headers/Headers';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div className='mx-auto bg-light' style={{'maxWidth':'95%'}}>
            <Headers/>
            <Outlet/>
            <Footer/>
            <ToastContainer />
        </div>
    );
};

export default Main;