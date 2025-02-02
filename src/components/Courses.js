import React from "react";

const courses = [
  { name: "Course 1", price: "500", description: "Learn basics of React" },
  {
    name: "Course 2",
    price: "1000",
    description: "Advanced JavaScript concepts",
  },
];

const Courses = () => {
  return (
    <>
      <section className=" w-80 mb-7 m-4 shadow-xl rounded-lg ">
        {/* <h2 className="font-bold text-center text-2xl mb-4">Our Courses</h2> */}
        <div className="space-y-6">
          {courses.map((course, index) => (
            <div key={index} className="p-4  shadow-md">
              <h3 className="font-medium text-xl text-center mt-1 p-1 ">
                {course.name}
              </h3>
              <p className=" text-center font-semibold text-lg p-1 mb-1">
                {course.description}
              </p>
              <p className="font-serif text-center p-2 mb-4 ">
                Price: ${course.price}
              </p>
              <div className="flex justify-center">
                <a href="/registration" className="bg-blue-500 text-white p-2 rounded-xl hover:bg-blue-900 transition duration-300">
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Courses;
