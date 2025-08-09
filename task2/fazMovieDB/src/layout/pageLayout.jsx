import { HomeIcon, MagnifyingGlassCircleIcon } from '@heroicons/react/24/solid'
import { Link } from "react-router-dom";

const Navbar = ({ logo }) => {
  return (
    <div className="navbar border-b-1 border-green-500 sticky top-0 z-50 w-full" style={{ boxShadow: '0 4px 10px rgba(34,197,94,0.5)' }}>
      <nav className="flex justify-between items-center bg-black text-white p-2">
        <div className="flex items-center space-x-20">
          <div className="logo text-green-500 p-2 text-4xl font-bold font-stretch-expanded" style={{fontFamily: "Impact"}}>
            <Link to="/">{logo}</Link>
          </div>
          <div className="nav-links flex space-x-10 justify-between p-2">
            <Link
              to="/movies"
              className="border-b-2 border-transparent hover:border-blue-400 p-1"
            >
              Movies
            </Link>
            <Link
              to="/series"
              className="border-b-2 border-transparent hover:border-blue-400 p-1"
            >
              TV Shows
            </Link>
            <Link
              to="/celebrities"
              className="border-b-2 border-transparent hover:border-blue-400 p-1"
            >
              Celebrities
            </Link>
          </div>
        </div>

        <div className="flex flex-row items-center space-x-4">
          <div className="flex flex-row items-center border-b-2 border-blue-400 bg-transparent">
            <input
              type="search"
              placeholder="Search..."
              className="p-2 bg-transparent text-white placeholder-gray-400 focus:outline-none w-48 md:w-64"
            />
          <MagnifyingGlassCircleIcon className="size-8 text-blue-500 cursor-pointer" onClick={() => {console.log("Search clicked");
          }} />
          </div>
          <Link to="/" className="flex items-center gap-2">
            <HomeIcon className="w-6 h-6 text-green-500" />
          </Link>
        </div>
      </nav>
    </div>
  );
};

const Footer = ({ name, link, info, logo }) => {
  return (
    <div
      className="flex  justify-center items-center flex-col p-2 bg-black text-green-500 border-t-1 border-green-500"
      style={{ boxShadow: '0 -4px 10px rgba(34,197,94,0.5)' }}
      id="footer"
    >
      <h1 className="flex items-center gap-2"> 
        Made by
        <a href={link} target="_blank" className="hover:bg-green-400/30 border-b-2 border-green-500 hover:text-white transition-colors p-1 rounded flex items-center gap-1">
          <img src={logo} alt="logo" className="w-6 h-6" />
          {name}
        </a>
      </h1>

      <p className="text-center mt-2">{info}</p>
    </div>
  );
};



export { Navbar, Footer };
