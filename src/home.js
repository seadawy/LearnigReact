import BlogsList from "./BlogsList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, loading } = useFetch("http://localhost:8000/blogs");
    return (
        <div className="container">
            {loading && <h1>Loading Data</h1>}
            {blogs && <BlogsList blogs={blogs} title="all blogs"></BlogsList>}
            {blogs && <BlogsList blogs={blogs.filter((blog) => blog.author === "seadawy")} title="seadawy"></BlogsList>}
        </div>
    );
}

export default Home;