import ListItem from "./ListItem";
import './list.css';
const List = ({ items }) => {
    
    return (
        <div className="list">
            {items.map((item, index) => (
                <ListItem key={index} item={item} />
            ))}
        </div>
    );
};

export default List;
