import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ManageProduct = () => {
    const [manageProduct, setManageProduct] = useState();
    const { user } = useAuth();
    useEffect(() => {
     
      fetch(`https://serene-beyond-53028.herokuapp.com/orders/${user.email}`)
        .then((res) => res.json())
        .then((data) => setManageProduct(data))
      //   .finally(()=> setIsloading(false));
    }, [user.email]);
    const handleDelete = (id) => {
      
      const isConfirm = window.confirm("Are you sure...?");
      if (isConfirm) {
        fetch(`https://serene-beyond-53028.herokuapp.com/deleteOrders/${id}`, {
          method: "DELETE",
          headers: { "content-type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.deletedCount){
              const remaining = manageProduct.filter((order) => order._id !== id);
              setManageProduct(remaining);
            }
           
          });
      }
      }
    return (
        <div>
      <h3 className="text-center fw-bold text-uppercase my-4">
       Manage {manageProduct?.length} Product
      </h3>
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8 table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">title</th>
                  <th scope="col">Price</th>
                </tr>
              </thead>
              <tbody>
                {manageProduct
                  ? manageProduct?.map((order, index) => (
                      <tr key={index}>
                        <th scope="row">{index + 1}</th>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{order.title}</td>
                        <td>${order.price}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => handleDelete(order?._id)}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  : ""}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    );
};

export default ManageProduct;