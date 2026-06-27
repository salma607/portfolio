"use client";

import { useState } from "react";
import { Competitionconstant } from "@/constants/Competitionconstant";

export default function Competitions() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="competitions" className="mt-10 scroll-mt-24">
      <div className="px-4 md:px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h3 className="text-4xl font-bold mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Our Competitions & International Achievements
            </span>
          </h3>

          <p className="text-[var(--gray-text)] text-lg max-w-4xl mx-auto">
            Keinstein Academy proudly represented Egypt in numerous national and
            international robotics and innovation competitions, reflecting our
            commitment to excellence in STEM education, creativity,
            engineering, and programming.
          </p>
        </div>

        {/* Competition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {Competitionconstant.map((competition) => (
            <div
              key={competition.id}
              onMouseEnter={() => setHoveredId(competition.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={`bg-white border border-yellow-100 rounded-2xl p-6 transition-all duration-300 ${
                hoveredId === competition.id
                  ? "scale-105 shadow-2xl"
                  : "shadow-md hover:shadow-xl"
              }`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-5">
                <span className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full font-bold">
                  {competition.season}
                </span>

                <span className="text-3xl">🏆</span>
              </div>

              {/* Card Title */}
              <h4 className="text-2xl font-bold text-gray-800 mb-5">
                International Competitions
              </h4>

              {/* Events */}
              <ul className="space-y-3">
                {(expandedId === competition.id
                  ? competition.events
                  : competition.events.slice(0, 2)
                ).map((event, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span className="text-yellow-500 mt-1">✔</span>
                    <span>{event}</span>
                  </li>
                ))}
              </ul>

              {/* Read More / Read Less */}
              {competition.events.length > 2 && (
                <button
                  onClick={() =>
                    setExpandedId(
                      expandedId === competition.id
                        ? null
                        : competition.id
                    )
                  }
                  className="mt-5 font-semibold text-yellow-400 hover:text-blue-500 transition"
                >
                  {expandedId === competition.id
                    ? "Read Less "
                    : "Read More "}
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}