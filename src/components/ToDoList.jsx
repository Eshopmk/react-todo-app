import ToDoItem from './ToDoItem';

function ToDoList({ todos, onDelete, onToggle, onEdit }) {
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
