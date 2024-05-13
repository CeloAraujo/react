/* eslint-disable no-case-declarations */
import { useReducer, useState } from "react";

const HookUseReducer = () => {
  // 1- começando com o useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.random(state);
  });

  //   2- avançando useReducer
  const initialTasks = [
    { id: 1, text: "Faça uma sessão de estudos" },
    { id: 2, text: "Tenha um certo tempo livre" },
    { id: 3, text: "Pratique exercícios" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };
        setTaskText("");
        return [...state, newTask];

      case "DELETE":
        return state.filter((task) => task.id !== action.id);

      default:
        return state;
    }
  };

  const [taskText, setTaskText] = useState("");
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({ type: "ADD" });
  };

  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id });
  };

  return (
    <div>
      <h2>useReducer</h2>
      <p>Número: {number}</p>
      <button onClick={dispatch}>Altere para número aleatório</button>
      <h3>Tarefas</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HookUseReducer;
