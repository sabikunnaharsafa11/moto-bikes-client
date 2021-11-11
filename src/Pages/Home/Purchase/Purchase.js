import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Purchase = () => {
    const {productsId} = useParams();
    const [ product, setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/products/${productsId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
          
      }, []);

    return (          
      <div className="container my-5">
      <div className="row">
        <div className="col-lg-5 col-md-7 col-sm-12">
          <div className="card">
            <img src={ product.img} className="card-img-top" alt="..." />
            <div className="card-body">
            <h4 className="card-title">{product.title}</h4>
              <h5 className="card-title">{product.price}</h5>
              <p className="card-text">{ product.description}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
        
        </div>
        </div>
        </div>


        

       
    );
};

export default Purchase;