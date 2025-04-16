import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import { Link, useNavigate } from "react-router-dom";
import { LuClock4 } from "react-icons/lu";

export default function BlogCard({ blog }) {
  const { id, title, image, read_time_minute, created_at, author, categories } =
    blog;

  const blogDate = new Date(created_at).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/blog/${id}`);
  };
  return (
    <div
      className="relative h-[450px] max-w-md rounded-3xl overflow-hidden shadow-md bg-white transition duration-500 hover:shadow-xl group"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Image Section */}
      <div className="relative">
        {/* Read Time Badge with custom corner */}
        <div className="absolute top-0 right-0 bg-sky-100 flex items-center space-x-1 text-blue-500 font-semibold px-5 py-2 rounded-bl-xl shadow-md text-sm">
          <LuClock4 /> <span>{read_time_minute} min read</span>
        </div>

        {/* Center Arrow Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white/70 backdrop-blur-md p-3 rounded-full shadow-sm">
            <BsArrowUpRight className="text-blue-600 w-5 h-5" />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 flex justify-center mt-24 opacity-0 transition-all duration-500 ease-in group-hover:opacity-100">
        <Link to={`/blog/${id}`}>
          <GoArrowUpRight className="w-20 h-20 text-blue-500 bg-white p-3 rounded-full" />
        </Link>
      </div>
      {/* Bottom Content */}
      <div className="absolute bottom-0 bg-white shadow-2xl transition-all duration-500">
        <div className="relative">
          <div className="p-5 space-y-4">
            {/* Author Info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={author.image}
                  alt={author.full_name}
                  className="w-9 h-9 rounded-full border object-cover"
                />
                <div>
                  <div className="text-sm font-semibold text-gray-800">
                    {author.full_name}
                  </div>
                  <div className="text-xs text-gray-500">{blogDate}</div>
                </div>
              </div>
              {/* Tags */}
              <div className="flex items-center justify-end gap-2 flex-wrap">
                {categories?.map((cat, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-blue-100 text-blue-600 rounded-lg font-medium"
                  >
                    {cat.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Blog Title */}
            <h2
              className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition duration-200 leading-snug cursor-pointer"
              onClick={handleNavigate}
            >
              {title}
            </h2>

            {/* Description (Space hidden initially, becomes visible on hover) */}
            <p
              className="max-h-0 overflow-hidden opacity-0 group-hover:max-h-[200px] group-hover:opacity-100 transition-all duration-500 ease-in"
              style={{ transitionProperty: "max-height, opacity" }}
            >
              Unleashing the Power of Blockchain Technology: Scalable Software
              Architecture for Modern Development. Unleashing the Power of
              Blockchain Technology:
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
