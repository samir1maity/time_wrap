import React, { useState } from "react";

const Todoinput = () => {
  const [task, setTask] = useState("");

  console.log('task', task)

  return (
    <div>
      <input className="text-gray-700" placeholder="write down your tasks" value={task} onChange={(e) => setTask(e.target.value)} />
      <button>Add Task</button>
    </div>
  );
};

export default Todoinput;
