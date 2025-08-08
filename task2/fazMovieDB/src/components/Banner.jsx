import "./Components.css";
const Banner = ({ bgImg, heading, caption = "Information about movies" }) => {
  return (
    <div
      className="banner flex justify-center flex-col items-center 
               text-white text-shadow-black text-shadow-lg relative bg-cover bg-center h-98 max-w-[1265px]
                before:bg-black/70 before:z-1"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <h1 className="relative z-2 text-8xl text-center font-bold ">
        {heading}
      </h1>
      <p className="relative z-2 text-xl text-center">{caption}</p>
    </div>
  );
};

export default Banner;
