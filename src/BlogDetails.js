import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, loading } = useFetch("http://localhost:8000/blogs/" + id);
    console.log(blog, loading)
    return (
        <div className="container">
            <br />
            {loading && <div>data is loading</div>}
            {blog &&
                <div className="blog">
                    <h3 className="BlogTitle" >
                        {blog.title}
                    </h3>
                    <p>{blog.author}</p>
                </div>
            }
        </div>
    );
}

export default BlogDetails;