"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "/images/team/john.jpg",
    description:
      "With over 15 years of experience in social work, John leads our organization with passion and dedication.",
  },
  {
    name: "Jane Smith",
    role: "Program Director",
    image: "/images/team/jane.jpg",
    description:
      "Jane oversees all our programs and ensures they align with our mission and vision.",
  },
  {
    name: "Mike Johnson",
    role: "Education Coordinator",
    image: "/images/team/mike.jpg",
    description:
      "Mike manages our education initiatives and works closely with schools and communities.",
  },
  {
    name: "Sarah Williams",
    role: "Healthcare Manager",
    image: "/images/team/sarah.jpg",
    description:
      "Sarah leads our healthcare programs and ensures quality service delivery.",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-purple-600">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Our Team</h1>
          <p className="text-xl">Meet the people behind our mission</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our dedicated team of professionals works tirelessly to make a
              difference in the lives of those we serve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-purple-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Volunteers Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-16 bg-purple-50 p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-center mb-6">
              Our Volunteers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  500+
                </div>
                <div className="text-gray-600">Active Volunteers</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  10,000+
                </div>
                <div className="text-gray-600">Volunteer Hours</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  50+
                </div>
                <div className="text-gray-600">Countries Represented</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
