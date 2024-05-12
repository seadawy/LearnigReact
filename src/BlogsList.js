import { Link } from "react-router-dom";

const BlogsList = ({ blogs, title }) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <Link to={`/blog/${blog.id}`} className="GotoBlog" key={blog.id}>
                    <div className="blog-view">
                        <h3>
                            {blog.title}
                        </h3>
                        <p>
                            written by <strong>{blog.author}</strong>
                        </p>
                        <button className="del">
                            delete
                        </button>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default BlogsList;