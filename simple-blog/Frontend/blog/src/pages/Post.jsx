import { useParams, Link } from "react-router-dom";

const posts = [
  { id: 1, title: "First Blog Post", content: "This is the first post content" },
  { id: 2, title: "Second Blog Post", content: "This is the second post content" },
  { id: 3, title: "Third Blog Post", content: "This is the third post content" },
];

export default function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post)
    return (
      <div className="max-w-2xl mx-auto p-6 text-center">
        <p className="text-red-500 font-semibold">❌ Post not found</p>
        <Link to="/" className="text-blue-600 underline">
          Go Back
        </Link>
      </div>
    );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h2>
      <p className="text-gray-700 leading-relaxed mb-6">{post.content}</p>
      <Link
        to="/"
        className="inline-block px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
      >
        ← Back to Posts
      </Link>
    </div>
  );
}
