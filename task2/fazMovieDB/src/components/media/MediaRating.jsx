const MediaRating = ({ rating, voteCount }) => {
  return (
    <div className="flex flex-row items-center space-x-2">
      <span className="text-yellow-400 font-bold text-2xl">
        {rating ? rating.toFixed(1) : "N/A"}
      </span>
      <span className="text-gray-400 text-sm">
        {voteCount ? `(${voteCount} votes)` : ""}
      </span>
    </div>
  );
};

export default MediaRating;
