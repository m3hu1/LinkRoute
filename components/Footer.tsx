import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white-800 flex-between body-text w-full gap-y-10 border-t border-black-400 bg-black-100 px-20 py-12 max-md:flex-col glow-effect">
      <p className="hidden sm:inline">
        Copyright © 2023 LinkRoute | All Rights Reserved
      </p>
      <p className="sm:hidden">© 2023 LinkRoute.</p>

      <div className="flex gap-x-9">
        <Link href="/termsandconditions" className="hidden sm:inline">
          Terms & Conditions
        </Link>
        <Link href="/privacypolicy" className="hidden sm:inline">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
