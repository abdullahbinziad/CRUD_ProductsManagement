import React from "react";

import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

const AddNewProducts = () => {
  const navigate = useNavigate();
  //read the auth context
  const { register, handleSubmit, reset } = useForm();

  const addnew = (data) => {
    console.log(data);
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        reset();

        if (data.insertedId) {
         
            Swal.fire({
                title: `${data.name} Added`,
                icon:'success',
                showDenyButton: true,
                showCancelButton: false,
                confirmButtonText: "Add More",
                denyButtonText: `Done`,
              })
            .then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              navigate("/addnew");
            } else if (result.isDenied) {
              navigate("/");
            }
          });
        }
      });
  };


  //   handle on submit

  return (
    <div className="w-full ">
      {/* use of sweet alert template
       */}

      <div className=" mt-4">
        <div className="w-3/4 mx-auto  ">
          <div className="card  shadow-2xl bg-base-100 item-center">
           <Link to='/'> <button className="btn btn-primary ">Se All Products</button></Link>
            <form
              name="register-form"
              onSubmit={handleSubmit(addnew)}
              className="p-12"
            >
              <h1 className="text-4xl font-bold text-center">Add Products</h1>
              <div className="grid grid-cols-2 gap-3">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name")}
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
                    {...register("productsCata")}
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
                    {...register("favColor")}
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
                    {...register("photoUrl")}
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
                  value="Add New Products"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewProducts;
