import React from 'react';
import Header from '../Components/Navber/Header';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;