import React from 'react';
import { Link } from 'react-router-dom';

const ProjectCard = React.memo(({ project }) => (
  <Link to={`/project/${project.id}`} className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 border border-gray-200">
    <h2 className="text-lg font-semibold text-gray-800 mb-1">{project.title}</h2>
    <p className="text-gray-500 text-sm mb-4">Click to view tasks</p>
  </Link>
));

export default ProjectCard;
