/* eslint-disable react/prop-types */
const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="card card-side bg-base-100 shadow-xl">
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
            <button className="btn join-item">View</button>
            <button className="btn join-item">Edit</button>
            <button className="btn join-item">Delete</button>
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
