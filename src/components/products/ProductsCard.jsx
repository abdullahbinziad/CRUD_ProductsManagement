import React from "react";
import { FiEdit } from "react-icons/fi";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ProductsCard = (props) => {

    const {_id,name,photoUrl,productsCata,favColor} = props.product;
    const handleDeleted = props.handleDeleted;


    const handleDetails= ()=>{
        Swal.fire({
            title: `${name}`,
          
            html:`<p>${productsCata}</p> <br><p>${favColor}</p>`,
            imageUrl: `${photoUrl}`,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
            confirmButtonText:"Cool"
          })
    }

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={photoUrl}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{name}</div>
          
          </div>
        </div>
      </td>
      <td>
       {productsCata}
        <br />
       
      </td>
      <td>{favColor}</td>
      <th className="flex items-center gap-2">
        <button onClick={handleDetails} className="btn btn-success">
          <GrView></GrView>
        </button>

        <button onClick={()=>handleDeleted(_id)} className="btn btn-circle btn-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
       <Link to={`/update/${_id}`} > <button  className="btn tn-tiny">
          <FiEdit></FiEdit>
        </button></Link>
      </th>
    </tr>
  );
};

export default ProductsCard;
