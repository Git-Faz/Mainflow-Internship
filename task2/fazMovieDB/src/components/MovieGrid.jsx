import Card from "./Card.jsx";
import { useEffect, useState } from "react";

const MovieGrid = ({ fetchData }) => {

  const [items, setItems] = useState([]);
  const imgLink = "https://image.tmdb.org/t/p/w500";
  
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const data = await fetchData();
        setItems(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchItems();
  }, [fetchData]);

  return (
    <div className="movie-grid flex flex-row mx-4 my-4 flex-wrap justify-center ">
      {items.map((item) => (
        <Card
          key={item.id}
          title={item.title || item.name}
          image={
            item.poster_path
              ? `${imgLink}${item.poster_path}`
              : `${imgLink}${item.profile_path}`
          }
          description={item.overview}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
