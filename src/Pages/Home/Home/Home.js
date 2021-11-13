import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';

import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Products></Products>
           <Gallery></Gallery>
        </div>
    );
};

export default Home;