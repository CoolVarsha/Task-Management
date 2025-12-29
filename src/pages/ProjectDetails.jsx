import React, { useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import TaskCard from "../components/TaskCard";
import { addTask } from "../redux/actions/taskActions";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const project = useSelector((state) =>
    state.projects.projects.find((p) => p.id === Number(id))
  );

  const tasks = useSelector((state) =>
    state.tasks.tasks.filter((t) => t.projectId === Number(id))
  );

  const [title, setTitle] = useState("");

  const handleAddTask = useCallback(() => {
    if (!title.trim()) return;

    dispatch(
      addTask({
        id: Date.now(),
        projectId: Number(id),
        title,
        completed: false,
      })
    );

    setTitle("");
  }, [title, id, dispatch]);

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow text-center">
          <p className="text-red-500 mb-4">Project not found</p>
          <button
            onClick={() => navigate("/dashboard")}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        {/* 🔙 Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => navigate("/dashboard")}
            className="text-blue-600 font-medium hover:underline"
          >
            ← Back to Dashboard
          </button>

          <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
            {tasks.length} Tasks
          </span>
        </div>

        {/* 🏷 Project Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          {project.title}
        </h1>

        {/* ➕ Add Task Card */}
        <div className="bg-white p-6 rounded-xl shadow mb-8">
          <h3 className="text-lg font-semibold mb-4">Add New Task</h3>

          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter task name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleAddTask}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add
            </button>
          </div>
        </div>

        {/* 📋 Task List */}
        {tasks.length === 0 ? (
          <div className="bg-white p-10 rounded-xl shadow text-center text-gray-500">
            No tasks added yet 🚀
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tasks.map((task) => (
              <TaskCard key={task.id} task={task} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
