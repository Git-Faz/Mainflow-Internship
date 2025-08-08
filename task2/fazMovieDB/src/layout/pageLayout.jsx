import React from "react";

const Navbar = ({ logo }) => {
  return (
    <div className="navbar  border-b-1 border-green-500 sticky z-50 " style={{ boxShadow: '0 4px 10px rgba(34,197,94,0.5)' }}>
      <nav className="flex justify-between items-center bg-black text-white p-2">
        <div className="flex items-center space-x-20">
          <div className="logo text-green-500 p-2">
            <h1>{logo}</h1>
          </div>
          <div className="nav-links flex space-x-10 justify-between p-2">
            <a
              href="#"
              className="border-b-2 border-transparent hover:border-blue-400 p-1"
            >
              Movies
            </a>
            <a
              href="#"
              className="border-b-2 border-transparent hover:border-blue-400 p-1"
            >
              TV Shows
            </a>
            <a
              href="#"
              className="border-b-2 border-transparent hover:border-blue-400 p-1"
            >
              Characters
            </a>
          </div>
        </div>

        <div className="search">
          <input
            type="search"
            placeholder="Search..."
            className="p-2 rounded border-b-2 border-blue-400 focus:bg-blue-300/10 focus:border-blue-400 focus:outline-none w-48 md:w-64"
          />
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

const Heading = ({ heading }) =>{
  return(
    <div className="mx-4">
      <h1 className="text-2xl font-medium mx-4 ml-4 pt-4 pb-2 pr-4 pl-1 border-b-2 border-green-500 text-white text-left w-fit">{heading}</h1>
    </div>
  )
}

export { Navbar, Footer, Heading };
