// resources/js/Pages/Modules/Index.tsx

import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import { router } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Trash2, Eye, Pencil } from 'lucide-react';

interface Module {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface Props {
  modules: {
    data: Module[]
  };
}

const ModuleIndex: React.FC<Props> = ({ modules }) => {
  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this module?')) {
      Inertia.delete(`/admin/modules/${id}`);
    }
  };

  return (
    <AppLayout>
      <div className="p-6 space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Modules</h1>
          <Button onClick={() => router.visit('/admin/modules/create')}>Create New Module</Button>
        </div>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {modules.data.map((module) => (
                  <TableRow key={module.id}>
                    <TableCell className="font-medium">{module.name}</TableCell>
                    <TableCell>
                      <img style={{height: '100px'}} src={`${module.image}`} alt="" />
                    </TableCell>
                    <TableCell width={100}>
                      <span className='truncate text-ellipsis w-40 flex'>

                      {module.description}
                      </span>
                      </TableCell>
                    <TableCell className="text-right space-x-2">
                      <Button
                        variant="default"
                        size="sm"
                        onClick={() => router.visit(`/admin/modules/${module.id}/edit`)}
                      >
                        <Pencil className="h-4 w-4 mr-1" /> Edit
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => router.visit(`/admin/modules/${module.id}`)}
                      >
                        <Eye className="h-4 w-4 mr-1" /> View
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => handleDelete(module.id)}
                      >
                        <Trash2 className="h-4 w-4 mr-1" /> Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
};

export default ModuleIndex;
