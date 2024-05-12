import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <a href="#NewBlog">Old Blog</a>
                <a href="#NewBlog">Archive Blog</a>
            </div>
        </nav>
    );
}

export default Navbar;