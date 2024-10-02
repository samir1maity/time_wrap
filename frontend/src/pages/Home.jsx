/** @format */

import { useState } from "react";
import Todoinput from "../components/Main/Todoinput";
import TodoList from "../components/Main/TodoList";

const Home = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className='flex flex-col'>
      <Todoinput setTodos={setTodos} />
      <TodoList todos={todos} />
    </div>
  );
};

export default Home;
