import React from "react";
import ServiceCard from "../components/ServiceSection";

const Services = () => {
  const courses = [
    { id: 1, title: "Web Development", price: "$100" },
    { id: 2, title: "React.js Mastery", price: "$150" },
    { id: 3, title: "JavaScript Essentials", price: "$80" },
  ];

  return (
    <div className="py-12 px-6">
        <h2 className="font-bold text-center text-2xl mb-4">Our Courses</h2>

      <div className="flex flex-wrap  justify-evenly ">
        {courses.map((course) => (
          <ServiceCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Services;
