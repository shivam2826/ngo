"use client";
import { motion } from "framer-motion";

export default function Vision() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-green-600">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Our Vision</h1>
          <p className="text-xl">Building a Better Future Together</p>
        </div>
      </section>

      {/* Vision Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">
              Our Vision for the Future
            </h2>
            <p className="text-gray-600 mb-4">
              We envision a world where every individual has the opportunity to
              thrive, regardless of their background or circumstances. Our
              vision is rooted in the belief that sustainable change is possible
              when we work together as a community.
            </p>
            <p className="text-gray-600">
              Through our initiatives, we aim to create a future where everyone
              has access to quality education, healthcare, and opportunities for
              growth.
            </p>
          </motion.div>

          {/* Goals Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Short-term Goals</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Expand our education programs to reach 5,000 more children
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Establish 10 new healthcare centers in remote areas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Launch environmental awareness campaigns in 20 communities
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Long-term Goals</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Achieve 100% literacy rate in our target communities
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Create sustainable self-help groups in all project areas
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                  Establish a model for community-led development
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Impact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-green-50 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold mb-6">Our Impact So Far</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  15,000+
                </div>
                <div className="text-gray-600">Children Educated</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  50+
                </div>
                <div className="text-gray-600">Communities Reached</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  100+
                </div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
