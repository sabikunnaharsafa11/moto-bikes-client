import React from 'react';
import Navigation from '../../Navigation/Navigation';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Products></Products>
        </div>
    );
};

export default Home;