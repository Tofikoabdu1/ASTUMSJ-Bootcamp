// src/pages/Home.jsx
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";

const Home = ({ blogs }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-7">Recent Blogs</h2>

      {blogs.length === 0 ? (
        <p className="text-gray-500">
          No blog posts yet. Create one to get started!
        </p>
      ) : (
        <div className="flex flex-wrap gap-4">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}

      <div className="mt-6">
        <Link
          to="/create"
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Create New Blog
        </Link>
      </div>
    </div>
  );
};

export default Home;
