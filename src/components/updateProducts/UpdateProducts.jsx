import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProducts = () => {
  //read the loader data
  const nevigate = useNavigate()
  const loadedData = useLoaderData();
const {_id,name,photoUrl,productsCata,favColor}= loadedData;

  //   handle on submit
  const updateProducts = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const productsCata = form.productsCata.value;
    const favColor = form.favColor.value;
    const products = {
      name,
      photoUrl,
      productsCata,
      favColor
    };

    fetch(`http://localhost:3000/products/${_id}`,{
        method:'PUT',
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(products),
    })
    .then(res=> res.json())
    .then(data =>{
        if(data.modifiedCount){
            Swal.fire({
                title: `<strong> ${products.name} Updated SuccesseFuly</strong>`,
                icon: "success",
                confirmButtonText:"Cool"
              }).then((result)=>{
if(result.isConfirmed){
    nevigate('/');
}
              })
              form.reset();
        }
        console.log(data);
    })
 

   
  };

  return (
    <div className="w-full ">
      <div className=" mt-4">
        <div className="w-3/4 mx-auto  ">
          <div className="card  shadow-2xl bg-base-100">
            <form
              name="register-form"
              onSubmit={updateProducts}
              className="p-12"
            >
              <h1 className="text-4xl font-bold text-center">Update Products</h1>
              <div className="grid grid-cols-2 gap-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                  defaultValue={name}
                    name="name"
                    type="text"
                    placeholder="Your Full Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Products Catagory</span>
                  </label>
                  <input
                  defaultValue={productsCata}
                    name="productsCata"
                    type="text"
                    placeholder="Products Catagory"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text"> Favorite Color</span>
                  </label>
                  <input
                  defaultValue={favColor}
                    name="favColor"
                    type="text"
                    placeholder="Favorite Color"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                  defaultValue={photoUrl}
                    name="photoUrl"
                    type="text"
                    placeholder="Photo Url"
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>
              <div className="form-control mt-6 w-100">
                <input
                  className="btn btn-primary w-100"
                  type="submit"
                  value="Update Products"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateProducts;
