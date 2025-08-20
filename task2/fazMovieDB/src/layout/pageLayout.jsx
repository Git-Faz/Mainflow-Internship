import Navbar from "./NavBar.jsx";

const Header = ({ logo }) => {
  const genreStyle =
    "bg-gray-950 text-gray-300 px-2 py-1 rounded-md m-1 cursor-pointer text-sm sm:text-base";
  const genreContainer = "flex flex-wrap justify-center sm:justify-start";

  return (
    <div
      className="navbar border-b-1 border-green-500 sticky top-0 z-50 w-full "
      style={{ boxShadow: "0 4px 10px rgba(34,197,94,0.5)" }}
    >
      <Navbar logo={logo} genreStyle={genreStyle} genreContainer={genreContainer} />
    </div>
  );
};

const Footer = ({ name, link, info, logo }) => {
  return (
    <div
      className="flex justify-center items-center flex-col p-2 sm:p-4 bg-black text-green-500 border-t-1 border-green-500"
      style={{ boxShadow: "0 -4px 10px rgba(34,197,94,0.5)" }}
      id="footer"
    >
      <h1 className="flex items-center gap-2 text-center text-sm sm:text-base">
        Made by
        <a
          href={link}
          target="_blank"
          className="hover:bg-green-400/30 border-b-2 border-green-500 hover:text-white transition-colors p-1 rounded flex items-center gap-1 text-sm sm:text-base"
        >
          <img src={logo} alt="logo" className="w-4 h-4 sm:w-6 sm:h-6" />
          <span className="break-words">{name}</span>
        </a>
      </h1>

      <p className="text-center mt-2 text-xs sm:text-sm px-2">{info}</p>
    </div>
  );
};

export { Header, Footer };
