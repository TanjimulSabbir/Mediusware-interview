import React from "react";

export default function AuthorInfo() {
  return (
    <div className="relative max-w-md w-full bg-white rounded-2xl shadow-lg overflow-hidden">
      <img
        src="https://source.unsplash.com/600x400/?technology,phone"
        alt="Cover"
        className="w-full h-48 object-cover"
      />

      <div className="absolute top-4 left-4 bg-white rounded-xl shadow-md flex items-center p-3 space-x-3">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Author"
          className="w-9 h-9 rounded-full"
        />
        <div className="text-xs leading-tight">
          <p className="font-semibold text-gray-900">Ronald Richards</p>
          <p className="text-gray-500">20 Jan 2022</p>
        </div>
      </div>

      <div className="absolute top-4 right-4 flex space-x-2">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
          UX/UI
        </span>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
          Design
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 leading-snug">
          UX Lessons That We Can Learn from “Threads”
        </h3>
        <p className="text-sm text-gray-600 mt-2">
          UX Lessons That We Can Learn from “Threads” Often found on welcome
          screens, decorative animations are a fantastic way ...
        </p>
      </div>
    </div>
  );
}
