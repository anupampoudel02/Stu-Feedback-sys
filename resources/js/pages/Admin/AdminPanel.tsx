import { Link } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
    {
        title: 'Admin Panel',
        href: '/admin',
    },
];

interface AdminPanelProps {
    totalFeedbackCount: number;
    teacherReviewsCount: number;
    moduleReviewsCount: number;
    totalStudents: number;
}

export default function AdminPanel({
    totalFeedbackCount,
    teacherReviewsCount,
    moduleReviewsCount,
    totalStudents,
}: AdminPanelProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin Panel" />

            <div className="flex flex-col gap-8 p-6">
                {/* Admin Panel Header */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-semibold text-gray-800">Student Feedback Admin Panel</h2>
                    <div>
                        <Link
                            href="/admin/modules/create"
                            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                        >
                            Add New Module
                        </Link>
                    </div>
                </div>

                {/* Overview Stat Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Total Feedbacks Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
                        <h3 className="text-lg font-medium text-gray-700">Total Feedbacks</h3>
                        <p className="mt-2 text-4xl font-bold text-blue-600">{totalFeedbackCount}</p>
                        <Link
                            href="/admin/feedbacks"
                            className="mt-4 inline-block text-blue-600 hover:underline"
                        >
                            View Feedbacks
                        </Link>
                    </div>

                    {/* Total Teacher Reviews Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
                        <h3 className="text-lg font-medium text-gray-700">Total Teacher Reviews</h3>
                        <p className="mt-2 text-4xl font-bold text-green-600">{teacherReviewsCount}</p>
                        <Link
                            href="/admin/teacher-reviews"
                            className="mt-4 inline-block text-blue-600 hover:underline"
                        >
                            View Reviews
                        </Link>
                    </div>

                    {/* Total Module Reviews Card */}
                    <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 hover:shadow-xl transition duration-300">
                        <h3 className="text-lg font-medium text-gray-700">Total Module Reviews</h3>
                        <p className="mt-2 text-4xl font-bold text-orange-600">{moduleReviewsCount}</p>
                        <Link
                            href="/admin/module-reviews"
                            className="mt-4 inline-block text-blue-600 hover:underline"
                        >
                            View Reviews
                        </Link>
                    </div>
                </div>

                {/* Actions Needed */}
                <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 mt-8">
                    <h3 className="text-lg font-medium text-gray-700">Actions Needed</h3>
                    <div className="flex items-center mt-4">
                        <div className="w-1/2">
                            <p className="text-xl font-bold">74%</p>
                            <p className="text-gray-600">Actions are required to improve feedback quality</p>
                        </div>
                        <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                            Download Report
                        </button>
                    </div>
                </div>

                {/* Total Students */}
                <div className="bg-white p-6 shadow-lg rounded-lg border border-gray-200 mt-8">
                    <h3 className="text-lg font-medium text-gray-700">Total Students</h3>
                    <p className="mt-2 text-4xl font-bold text-purple-600">{totalStudents}</p>
                    <Link
                        href="/admin/students"
                        className="mt-4 inline-block text-blue-600 hover:underline"
                    >
                        View Students
                    </Link>
                </div>

                {/* Placeholder Section */}
                <div className="border-sidebar-border/70 dark:border-sidebar-border relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min mt-8">
                    <PlaceholderPattern className="absolute inset-0 size-full stroke-neutral-900/20 dark:stroke-neutral-100/20" />
                </div>
            </div>
        </AppLayout>
    );
}
