import React from 'react';


const Banner = () => {
    return (
      <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators ">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://c4.wallpaperflare.com/wallpaper/198/327/823/ducati-superbike-panigale-r-side-view-motorcycle-vehicle-wallpaper-preview.jpg"
              className=" w-100 h-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://pictures.topspeed.com/IMG/crop/201312/ducati-superbike-119-20_800x0w.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://photos.motogp.com/2021/02/12/2019-motogp-red-bull-ring-spielbergmiguel-oliveira_88_rc16_red-bull-ktm-factory-racing_motogp_team-presentation_2021-24-.gallery_full_top_lg.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    );
};

export default Banner;