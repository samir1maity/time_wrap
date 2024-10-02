/** @format */

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

// eslint-disable-next-line react/prop-types
const Todoinput = ({ setTodos }) => {
  const [content, setContent] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (content.trim() === "") return;
    console.log("content", content);
    const temp = { task: content, complete: false, isDelete: false };
    console.log("temp", temp);
    setTodos((p) => [temp, ...p]);
    setContent("");
  };

  return (
    <div>
      <h1 className='text-2xl font-bold text-center mb-6'>My Todo List</h1>
      <form onSubmit={handleAddTodo} className='flex space-x-2 mb-4'>
        <input
          type='text'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder='Add a new todo'
          className='flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type='submit'
          className='p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'>
          <Plus className='w-6 h-6' />
        </motion.button>
      </form>
    </div>
  );
};

export default Todoinput;
