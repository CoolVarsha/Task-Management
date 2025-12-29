import React, { useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProjectCard from '../components/ProjectCard';
import { addProject } from '../redux/actions/projectActions';

const Dashboard = () => {
  const projects = useSelector(state => state.projects.projects);
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const sortedProjects = useMemo(() => [...projects].sort((a,b) => a.title.localeCompare(b.title)), [projects]);

  const handleAddProject = () => {
    if(!title) return;
    dispatch(addProject({ id: Date.now(), title }));
    setTitle('');
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="flex gap-2 mb-4">
        <input type="text" placeholder="New Project" value={title} onChange={e=>setTitle(e.target.value)}
          className="border p-2 rounded w-full"/>
        <button onClick={handleAddProject} className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg shadow transition">Add</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sortedProjects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>
    </div>
  );
};

export default Dashboard;
