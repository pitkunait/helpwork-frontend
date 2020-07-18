import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';


const FrontPage = () => {

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1000);

    }, []);


    return (isLoading ?
            <div>
                i am loading
            </div> :
            <div>
                <Link to={"/jobs"}> huihui </Link>
            </div>
    );
};

export default FrontPage;
