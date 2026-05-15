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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-700 text-lg">
            Have questions? We'd love to hear from you!
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full mt-4"></div>
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
                href="tel:+1234567890"
                className="group flex items-start p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mr-4">📞</div>
                <div>
                  <h4 className="font-bold text-gray-800 group-hover:text-purple-600 transition-colors">
                    Call Us
                  </h4>
                  <p className="text-gray-700">+1 (234) 567-890</p>
                  <p className="text-sm text-gray-600">Mon - Fri, 9AM - 6PM</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:info@keinsteinkids.com"
                className="group flex items-start p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl mr-4">✉️</div>
                <div>
                  <h4 className="font-bold text-gray-800 group-hover:text-pink-600 transition-colors">
                    Email Us
                  </h4>
                  <p className="text-gray-700">info@keinsteinkids.com</p>
                  <p className="text-sm text-gray-600">
                    We'll respond within 24 hours
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="group flex items-start p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="text-3xl mr-4">📍</div>
                <div>
                  <h4 className="font-bold text-gray-800">Visit Us</h4>
                  <p className="text-gray-700">123 Innovation Street</p>
                  <p className="text-gray-700">Tech City, TC 12345</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="font-bold text-gray-800 mb-4">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    {
                      icon: "f",
                      label: "Facebook",
                      color: "from-blue-400 to-blue-600",
                    },
                    {
                      icon: "📷",
                      label: "Instagram",
                      color: "from-pink-400 to-red-600",
                    },
                    {
                      icon: "🐦",
                      label: "Twitter",
                      color: "from-blue-300 to-blue-500",
                    },
                    {
                      icon: "▶️",
                      label: "YouTube",
                      color: "from-red-400 to-red-600",
                    },
                  ].map((social, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className={`p-4 bg-gradient-to-r ${social.color} text-white rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-110`}
                      title={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a Message
              </h3>

              {submitted && (
                <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  ✅ Thank you! We'll get back to you soon.
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
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="John Doe"
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
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="john@example.com"
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
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="+1 (234) 567-890"
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
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-purple-500 transition-colors h-32 resize-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  📨 Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t-2 border-gray-200 text-center">
          <p className="text-gray-600">
            &copy; 2024 Keinstein Kids Academy. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Made with ❤️ for kids who dream big
          </p>
        </div>
      </div>
    </section>
  );
}
