const AddCoffee = () => {
  return (
    <div>
      <h2>Add Coffee</h2>
      <form>
        <div className="flex">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Coffee Name</span>
            </div>
            <input
              type="text"
              placeholder="Coffee Name"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Available Quantity</span>
            </div>
            <input
              type="text"
              placeholder="Available Quantity"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
