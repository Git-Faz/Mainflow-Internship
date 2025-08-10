import Card from "./Card.jsx";
import { useEffect, useState } from "react";

const MovieGrid = ({ fetchData, type, className }) => {

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
    <div className={`movie-grid flex flex-row flex-wrap justify-center my-2 ${className}`}>
      {items.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          type={type}
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
