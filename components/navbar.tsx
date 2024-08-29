import Link from "next/link";

function Navbar() {
  return (
    <div className="bg-purple-700 text-white font-bold p-4 sm:flex sm:p-4 sm:justify-around ">
      <div className="flex justify-center p-2 sm:p-0">
        <Link className="hover:text-purple-300" href="/">
          Muhammad Hassaan Arain.
        </Link>
      </div>
      <nav className="flex justify-around sm:space-x-5">
        <Link
          className="hover:border-b-purple-400 hover:border-b hover:text-purple-300"
          href="/"
        >
          Home
        </Link>
        <Link
          className="hover:border-b-purple-400 hover:border-b hover:text-purple-300"
          href="/about"
        >
          About
        </Link>
        <Link
          className="hover:border-b-purple-400 hover:border-b hover:text-purple-300"
          href="/products"
        >
          Products
        </Link>
      </nav>
    </div>
  );
}
export default Navbar;
