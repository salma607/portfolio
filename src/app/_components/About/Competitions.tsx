export default function Competitions() {
  return (
    <div className="mt-10 ">
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold mb-4">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Our Competitions & International Achievements
          </span>
        </h3>

        <p className="text-[var(--gray-text)] text-lg max-w-3xl mx-auto">
          Keinstein Academy proudly represented Egypt in multiple international
          robotics and innovation competitions, showcasing creativity,
          engineering excellence, and advanced programming skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            year: "2023",
            title: "FLL Challenge",
            country: "Morocco 🇲🇦",
          },

          {
            year: "2024,2025&2026",
            title: "Minoan Robosport Competition",
            country: "Greece 🇬🇷",
          },

          {
            year: "2025",
            title: "Innovation Global Competition",
            country: "Turkey 🇹🇷",
          },

          {
            year: "2025",
            title: "Robotourney International Championship ",
            country: "South Korea 🇰🇷",
          },

          {
            year: "2026",
            title: "Robotex International Championship ",
            country: "Estonia 🇪🇪",
          },
        ].map((competition, idx) => (
          <div
            key={idx}
            className="bg-white border border-yellow-100 rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="px-4 py-1 rounded-full bg-yellow-100 text-yellow-700 font-semibold text-sm">
                {competition.year}
              </span>

              <span className="text-3xl">🏆</span>
            </div>

            <h4 className="text-2xl font-bold text-gray-800 mb-2">
              {competition.title}
            </h4>

            <p className="text-[var(--gray-text)] text-lg font-medium">
              {competition.country}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
