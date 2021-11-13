import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => { 
        fetch('https://serene-beyond-53028.herokuapp.com/reviews', {
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
        <h3 className="text-center fw-bold">ADD REVIEWS </h3>
        <div className="container d-flex justify-content-center mb-5">
          <form onSubmit={handleSubmit(onSubmit)}>
      <input className="p-2 m-2"  placeholder="name" {...register("name")} />
        <br />
      <input type="number" className="p-2 m-2"  placeholder="number" {...register("number")} />    
      <br />
      <input className="p-2 m-2" placeholder="description" {...register("description", { required: true })} />
      <br />
      {/* <input className="p-2 m-2" placeholder="image" {...register("img", { required: true })} /> */}

      {errors.exampleRequired && <span>This field is required</span>}
      <br />

      <input className="btn btn-primary" type="submit" />
    </form>
          </div>
            
        </div>
    );
};

export default Review;