import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function welcome() {
    const { auth, feedbackStats, studentStats } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Admin Dashboard">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-center justify-end gap-4">
                        {auth.user ? (
                            <>
                                <span className="text-lg font-semibold">
                                    Welcome back, {auth.user.name}!
                                </span>
                                <Link
                                    href={route('admin.dashboard')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Admin Dashboard
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    href={route('login')}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Log in
                                </Link>
                                <Link
                                    href={route('register')}
                                    className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                >
                                    Register
                                </Link>
                            </>
                        )}
                    </nav>
                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                        <div className="flex-1 rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-[13px] leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            <h1 className="mb-1 font-medium">Admin Dashboard Overview</h1>
                            <p className="mb-2 text-[#706f6c] dark:text-[#A1A09A]">
                                Welcome to the admin panel. Here, you can manage the feedback system and reviews for your platform.
                                <br />
                                Start by reviewing the feedbacks, teacher reviews, and actions needed.
                            </p>
                            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-4 lg:mb-6">
                                <div className="p-4 bg-[#f0f4f8] rounded-lg shadow-sm dark:bg-[#161615] dark:text-[#EDEDEC]">
                                    <h2 className="text-sm font-medium text-[#191400]">Total Feedbacks</h2>
                                    <p className="text-xl font-semibold">{feedbackStats.total}</p>
                                    <Link href={route('admin.feedbacks')} className="text-sm text-[#0078D4] hover:underline">View Feedbacks</Link>
                                </div>
                                <div className="p-4 bg-[#f0f4f8] rounded-lg shadow-sm dark:bg-[#161615] dark:text-[#EDEDEC]">
                                    <h2 className="text-sm font-medium text-[#191400]">Total Teacher Reviews</h2>
                                    <p className="text-xl font-semibold">{feedbackStats.teacherReviews}</p>
                                    <Link href={route('admin.reviews')} className="text-sm text-[#0078D4] hover:underline">View Reviews</Link>
                                </div>
                                <div className="p-4 bg-[#f0f4f8] rounded-lg shadow-sm dark:bg-[#161615] dark:text-[#EDEDEC]">
                                    <h2 className="text-sm font-medium text-[#191400]">Actions Needed</h2>
                                    <p className="text-xl font-semibold">{feedbackStats.actionsNeeded}%</p>
                                    <p className="text-sm">Actions are required to improve feedback quality.</p>
                                    <Link href={route('admin.report')} className="text-sm text-[#0078D4] hover:underline">Download Report</Link>
                                </div>
                            </div>
                            <div className="p-4 bg-[#f0f4f8] rounded-lg shadow-sm dark:bg-[#161615] dark:text-[#EDEDEC]">
                                <h2 className="text-sm font-medium text-[#191400]">Total Students</h2>
                                <p className="text-xl font-semibold">{studentStats.total}</p>
                                <Link href={route('admin.students')} className="text-sm text-[#0078D4] hover:underline">View Students</Link>
                            </div>
                        </div>
                        <div className="relative -mb-px aspect-[335/376] w-full shrink-0 overflow-hidden rounded-t-lg bg-[#fff2f2] lg:mb-0 lg:-ml-px lg:aspect-auto lg:w-[438px] lg:rounded-t-none lg:rounded-r-lg dark:bg-[#1D0002]">
                            <svg
                                className="w-full max-w-none translate-y-0 text-[#F53003] opacity-100 transition-all duration-750 dark:text-[#F61500] starting:translate-y-6 starting:opacity-0"
                                viewBox="0 0 438 104"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.2036 -3H0V102.197H49.5189V86.7187H17.2036V-3Z" fill="currentColor" />
                            </svg>
                            <div className="absolute inset-0 rounded-t-lg shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:rounded-t-none lg:rounded-r-lg dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]" />
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}
