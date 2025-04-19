// resources/js/Pages/Modules/Index.tsx

import React from 'react';
import { Inertia } from '@inertiajs/inertia';

interface Module {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface Props {
  modules: Module[];
}

const ModuleIndex: React.FC<Props> = ({ modules }) => {
  const handleDelete = (id: number) => {
    // You can add confirmation here before deletion
    Inertia.delete(`/modules/${id}`);
  };

  return (
    <div>
      <h1>Modules</h1>
      <a href="/modules/create">Create New Module</a>
      <ul>
        {modules.map((module) => (
          <li key={module.id}>
            <h2>{module.name}</h2>
            <p>{module.description}</p>
            <a href={`/modules/${module.id}`}>View</a>
            <button onClick={() => handleDelete(module.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ModuleIndex;
