"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-cyan-600">
        <Image
          src="/images/about-hero.jpg"
          alt="About Us"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl">Our Story, Mission, and Values</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl font-bold mb-6">Who We are</h2>
              <p className="text-gray-600 mb-4">
                Ikrazah Foundation is a compassionate non-profit organization
                dedicated to improving the lives of individuals battling kidney
                diseases. Our mission is to provide holistic support to kidney
                patients and their families, ensuring they receive the care,
                resources, and awareness necessary to navigate their journey
                toward better health. Through a range of initiatives, including
                financial assistance for treatments, access to dialysis
                services, health camps and education on kidney health, we aim to
                alleviate the burden faced by those suffering from
                kidney-related illnesses.
              </p>
              <p className="text-gray-600">
                Ikrazah Foundation is a compassionate non-profit organization
                dedicated to improving the lives of individuals battling kidney
                diseases. Our mission is to provide holistic support to kidney
                patients and their families, ensuring they receive the care,
                resources, and awareness necessary to navigate their journey
                toward better health. Through a range of initiatives, including
                financial assistance for treatments, access to dialysis
                services, health camps and education on kidney health, we aim to
                alleviate the burden faced by those suffering from
                kidney-related illnesses.
                <br />
                <strong>
                  Together, we can bring hope and healing to those in need.
                </strong>
              </p>
            </div>
            <div className="relative h-80">
              <Image
                src="/images/mission.jpg"
                alt="About us"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Integrity</h3>
              <p className="text-gray-600">
                We maintain the highest standards of honesty and transparency in
                all our operations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We focus on long-term solutions that create lasting positive
                impact.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4">Community</h3>
              <p className="text-gray-600">
                We believe in the power of collective action and community
                engagement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div className="relative h-80">
              <Image
                src="/images/history.jpg"
                alt="Our History"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Our History</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2010, our organization began with a small group of
                dedicated individuals committed to making a difference in their
                local community.
              </p>
              <p className="text-gray-600">
                {` Over the years, we've grown into a respected NGO with multiple
                programs and initiatives that have positively impacted thousands
                of lives.`}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
