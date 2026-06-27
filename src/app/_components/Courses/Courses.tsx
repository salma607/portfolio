"use client";
import Link from "next/link";
import { useState } from "react";
import { Course } from "./../../../constants/Course";

export default function Courses() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section
      id="courses"
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-yellow-400 bg-clip-text text-transparent mb-4">
            🎓 Our Courses
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Course.map((course) => (
            <div
              key={course.id}
              onMouseEnter={() => setHoveredId(course.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`relative h-96 rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 transform ${
                hoveredId === course.id ? "scale-105 shadow-2xl" : "shadow-lg"
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${course.color}`}
              />

              <div className="relative h-full p-8 flex flex-col justify-between text-white z-10">
                <div>
                  <div className="text-6xl mb-4">{course.icon}</div>
                  <h3 className="text-4xl font-bold mb-2">{course.title}</h3>
                  <p className="text-lg font-semibold opacity-90">
                    {course.ageGroup}
                  </p>
                </div>

                <div>
                  <p className="text-sm mb-4">{course.fullDescription}</p>

                  <Link href={`/courses/${course.id}`}>
                    <button className="w-full py-3 px-6 rounded-full font-bold bg-white text-gray-800">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
