import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">CoursePilot</h1>
        <div className="space-x-4">
          <Link href="/" className="text-gray-700 hover:text-black">
            Home
          </Link>
          <Link href="/courses" className="text-gray-700 hover:text-black">
            Courses
          </Link>
          <Link href="/Instructor" className="text-gray-700 hover:text-black">
            Instructor
          </Link>
          <Link href="/about-us" className="text-gray-700 hover:text-black">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-black">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
