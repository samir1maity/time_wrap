/** @format */

import Todoitem from "./Todoitem";
import { AnimatePresence } from "framer-motion";

// eslint-disable-next-line react/prop-types
const TodoList = ({ todos }) => {
  return (
    <div className='max-w-md mx-auto mt-10 space-y-4 p-4 bg-gray-100 rounded-lg shadow-lg'>
      <AnimatePresence>
        {/* eslint-disable-next-line react/prop-types */}
        {todos.map((todo, index) => (
          <Todoitem
            key={index}
            todo={todo}
            // onDelete={() => deleteTodo(index)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default TodoList;
