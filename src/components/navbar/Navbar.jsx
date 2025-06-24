import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="flex justify-center h-[50px] bg-gradient-to-r from-blue-300 to-indigo-900 items-center">
        <div className="text-2xl cursor-pointer h-full hover:text-gray-200 p-2 w-[150px] text-center">
          <Link to="/">Home</Link>
        </div>
        <div className="text-2xl cursor-pointer h-full hover:text-gray-50 p-2 w-[150px] text-center">
          About
        </div>
        <div className="text-2xl cursor-pointer h-full hover:text-gray-200 p-2 w-[150px] text-center">
          Services
        </div>
        <div className="text-2xl cursor-pointer h-full hover:text-gray-200 p-2 w-[150px] text-center">
          Blogs
        </div>
        <div className="text-2xl cursor-pointer h-full hover:text-gray-200 p-2 w-[150px] text-center">
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
}
