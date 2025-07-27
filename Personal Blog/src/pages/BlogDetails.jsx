// src/pages/BlogDetails.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { bookmarksAtom } from "../atoms/bookmarkAtom";

const BlogDetails = ({ blogs }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((item) => item.id === id);
  const [bookmarks, setBookmarks] = useAtom(bookmarksAtom);

  const isBookmarked = bookmarks.some((b) => b.id === blog?.id);

  const toggleBookmark = () => {
    if (isBookmarked) {
      setBookmarks((prev) => prev.filter((b) => b.id !== blog.id));
    } else {
      setBookmarks((prev) => [
        ...prev,
        {
          id: blog.id,
          title: blog.title,
          content: blog.content,
          // add only necessary fields
        },
      ]);
    }
  };

  useEffect(() => {
    if (!blog) {
      alert("Blog not found");
      navigate("/");
    }
  }, [blog, navigate]);

  if (!blog) return null;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <button
        onClick={() => navigate("/")}
        className="text-blue-500 underline mb-4"
      >
        ← Back to Home
      </button>
      <h2 className="text-3xl font-bold">{blog.title}</h2>
      <p className="text-sm text-gray-500">
        By {blog.author} on {new Date(blog.createdAt).toLocaleDateString()}
      </p>
      <p className="mt-2 text-lg text-gray-700">{blog.description}</p>
      <div className="mt-4 whitespace-pre-wrap">{blog.content}</div>
      <div className="mt-6 space-x-4">
        <button
          onClick={() => navigate(`/edit/${blog.id}`)}
          className="px-4 py-2 bg-yellow-400 text-black rounded"
        >
          Edit
        </button>
        <button
          onClick={toggleBookmark}
          className={`px-4 py-2 rounded ${
            isBookmarked ? "bg-red-500" : "bg-blue-600"
          } text-white`}
        >
          {isBookmarked ? "Remove Bookmark" : "Bookmark"}
        </button>
      </div>
    </div>
  );
};

export default BlogDetails;
