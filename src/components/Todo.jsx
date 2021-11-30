const Todo = ({ todo, deleteTodo, editTodo }) => {
  const { id, name, description, state, priority } = todo;

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start mt-4">
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {name} ({state ? "Finalizado" : "Pendiente"})
        </div>
        <p>{description}</p>
        <div>
          <button
            className="btn btn-danger me-2"
            onClick={() => deleteTodo(id)}
          >
            Eliminar
          </button>
          <button className="btn btn-warning" onClick={() => editTodo(id)}>Editar</button>
        </div>
      </div>
      <span className="badge bg-primary rounded-pill">
        {priority && "Prioritario"}
      </span>
    </li>
  );
};

export default Todo;
