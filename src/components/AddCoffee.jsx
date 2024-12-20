import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // Send Data to The Server
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] p-24 ">
      <h2 className="text-3xl font-extrabold mb-8">Add Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* Form Name and Quantity Row */}
        <div className="md:flex mb-8">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Coffee Name</span>
            </div>
            <input
              type="text"
              name="name"
              placeholder="Coffee Name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-1/2 ml-5">
            <div className="label">
              <span className="label-text">Available Quantity</span>
            </div>
            <input
              type="text"
              name="quantity"
              placeholder="Available Quantity"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        {/* Form Supplier and Taste Row */}
        <div className="md:flex mb-8">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Supplier Name</span>
            </div>
            <input
              type="text"
              name="supplier"
              placeholder="Supplier Name"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-1/2 ml-5">
            <div className="label">
              <span className="label-text">Taste</span>
            </div>
            <input
              type="text"
              name="taste"
              placeholder="Taste"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        {/* Form Category and Details Row */}
        <div className="md:flex mb-8">
          <label className="form-control md:w-1/2">
            <div className="label">
              <span className="label-text">Category</span>
            </div>
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="input input-bordered w-full"
            />
          </label>
          <label className="form-control w-1/2 ml-5">
            <div className="label">
              <span className="label-text">Details</span>
            </div>
            <input
              type="text"
              name="details"
              placeholder="Details"
              className="input input-bordered w-full "
            />
          </label>
        </div>
        {/* Form Photo URL Row */}
        <div className="mb-8">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Photo URL</span>
            </div>
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              className="input input-bordered w-full"
            />
          </label>
        </div>

        <input
          type="submit"
          value="Add Coffee"
          className="btn btn-block btn-neutral"
        />
      </form>
    </div>
  );
};

export default AddCoffee;
