import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import Message from "./components/Welcome";
import "./App.css";
import { useState } from "react";

function App() {
  
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) =>{
    const newTodoItems = todoItems.filter (item => item.name !== todoItemName);
    setTodoItems(newTodoItems)
    console.log (`item Delete:${todoItemName}`);

  }

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
     {todoItems.length === 0 && <Message></Message>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
