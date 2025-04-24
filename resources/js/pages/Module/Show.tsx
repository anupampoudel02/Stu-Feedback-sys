// resources/js/Pages/Modules/Show.tsx

import { router, usePage } from '@inertiajs/react';
import React from 'react';

interface Module {
  id: number;
  name: string;
  description: string;
}

interface Props {
  module: Module;
}

const ModuleShow: React.FC<Props> = ({ module }) => {
  const handleEdit = () => {
    router.visit(`/modules/${module.id}/edit`);
  };

  return (
    <div>
      <h1>{module.name}</h1>
      <p>{module.description}</p>
      <button onClick={handleEdit}>Edit Module</button>
    </div>
  );
};

export default ModuleShow;
