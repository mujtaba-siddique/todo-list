import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems , onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem 
          key={item.id || index} 
          todoDate={item.dueDate} 
          todoName={item.name} 
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
};
export default TodoItems;
