// src/components/BlogCard.jsx
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { id, title, author, description, createdAt } = blog;

  return (
    <div className="border rounded p-4 shadow hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-500">
        By {author} on {new Date(createdAt).toLocaleDateString()}
      </p>
      <p className="mt-2 text-gray-700">{description}</p>
      <Link
        to={`/blog/${id}`}
        className="text-blue-500 hover:underline mt-2 inline-block"
      >
        Read more →
      </Link>
    </div>
  );
};

export default BlogCard;
