import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Post from "./pages/Post";
import "./App.css"

export default function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Blog App</h1>
      <nav className="mb-4">
        <Link to="/" className="mr-4 text-blue-500">Home</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}
