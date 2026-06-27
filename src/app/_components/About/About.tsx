"use client";

import { useState } from "react";
import Image from "next/image";
import logo from "../../../assets/logo.png";
export default function About() {
  const [showStory, setShowStory] = useState(false);
  const [showMission, setShowMission] = useState(false);

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-l from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="relative">
            <div className="p-8 h-120 flex items-center justify-center">
              <Image
                src={logo}
                alt="Keinstein Kids Academy Logo"
                width={600}
                height={600}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side */}
          <div>
            {/* Story */}
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h3>

            <p
              className={`text-gray-700 leading-relaxed mb-3 transition-all duration-300 ${
                !showStory && "line-clamp-4"
              }`}
            >
              Founded in 2018, My story began when I got pregnant. I kept
              dreaming of meeting my little one, picturing how I would watch him
              grow and flourish. I kept searching every day on how to raise him
              and how to be the perfect mom. I wanted to raise a gifted genius
              with an influential, confident, independent, successful, and
              ambitious personality. I was seeking answers for many questions:
              How to prevent him from watching too much TV? How to avoid
              smartphone addiction? How to control tantrums? How to become not
              only his mom but also his best friend and role model? I wondered
              if spending all my time with him would make him dependent, or if
              focusing too much on work would distance us. So I decided to
              create the perfect balance between enjoying my career and spending
              quality educational time with my son. I wanted to raise a
              brilliant human being capable of changing the world through
              creativity, inventions, and scientific achievements. That dream
              became Keinstein Academy ❤️
            </p>

            <button
              onClick={() => setShowStory(!showStory)}
              className="mb-8 font-semibold text-yellow-400 hover:text-blue-500 transition"
            >
              {showStory ? "Show Less" : "Read More"}
            </button>

            {/* Mission */}
            <h3 className="text-3xl font-bold text-[var(--gray-text)] mb-4">
              Our Mission
            </h3>

            <p
              className={`text-[var(--gray-text)] leading-relaxed mb-3 transition-all duration-300 ${
                !showMission && "line-clamp-4"
              }`}
            >
              At Keinstein Academy, we believe innovation begins with young
              minds. With more than 8 years of expertise in robotics and coding,
              our mission is to empower the next generation through hands-on
              learning, creativity, and advanced technology education. We are
              dedicated to developing future innovators by providing
              high-quality training in: Advanced Robotics Programming Artificial
              Intelligence & Machine Learning Competitive Robotics Our goal is
              to inspire students to think critically, solve real-world
              problems, and confidently compete on both local and international
              stages.
            </p>

            <button
              onClick={() => setShowMission(!showMission)}
              className="mb-8 font-semibold text-yellow-400 hover:text-blue-500 transition"
            >
              {showMission ? "Show Less" : "Read More"}
            </button>

            {/* Why Choose Us */}
            <h3 className="text-3xl font-bold text-[var(--gray-text)] mb-4">
              Why Choose Us?
            </h3>

            <ul className="space-y-3">
              {[
                "🎯 Personalized learning paths for each student",
                "👨‍🏫 Experienced and passionate instructors",
                "🏆 Industry-recognized certifications",
                "💻 State-of-the-art learning facilities",
                "🌍 Supportive and inclusive community",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-center text-[var(--gray-text)] font-medium"
                >
                  <span className="mr-3 text-xl">{item.substring(0, 2)}</span>

                  {item.substring(2)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10 ">
          {[
            { icon: "👨‍🎓", number: "3,500+", label: "Students" },
            { icon: "👨‍🏫", number: "50+", label: "Instructors" },
            { icon: "🏆", number: "100%", label: "Satisfaction" },
            { icon: "🌍", number: "5+", label: "Years" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>

              <p className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {stat.number}
              </p>

              <p className="text-gray-600 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
