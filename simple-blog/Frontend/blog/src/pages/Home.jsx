import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "First Blog Post", content: "This is the first post content" },
  { id: 2, title: "Second Blog Post", content: "This is the second post content" },
  { id: 3, title: "Third Blog Post", content: "This is the third post content" },
];

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        📚 All Blog Posts
      </h2>

      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="p-5 bg-white rounded-xl shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {post.title}
            </h3>
            <p className="text-gray-600 mb-3">{post.content.substring(0, 50)}...</p>
            <Link
              to={`/post/${post.id}`}
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
