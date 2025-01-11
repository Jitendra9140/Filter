import React from "react";

export default function Card({ course }) {
  return (
    <div className="w-[300px] h-[400px] flex flex-col bg-white shadow-md rounded m-4 p-4">
      <img
        className="w-full h-[150px] object-cover rounded-t-md"
        src={course.image.url}
        alt={course.image.alt}
      />
      <h2 className="text-lg font-bold mt-2">{course.title}</h2>
      <p className="text-sm text-gray-700 mt-1">{course.description}</p>
    </div>
  );
}

