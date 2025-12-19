import React, { useEffect, useState } from 'react';

const LeftAside = () => {

    const [leftNews, setLeftNews] = useState([]);

    useEffect(() => {
        fetch('leftNews.json')
            .then(res => res.json())
            .then(data => setLeftNews(data))
    }, [])

    console.log(leftNews)

    return (
        <div>
            {
                leftNews.map(news => (
                    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition rounded-2xl">
                        <figure className="h-52 overflow-hidden rounded-t-2xl">
                            <img
                                src={news.image}
                                alt={news.title}
                                className="h-full w-full object-cover"
                            />
                        </figure>

                        <div className="card-body p-5">
                            <h2 className="card-title text-lg font-bold leading-snug">
                                {news.title}
                            </h2>

                            <p className="text-sm text-gray-600 leading-relaxed">
                                {news.description}
                            </p>

                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-3">
                                <span className="flex items-center gap-1">
                                    📄 {news.type}
                                </span>
                                <span>•</span>
                                <span>{news.category}</span>
                                <span>•</span>
                                <span>{news.date}</span>
                            </div>
                        </div>
                    </div>

                ))
            }
        </div>
    );
};

export default LeftAside;