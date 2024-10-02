/** @format */

import { motion } from "framer-motion";
import { CheckCircle, Circle, Trash2 } from "lucide-react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Todoitem = ({ todo }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    // eslint-disable-next-line react/prop-types
    todo.complete = true;
  };

  console.log("todo ->", todo);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className='flex items-center justify-between space-x-3 p-3 bg-white rounded-lg shadow'>
      <div className='flex items-center space-x-3'>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleCheckboxChange}>
          {isChecked ? (
            <CheckCircle className='w-6 h-6 text-green-500' />
          ) : (
            <Circle className='w-6 h-6 text-gray-400' />
          )}
        </motion.button>
        <motion.span
          animate={{ color: isChecked ? "#9CA3AF" : "#374151" }}
          className={`text-gray-700 ${isChecked ? "line-through" : ""}`}>
          {/* eslint-disable-next-line react/prop-types */}
          {todo.task}
        </motion.span>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className='text-red-500 hover:text-red-700'>
        <Trash2 className='w-5 h-5' />
      </motion.button>
    </motion.div>
  );
};

export default Todoitem;
