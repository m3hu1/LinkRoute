import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white">
      <div className="flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <div className="text-gradient_purple-blue !font-bold text-3xl glow-effect-animate">
            Qaution
          </div>
        </Link>
        <ul className="flex-center gap-x-3 hidden md:flex md:gap-x-10">
          <li className="text-xl text-gradient_blue-purple !font-bold glow-effect">
            <Link href="/">About Us</Link>
            {/* <Link href="/aboutus">About Us</Link> */}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;