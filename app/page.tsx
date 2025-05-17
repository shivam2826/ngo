"use client";
import DemoSlider from "@/components/DemoSlider";
import Image from "next/image";
import sliderData from "@/const/sliderData.json";
import teamData from "@/const/teamData.json";
import JoinForm from "@/components/JoinForm";
import TeamSlider from "@/components/TeamSlider";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      {/* <section className="h-[80vh] pt-16"></section> */}

      {/* About Us Section */}
      <section className="py-20 px-4 bg-gray-50">
        <DemoSlider data={sliderData} />
        <div className="max-w-6xl mx-auto mt-15">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false }}
            >
              <h2 className="text-4xl font-bold mb-6">About Our Foundation</h2>
              <p className="text-lg text-gray-600 mb-6">
                Ikrazah Foundation is a compassionate non-profit organization
                dedicated to improving the lives of individuals battling kidney
                diseases. Our mission is to provide holistic support to kidney
                patients and their families, ensuring they receive the care,
                resources, and awareness necessary to navigate their journey
                toward better health.
              </p>
              <p className="text-lg text-gray-600">
                Through a range of initiatives, including financial assistance
                for treatments, access to dialysis services, health camps and
                education on kidney health, we aim to alleviate the burden faced
                by those suffering from kidney-related illnesses.
                <br />
                <Link href={"/about"} className="underline color-[blue]">
                  Read More -{">"}
                </Link>
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

      {/* Team Section */}
      <TeamSlider data={teamData.teamMembers} />

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
