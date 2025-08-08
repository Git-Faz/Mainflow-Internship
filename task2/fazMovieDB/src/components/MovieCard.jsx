const MovieCard = ({ title, image, description }) => {

return (
    <div className="movie-card bg-gray-950 rounded-lg shadow-lg overflow-hidden m-4 w-56 flex flex-col">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="p-4 flex flex-col">
            <h2 className="text-lg font-bold text-white mb-2">{title}</h2>
            <p className="text-sm text-gray-300 line-clamp-3">{description}</p>
        </div>
    </div>
);
};

export default MovieCard;
