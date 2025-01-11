import React, { useEffect, useState } from "react";
import Card from "./Card";

export default function Cards({ courses, category }) {
  const [filteredCoursesList, setFilteredCoursesList] = useState([]);

  useEffect(() => {
    // Filter the courses based on the selected category whenever category or courses change
    const filteredCourses = (courses, category) => {
      if (category === "Development") {
        return courses.Development || [];
      } else if (category === "Business") {
        return courses.Business || [];
      } else if (category === "Design") {
        return courses.Design || [];
      } else if (category === "Lifestyle") {
        return courses.Lifestyle || [];
      } else {
        return Object.values(courses).flat(); // Return all courses if no specific category
      }
    };

    // Update the filtered courses list
    setFilteredCoursesList(filteredCourses(courses, category));
  }, [courses, category]); // Re-run the effect whenever `courses` or `category` changes

  return (
    <div className="bg-bgDark h-auto w-screen flex flex-wrap justify-center p-4">
      {filteredCoursesList.length > 0 ? (
        filteredCoursesList.map((course) => (
          <Card key={course.id} course={course} />
        ))
      ) : (
        <p className="text-center text-white">No courses available for this category.</p>
      )}
    </div>
  );
}
