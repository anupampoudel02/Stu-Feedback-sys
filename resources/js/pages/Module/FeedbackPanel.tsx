import AppLayout from '@/layouts/app-layout';
import { Link } from '@inertiajs/react';

export default function FeedbackPanel({ modules }) {
    return (
        <AppLayout breadcrumbs={[]}>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-6">Module Feedback Overview</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {modules.map((module) => (
                        <div key={module.id} className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow">
                            <h2 className="text-xl font-semibold mb-2">{module.name}</h2>
                            <p className="text-gray-600 mb-4 line-clamp-2">{module.description}</p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <span className="text-yellow-500 text-lg">★</span>
                                    <span className="font-medium">{module.average_rating}</span>
                                    <span className="text-gray-500">({module.total_reviews} reviews)</span>
                                </div>
                                <Link
                                    href={`/admin/modules/${module.id}`}
                                    className="text-blue-600 hover:text-blue-800 font-medium"
                                >
                                    View Details →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
  );
}
