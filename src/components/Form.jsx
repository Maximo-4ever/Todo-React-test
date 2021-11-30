import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from 'uuid';

const Form = ({ addTodo }) => {
  const initialState = {
    name: "",
    description: "",
    state: "Pendiente",
    priority: false,
  };
  const [inputs, handleChange, reset] = useForm(initialState)
  const { name, description, state, priority } = inputs;


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      e.target[0].focus();
      Swal.fire({
        title: "Error",
        text: "Please enter a name",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return console.log("Input invalid");
    }
    if (!description.trim()) {
      e.target[1].focus();
      Swal.fire({
        title: "Error",
        text: "Please enter a description",
        icon: "error",
        confirmButtonText: "Cool",
      });
      return console.log("Input invalid");
    }

    Swal.fire({
      title: "Success",
      text: "Task added successfully",
      icon: "success",
      confirmButtonText: "Cool",
    });


    addTodo({
      name,
      description,
      state: state === "Pendiente" ? false : true,
      priority,
      id: uuidv4(),
    });
    reset()
  };

  return (
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={name}
          onChange={handleChange}
          type="text"
          className="form-control mb-2"
          placeholder="Titulo de la terea"
        />
        <textarea
          name="description"
          value={description}
          onChange={handleChange}
          className="form-control mb-2"
          placeholder="Descripcion de la tarea"
        />
        <select
          name="state"
          value={state}
          onChange={handleChange}
          className="form-control mb-2"
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <div className="form-check mb-2">
          <input
            name="priority"
            checked={priority}
            onChange={handleChange}
            type="checkbox"
            className="form-check-input"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Prioritario
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
  );
};

export default Form;
