"use client";
import DemoSlider from "@/components/DemoSlider";
import Image from "next/image";
import Link from "next/link";
import sliderData from "@/const/sliderData.json";
import JoinForm from "@/components/JoinForm";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      {/* <section className="h-[80vh] pt-16"></section> */}

      {/* About Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <DemoSlider data={sliderData} />
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <h2 className="text-4xl font-bold mb-6">About Our NGO</h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a dedicated team working towards creating positive change
                in our community. Our mission is to empower individuals and
                transform lives through education, healthcare, and sustainable
                development initiatives.
              </p>
              <p className="text-lg text-gray-600">
                With over a decade of experience, we have impacted thousands of
                lives and continue to expand our reach to make a meaningful
                difference in society.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
              className="relative h-[400px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/about-us.jpg"
                alt="About Us"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Join Our Community Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Join Our Community</h2>
            <p className="text-lg text-gray-600">
              Be a part of our mission to create positive change
            </p>
          </motion.div>
          <JoinForm />
        </div>
      </section>

      {/* Our Achievements Section (Placeholder) */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-600 mb-12">
              Coming soon: A showcase of our impact and success stories
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Placeholder achievement cards */}
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
                  <h3 className="text-xl font-semibold mb-2">
                    Achievement {item}
                  </h3>
                  <p className="text-gray-600">Details coming soon</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
