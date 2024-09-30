  "use client";

import { useState } from "react";
import { FaStar, FaSearch } from "react-icons/fa";

type Review = {
  id: number;
  author: string;
  location: string;
  rating: number;
  content: string;
  date: string;
};

export function ReviewsComponent() {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      author: "John Doe",
      location: "Paris, France",
      rating: 5,
      content: "Amazing experience! The Eiffel Tower was breathtaking, and the local cuisine to die for.",
      date: "2023-06-15",
    },
    {
      id: 2,
      author: "Jane Smith",
      location: "Tokyo, Japan",
      rating: 4,
      content: "Loved the blend of traditional and modern culture. The public transportation was incredibly efficient.",
      date: "2023-05-22",
    },
    {
      id: 3,
      author: "Mike Johnson",
      location: "New York City, USA",
      rating: 4,
      content: "The city that never sleeps! Broadway shows were fantastic, but be prepared for the crowds.",
      date: "2023-04-10",
    },
    {
      id: 4,
      author: "Emily Brown",
      location: "Rome, Italy",
      rating: 5,
      content: "A walk through history! The Colosseum and Vatican City were awe-inspiring. Don't miss the gelato!",
      date: "2023-03-05",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const filteredReviews = reviews.filter(
    (review) =>
      review.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      review.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#edf6f9] text-[#0d3b66]">
      <header className="bg-[#0d3b66] text-[#edf6f9] p-4">
        <h1 className="text-2xl font-bold">Reviews and Recommendations</h1>
      </header>

      <main className="container mx-auto p-4 max-w-4xl">
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search reviews..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-8 border border-slate-200 border-[#83c5be] rounded-md focus:outline-none focus:ring-2 focus:ring-[#006d77] dark:border-slate-800"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-xl font-bold">{review.location}</h2>
                  <p className="text-sm text-gray-600">by {review.author}</p>
                </div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className={index < review.rating ? "text-[#83c5be]" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
              <p className="mb-4">{review.content}</p>
              <p className="text-sm text-gray-600">Reviewed on {review.date}</p>
            </div>
          ))}
        </div>

        {filteredReviews.length === 0 && (
          <p className="text-center text-gray-600 mt-8">No reviews found matching your search.</p>
        )}

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Write a Review</h2>
          <form className="bg-white rounded-lg shadow-lg p-6">
            <div className="mb-4">
              <label htmlFor="location" className="block mb-2 font-medium">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="w-full p-2 border border-slate-200 border-[#83c5be] rounded-md focus:outline-none focus:ring-2 focus:ring-[#006d77] dark:border-slate-800"
                placeholder="e.g., Paris, France"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Rating</label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    className="text-2xl text-[#83c5be] focus:outline-none"
                  >
                    <FaStar />
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="review" className="block mb-2 font-medium">
                Your Review
              </label>
              <textarea
                id="review"
                rows={4}
                className="w-full p-2 border border-slate-200 border-[#83c5be] rounded-md focus:outline-none focus:ring-2 focus:ring-[#006d77] dark:border-slate-800"
                placeholder="Share your experience..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#006d77] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-300"
            >
              Submit Review
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}