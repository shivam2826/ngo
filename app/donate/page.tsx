"use client";
import { motion } from "framer-motion";

export default function Donate() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-blue-600">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Make a Difference</h1>
          <p className="text-xl">Your donation can change lives</p>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Donation Form */}

            <motion.div
            // initial={{ opacity: 0, x: -20 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.5 }}
            // viewport={{ once: true }}

            // animate={{ opacity: true ? 1 : 0 }}
            // className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold mb-6">Donate Now</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Amount (USD)
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      type="button"
                      className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg text-center"
                    >
                      $10
                    </button>
                    <button
                      type="button"
                      className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg text-center"
                    >
                      $25
                    </button>
                    <button
                      type="button"
                      className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg text-center"
                    >
                      $50
                    </button>
                    <button
                      type="button"
                      className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg text-center"
                    >
                      $100
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">
                    Custom Amount
                  </label>
                  <input
                    type="number"
                    className="w-full p-3 border rounded-lg"
                    placeholder="Enter amount"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border rounded-lg"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full p-3 border rounded-lg"
                    placeholder="Your email"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Donate Now
                </button>
              </form>
            </motion.div>

            {/* Impact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">
                  Where Your Money Goes
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Education programs for underprivileged children
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Healthcare services in remote areas
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Environmental conservation projects
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    Community development initiatives
                  </li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Our Impact</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">
                      10,000+
                    </div>
                    <div className="text-gray-600">Lives Impacted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-gray-600">Projects Completed</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
