"use client";

export default function Hero() {
  const scrollToCourses = () => {
    const element = document.getElementById("courses");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient from-purple-100 via-pink-100 to-orange-100 pt-20 flex items-center justify-center px-4"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Floating decorative elements */}
        <div className="absolute top-32 left-10 w-20 h-20 bg-purple-300 rounded-full opacity-20 animate-bounce"></div>
        <div className="absolute bottom-32 right-10 w-32 h-32 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-orange-300 rounded-full opacity-20"></div>

        {/* Main Content */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Welcome to Keinstein
            </span>
            <br />
            <span className="text-3xl md:text-5xl text-gray-800">
              Kids Academy
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            🌟 Where creativity meets innovation! Learn coding, robotics,
            design, and electronics in a fun, engaging environment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={scrollToCourses}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 text-lg"
            >
              🎓 Explore Courses
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 border-2 border-purple-600 text-purple-600 font-bold rounded-full hover:bg-purple-50 transition-all duration-300 text-lg"
            >
              📞 Contact Us
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {[
              {
                icon: "🎨",
                title: "Creative Learning",
                desc: "Express yourself through art and technology",
              },
              {
                icon: "👥",
                title: "Expert Mentors",
                desc: "Learn from industry professionals",
              },
              {
                icon: "🚀",
                title: "Future Ready",
                desc: "Build skills for tomorrow's world",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/80 backdrop-blur rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
