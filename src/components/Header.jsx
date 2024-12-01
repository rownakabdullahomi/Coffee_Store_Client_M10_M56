import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex items-center justify-center gap-5 p-10 pb-0">
            <Link to={"/"}>Home</Link>
            <Link to={"/addCoffee"}>Add Coffee</Link>
            <Link to={"/users"}>Users</Link>
            <Link to={"/signin"}>Sign In</Link>
            <Link to={"/signup"}>Sign Up</Link>
        </div>
    );
};

export default Header;