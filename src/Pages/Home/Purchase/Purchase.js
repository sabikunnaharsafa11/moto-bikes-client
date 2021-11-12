import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import { useForm } from "react-hook-form";

const Purchase = () => {
    const { user } = useAuth();
    const {productsId} = useParams();
    const [ product, setProduct] = useState({})
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    useEffect(() => {
        fetch(`https://serene-beyond-53028.herokuapp.com/products/${productsId}`)
        .then(res => res.json())
        .then(data => setProduct(data));
          
      }, []);

    const onSubmit = data => {
    fetch('https://serene-beyond-53028.herokuapp.com/orders', {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(data),
     })
    .then((res) => res.json())
    .then((result) => console.log(result));
    console.log(data);
    }

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="p-2 m-2 form-control"
              placeholder="name"
              {...register("name")}
              value ={user.displayName}
               readOnly
              
            />
            <br />
            <input
              className="p-2 m-2 form-control"
              placeholder="email"
              {...register("email")}
              value = {user.email}
              readOnly
            />
            <br />
            <input
              className="p-2 m-2 form-control"
              placeholder="title"
              {...register("title")}
            />
            <br />
            <input
              type="number"
              className="p-2 m-2 form-control"
              placeholder="price"
              {...register("price")}
            />
            <br />
            <input
              type="text"
              className="p-2 m-2 form-control"
              placeholder="Address"
              {...register("Address")}
            />
            <br />
          
              <button type="submit" className="btn btn-primary">
                Purchase Now
              </button>
          
          </form>
        </div>
        </div>
        </div>


        

       
    );
};

export default Purchase;