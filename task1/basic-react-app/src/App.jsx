import List from "./components/List";
import './App.css'
import { useState, useEffect } from 'react';

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('/items.json');
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error('Error loading items:', error);
      }
    };

    fetchItems();
  }, []);

  return (
    <>
      <h1>My Phone List</h1>
        <List items={items} />
    </>
  );
};

export default App;
