"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-yellow-400 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-[var(--gray-text)] text-lg">
            Have questions? We d love to hear from you!
          </p>
          <div className="w-20 h-1 bg-gradient-to-l from-yellow-400 to-yellow-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">
              Contact Information
            </h3>

            {/* Contact Items */}
            <div className="space-y-6">
              {/* Phone */}
              <a
                href="tel:01017714859"
                className="group flex items-start p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mr-4">📞</div>
                <div>
                  <h4 className="font-bold text-[var-(--gray-text)] group-hover:text-yellow-400 transition-colors">
                    Call Us
                  </h4>
                  <p className="text-[var-(--gray-text)]">+02 01017714859</p>
                  <p className="text-sm text-gray-600">
                    Sun - Thu, 5PM - 10PM{" "}
                    <span>
                      <br></br> Fri - Sat, 9AM - 10PM
                    </span>
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@keinsteinkids.com"
                className="group flex items-start p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mr-4">✉️</div>
                <div>
                  <h4 className="font-bold text-[var(--gray-text)] group-hover:text-yellow-400 transition-colors">
                    Email Us
                  </h4>
                  <p className="text-[var(--gray-text)]">
                    taghrid.sharaf@gmail.com
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="group flex items-start p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-3xl mr-4">📍</div>
                <div>
                  <h4 className="font-bold text-[var(--gray-text)] group-hover:text-yellow-400 transition-colors">
                    Visit Us
                  </h4>
                  <p className="text-[var(--gray-text)]">Egypt,Cairo </p>
                  <p className="text-[var(--gray-text)]">
                    Fifth settlement new cairo
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="font-bold  text-2xl text-[var(--gray-text)] mb-4">
                  Follow Us
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/Keinsteins"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-5 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl  hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
                    title="Facebook"
                  >
                    {/* Facebook Icon (bigger & clearer) */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-7 h-7"
                    >
                      <path d="M22 12a10 10 0 1 0-11.56 9.87v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.88h-2.32v6.99A10 10 0 0 0 22 12" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-[var(--gray-text)] mb-6">
                Send us a Message
              </h3>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✅ Thank you! We ll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                   
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"

                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors h-32 resize-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-l from-yellow-400 to-yellow-600 text-[var(--gray-text)] font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  📨 Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t-2 border-gray-200 text-center">
          <p className="text-gray-500 text-sm mt-2">
            Made with ❤️ for kids who dream big
          </p>
        </div>
      </div>
    </section>
  );
}
