
import ReactStars from "react-stars";
import React, { useEffect, useState } from 'react';


const HomeReview = () => {
    const [reviews, setReviews] = useState([]);
   
  useEffect(() => {
    fetch("https://serene-beyond-53028.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

    return (
      <div className="container my-5">
      <h2 className="mb-4 fw-bold  text-center">Users Review</h2>
      <div className="row row-cols-1 row-cols-md-5 g-4">
      {reviews.map((review) => (
              <>
                <div class="card mx-3">
                  <div class="card-body text-center">
                    <h5 class="card-title">{review.name}</h5>                             
                      <ReactStars
                      className = 'd-flex align-items-center justify-content-center'
                      count={review.rating}
                      // onChange={ratingChanged}
                      size={24}
                      half={true}
                      color1={'#ffd700'} />
                   
                    <p class="card-text">{review.description}</p>
                  </div>
                </div>
              </>
            ))}     {reviews.map((review) => (
              <>
                <div class="card mx-3">
                  <div class="card-body text-center">
                    <h5 class="card-title">{review.name}</h5>                           
                      <ReactStars
                      className = 'd-flex align-items-center justify-content-center'
                      count={review.rating}
                      // onChange={ratingChanged}
                      size={24}
                      half={true}
                      color1={'#ffd700'} />
                   
                    <p class="card-text">{review.description}</p>
                  </div>
                </div>
              </>
            ))}
            </div>
          </div>
       
      
    );
};

export default HomeReview;