import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';

export default function Show({ module, averageRating, totalReviews, reviews, auth }) {
  return (
    <AppLayout breadcrumbs={[]}>
      <Head title={`${module.name} - Module Details`} />

      <div className="px-4 sm:px-6 lg:px-8 py-8 flex flex-col w-100">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8 w-100 flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{module.name}</h1>
              <p className="mt-2 text-gray-600">{module.description}</p>

              <div className="mt-4 flex items-center space-x-4">
                <div className="flex items-center">
                  <span className="text-2xl font-bold">{averageRating}</span>
                  <span className="text-yellow-500 text-2xl ml-1">★</span>
                </div>
                <span className="text-gray-600">({totalReviews} reviews)</span>
              </div>
            </div>

            {module.image && (
              <img
                src={`/storage/${module.image}`}
                alt={module.name}
                className="w-32 h-32 object-cover rounded-lg"
              />
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 w-100">

          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b pb-6 last:border-b-0">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, index) => (
                    <span
                      key={index}
                      className={`text-lg ${
                        index < review.rating
                          ? 'text-yellow-500'
                          : 'text-gray-300'
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 mb-2">{review.feedback}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <span>{review.user.name}</span>
                  <span className="mx-2">•</span>
                  <span>{new Date(review.created_at).toLocaleDateString()}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
