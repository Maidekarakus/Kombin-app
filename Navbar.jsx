import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-extrabold text-white">Kombin App</div>
        <div className="hidden md:flex space-x-8 text-white font-semibold">
          <Link to="/" className="hover:text-gray-200 transition-all duration-300">Ana Sayfa</Link>
          <Link to="/login" className="hover:text-gray-200 transition-all duration-300">Giriş</Link>
          <Link to="/register" className="hover:text-gray-200 transition-all duration-300">Kayıt Ol</Link>
        </div>
      </div>
    </nav>
  );
}