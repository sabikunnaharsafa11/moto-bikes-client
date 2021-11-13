import React from 'react';

const gallery = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ25HbCFOIpJsHN97ewTRcUgsGrCm_fl_7eEN9KfN7Q-CfPDq--ZZQhgNMimOiQ9q2x7Yk&usqp=CAU"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiO_KmZSmFjdyyJCnkeQpiNvfpswq8i73Nh8W_ywBzUC2qDn3NdcgdJjvBrehRcLP6FPY&usqp=CAU"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW7OUPXc2Fn1StIQmOzkqBvTswjdpxlT0VMA&usqp=CAU"
    },
    {
        image: "https://images.bikeshala.com/blog/BE1539806E/motorcyclist-wearing-red-white-riding-jacket-800x800.webp"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbrzkWcf71MQsQXzS6d06BtPSOa4o_kT2AuC0ag8UAqhKIU53ri_-UwAyH3ku3yCtnm6A&usqp=CAU"
    }
]

const Gallery = () => {
    return (
        <div>
        <div className="row d-flex g-0 mt-5">
            <h2 className="text-center fw-bold ">GALLERY</h2>
           {gallery.map(photo => <img key={photo.image} className="img-fluid mt-4" style={{width: '20%'}} src={photo.image} alt="" />)}
        </div>
    </div>
    );
};

export default Gallery;