import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftAside from './LeftAside';

const Home = () => {

    const news=useLoaderData();
    // console.log(news);

    return (
        <div className="w-11/12 mx-auto grid md:grid-cols-12 gap-4 ">
            <aside className='col-span-3'>
                <LeftAside></LeftAside>
            </aside>
            <aside className='col-span-9'>fgdfgsdfg</aside>
        </div>
    );
};

export default Home;