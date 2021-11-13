import React from 'react';

const gallery = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25HbCFOIpJsHN97ewTRcUgsGrCm_fl_7eEN9KfN7Q-CfPDq--ZZQhgNMimOiQ9q2x7Yk&usqp=CAU"
    },
    {
        image: "https://i.ibb.co/M6hd3Rm/g4.jpg"
    },
    {
        image: "https://i.ibb.co/w6p9MS6/g3.jpg"
    },
    {
        image: "https://i.ibb.co/W0vB112/g1.jpg"
    },
    {
        image: "https://i.ibb.co/fNPHYzq/g2.jpg"
    }
]

const Gallery = () => {
    return (
        <div>
        <div className="row d-flex g-0 mt-5">
            <h2 className="text-center">GALLERY</h2>
           {gallery.map(photo => <img key={photo.image} className="img-fluid" style={{width: '20%'}} src={photo.image} alt="" />)}
        </div>
    </div>
    );
};

export default Gallery;