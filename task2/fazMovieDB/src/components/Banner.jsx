import "./Components.css";
const Banner = ({ bgImg, heading, caption = "Information about movies" }) => {
  return (
    <div
      className="banner flex justify-center flex-col items-center 
               text-white text-shadow-black text-shadow-lg relative bg-cover bg-center 
               h-98 w-screen max-w-full before:bg-black/70 before:z-1"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1 className="relative z-2 text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-center font-bold px-4">
        {heading}
      </h1>
      <p className="relative z-2 text-base sm:text-lg md:text-xl text-center px-4 max-w-4xl">
        {caption}
      </p>
    </div>
  );
};

export default Banner;
