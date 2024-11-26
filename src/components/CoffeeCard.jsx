import { Link } from "react-router-dom";
import Swal from "sweetalert2";

/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, photo } =
    coffee;

  const handleDelete = (_id) => {
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
        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Coffee has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-base-100 shadow-xl border-2 border-base-300 p-2">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full pr-4 items-center">
        <div>
          <h2 className="card-title">Name: {name}</h2>
          <p>Quantity:{quantity}</p>
          <p>Supplier:{supplier}</p>
          <p>Taste:{taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="join join-vertical space-y-4">
            <button className="btn join-item btn-neutral">View</button>
            <Link to={`updateCoffee/${_id}`} className="btn join-item btn-primary">Edit</Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn join-item btn-error"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

// https://i.ibb.co.com/BKtrXBc/1.png
// https://i.ibb.co.com/RS0FK0c/2.png
// https://i.ibb.co.com/P5NNBZP/3.png
// https://i.ibb.co.com/MPWJZDf/4.png
// https://i.ibb.co.com/WFZjGjq/5.png
// https://i.ibb.co.com/brmhsSJ/6.png
