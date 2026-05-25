"use client";
import Image from "next/image";
import logo from "../../../assets/logo.png";
export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-yellow-400 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-l from-yellow-400 to-yellow-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Illustration */}
          <div className="relative">
            <div className=" p-8 h-120 flex items-center justify-center">
              <div className="text-center">
                <div className=" mb-4">
                  <Image
        src={logo}
        alt="Keinstein Kids Academy Logo"
        width={600}
        height={600}
      />
                </div>
                
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Founded in 2020, Keinstein Kids Academy was born from a simple
              vision: to make technology and creativity accessible to every
              child. We believe that every kid has the potential to be an
              innovator, creator, and problem-solver.
            </p>

            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              We are committed to inspiring the next generation of engineers,
              designers, and programmers through hands-on, project-based
              learning. Our courses combine fun with education, ensuring every
              student enjoys their learning journey.
            </p>

            <h3 className="text-3xl font-bold text-gray-800 mb-4">
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
                  className="flex items-center text-gray-700 font-medium"
                >
                  <span className="mr-3 text-xl">{item.substring(0, 2)}</span>
                  {item.substring(2)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
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
