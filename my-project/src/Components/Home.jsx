import React from 'react';
import { useLoaderData } from 'react-router-dom';
import LeftAside from './LeftAside';

const Home = () => {

    const news = useLoaderData();
    console.log(news);

    return (
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 ">
            <aside className='col-span-12 md:col-span-3'>
                <LeftAside></LeftAside>
            </aside>
            <aside className="col-span-12 md:col-span-9 mt-5">
                <div className="grid grid-cols-1  md:grid-cols-2 gap-4">
                    {news.map((newsItem, index) => (
                        <div
                            key={newsItem.id}
                            className={`card bg-base-100 shadow-lg hover:shadow-xl transition rounded-2xl
          ${index === 0 ? "col-span-2" : ""}`}
                        >
                            <figure className="h-52 overflow-hidden rounded-t-2xl">
                                <img
                                    src={newsItem.image}
                                    alt={newsItem.title}
                                    className="h-full w-full object-cover"
                                />
                            </figure>

                            <div className="card-body p-5">
                                <h2 className="card-title text-lg font-bold leading-snug">
                                    {newsItem.title}
                                </h2>

                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {newsItem.description}
                                </p>

                                <div className="flex items-center gap-2 text-xs text-gray-500 mt-3">
                                    <span>📄 {newsItem.type}</span>
                                    <span>•</span>
                                    <span>{newsItem.category}</span>
                                    <span>•</span>
                                    <span>{newsItem.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </aside>

        </div>
    );
};

export default Home;