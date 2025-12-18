import React, { useEffect, useState } from 'react';

const LeftAside = () => {

    const [leftNews, setLeftNews]=useState([]);

    useEffect(()=>{
        fetch('leftNews.json')
        .then(res=>res.json())
        .then(data=>console.log(data))
    },[])
    
    // console.log(res)

    return (
        <div>
            
        </div>
    );
};

export default LeftAside;