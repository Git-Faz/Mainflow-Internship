import { Link } from "react-router-dom";

const Card = ({ title, image, description }) => {

    const handleClick = () => {
        console.log(`Clicked on ${title}`);
        return(
            <Link to={`/info`} className="text-blue-500 hover:underline">
                {title}
            </Link>
        ) // Example of navigating to a details page
    };

return (
    <div className="movie-card bg-gray-950 rounded-lg shadow-lg overflow-hidden m-2 w-46 flex flex-col cursor-pointer"
                     onClick={handleClick}>
        <img src={image} alt={title} className="w-full h-auto object-contain" />
        <div className="p-3 flex flex-col border-t-2 border-gray-500">
            <h2 className="text-base font-bold text-white mb-2">{title}</h2>
            <p className="text-xs text-gray-300 line-clamp-3">{description}</p>
        </div>
    </div>
);
};

export default Card;
