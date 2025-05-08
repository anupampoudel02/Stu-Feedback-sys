import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from "@/layouts/app-layout";
import { Button } from "@/components/ui/button";
import InputError from "@/components/input-error";
import { toast } from "sonner";

export default function Edit({ auth, module }) {
    const [imagePreview, setImagePreview] = useState(
        module.image ? `/storage/${module.image}` : null
    );

    const { data, setData, put, processing, errors } = useForm({
        name: module.name,
        description: module.description || '',
        tutor: module.tutor || '',
        image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        put(route('admin.modules.update', module.id), {
            preserveScroll: true,
            onSuccess: () => {
                toast.success("Updated module")
                // Optional: Add success notification
            },
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setData('image', file);
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    return (
        <AppLayout breadcrumbs={[]}>
            <Head title="Edit Module" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold mb-6">Edit Module</h2>
                            
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                        Module Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                    <InputError message={errors.name} className="mt-2" />
                                </div>

                                <div>
                                    <label htmlFor="tutor" className="block text-sm font-medium text-gray-700">
                                        Tutor Name
                                    </label>
                                    <input
                                        type="text"
                                        id="tutor"
                                        value={data.tutor}
                                        onChange={(e) => setData('tutor', e.target.value)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                    <InputError message={errors.tutor} className="mt-2" />
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        value={data.description}
                                        onChange={(e) => setData('description', e.target.value)}
                                        rows={4}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                    />
                                    <InputError message={errors.description} className="mt-2" />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Module Image
                                    </label>
                                    <input
                                        type="file"
                                        onChange={handleImageChange}
                                        className="mt-1 block w-full"
                                        accept="image/*"
                                    />
                                    <InputError message={errors.image} className="mt-2" />
                                    
                                    {imagePreview && (
                                        <div className="mt-2">
                                            <img
                                                src={imagePreview}
                                                alt="Preview"
                                                className="max-w-xs rounded-lg shadow-lg"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="flex items-center justify-end">
                                    <Button
                                        type="submit"
                                        disabled={processing}
                                        className="ml-4"
                                    >
                                        {processing ? 'Updating...' : 'Update Module'}
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}