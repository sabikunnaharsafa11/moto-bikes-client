import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => { 
        console.log(data);    
        fetch('https://serene-beyond-53028.herokuapp.com/products', {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(result => {
            if(result.insertedId){
                alert('added Successfully.');
       
            }
        });
             
    } 
    return (
        <div>
            <h3 className="text-center">ADD PRODUCT</h3>
          <div className="container d-flex justify-content-center mb-5">
          <form onSubmit={handleSubmit(onSubmit)}>
      <input type="name"   className="p-2 m-2"  placeholder="title" {...register("title")} />
        <br />
      <input type="number" className="p-2 m-2"  placeholder="price" {...register("price")} />    
      <br />
      <input className="p-2 m-2" placeholder="description" {...register("description", { required: true })} />
      <br />
      <input className="p-2 m-2" placeholder="image" {...register("img", { required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}
      <br />

      <input className="btn btn-primary" type="submit" />
    </form>
          </div>
            
        </div>
    );
};

export default AddProduct;