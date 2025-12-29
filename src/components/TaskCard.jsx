import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask } from '../redux/actions/taskActions';

const TaskCard = React.memo(({ task }) => {
  const dispatch = useDispatch();
  return (
    <div className={`p-4 rounded shadow ${task.completed ? 'bg-green-100' : 'bg-white'}`}>
      <h3 className="font-bold">{task.title}</h3>
      <div className="mt-2 flex gap-2">
        <button onClick={() => dispatch(toggleTask(task.id))} 
          className={`px-2 py-1 rounded ${task.completed ? 'bg-yellow-400' : 'bg-green-500 text-white'}`}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => dispatch(deleteTask(task.id))} className="px-2 py-1 rounded bg-red-500 text-white">Delete</button>
      </div>
    </div>
  );
});

export default TaskCard;
