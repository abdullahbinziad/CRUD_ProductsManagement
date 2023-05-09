import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ProductsCard from "./ProductsCard";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const Products = () => {
  const loadedData = useLoaderData();
  console.log(loadedData);
  const [products, setProducts] = useState(loadedData);

  // Delete data

  const handleDeleted = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const remainingProducts = products.filter((n) => n._id !== id);
            setProducts(remainingProducts);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          });
      }
    });
  };

  return (
    <>
      <div className="w-100 flex flex-col items-center  ">
        <h1 className="text-center font-bold text-4xl  py-5">
          The Products HUB
        </h1>
        <button className="btn btn-primary w-[200px] ">
          <Link to="/addnew">Add New Products</Link>
        </button>

        <div className="overflow-x-auto w-3/4 mx-auto py-5">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Products Catagory</th>
                <th>Favorite Color</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <ProductsCard
                  handleDeleted={handleDeleted}
                  product={product}
                  key={product._id}
                ></ProductsCard>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Products;
