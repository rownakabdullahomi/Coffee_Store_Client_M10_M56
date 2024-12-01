import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const SignIn = () => {

    const {signInUser} = useContext(AuthContext);

    const handleSignIn = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInUser(email, password)
        .then(res => {
            console.log(res.user);

            // Get Last Login Time
            const lastSignInTime = res?.user?.metadata?.lastSignInTime;
            const loginInfo = {email, lastSignInTime};

            fetch(`http://localhost:5000/users`, {
                method: "PATCH",
                headers:{
                    "content-type": "application/json"
                },
                body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log("Updated in DB", data);
            })


        })
        .catch(error => {
            console.log(error);
        })
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col gap-10">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign In now!</h1>
        </div>
        <div className="card bg-base-100 w-full lg:min-w-[500px] shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign In"
                className="btn btn-outline btn-neutral"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
