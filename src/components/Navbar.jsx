import { useState } from "react";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between">
      {/* logo */}
      <Link to={"/"} className="">
        <h1>My blog</h1>
      </Link>
      {/* mobile menu */}
      <div className="md:hidden">
        {/* mobile button */}
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer text-3xl"
        >
          {isOpen ? <RxCross2 /> : <MdMenu />}
        </div>
        {/* mobile Link list */}
        <div
          className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 bg-fuchsia-300 ${
            isOpen ? "-right-0" : "-right-[100%]"
          } transition-all`}
        >
          menu
        </div>
      </div>
      {/* desktop menu */}
      <div className="hidden sm:flex items-center gap-8 xl:gap-12 font-medium">
        <Link to={"/"}>Home</Link>
        <Link>Trending</Link>
        <Link>Most Popular</Link>
        <Link>About</Link>

        <SignedOut>
          <Link to={"/login"}>
            <button className="px-4 cursor-pointer py-2 rounded-3xl bg-blue-800 text-white">
              Login
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
