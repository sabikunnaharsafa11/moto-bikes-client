
import Rating from "react-rating";
import React, { useEffect, useState } from 'react';

const Review = () => {
    const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://guarded-cliffs-66060.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);

    return (
        <div className="container my-5">
      <h2 className="mb-4">Users Review</h2>
      <div className="row row-cols-1 row-cols-md-5 g-4">
        {reviews.map((review) => (
          <div key={review._id} className="col">
            <div className="card h-100 border-0">
              <img
                src={review.image}
                className="card-img-top"
                style={{ borderRadius: "50%", width: "50%", margin: "auto" }}
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title reviewer-name">{review.name}</h3>
                <img
                  src="  https://i.ibb.co/3c0xZYZ/s-bg.png"
                  style={{ width: "40%" }}
                  className="card-img-top"
                  alt="..."
                />
                <p className="card-text">
                  <Rating
                    className="user-rating mt-2"
                    initialRating={review.rating}
                    readonly
                    emptySymbol="fa fa-star-o fa-2x"
                    fullSymbol="fa fa-star fa-2x"
                  />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    );
};

export default Review;