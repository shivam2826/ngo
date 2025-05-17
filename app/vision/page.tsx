"use client";
import { motion } from "framer-motion";

export default function Vision() {
  const shortTermGoals = [
    "Expand our education programs to reach 5,000 more children.",
    "Establish 10 new healthcare centers in remote areas.",
    "Launch environmental awareness campaigns in 20 communities.",
    "Organize monthly dialysis support camps for low-income families.",
    "Distribute 1,000 free kidney health kits to at-risk patients.",
    "Launch an awareness drive on organ donation in schools and colleges.",
  ];
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center bg-green-600">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-4">Our Vision & Mission</h1>
          <p className="text-xl">PROVIDING SUPPORT FOR RENAL HEALTH.</p>
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
            <h2 className="text-3xl font-bold mb-6">Our Vision & Mission</h2>
            <p className="text-gray-600 mb-4">
              At Ikrazah Foundation, our vision is to create a healthier and
              more compassionate society where individuals suffering from kidney
              diseases receive the care, support and resources they need to lead
              fulfilling lives. We aim to bridge the gap between patients and
              critical resources, fostering hope and improving the quality of
              life for countless families impacted by kidney-related ailments.
            </p>
            <p className="text-gray-600 mb-4">
              Kidney diseases, such as chronic kidney disease (CKD) and acute
              kidney injury, affect millions of people globally and are often
              termed as "silent killers" due to their gradual progression and
              lack of early symptoms. Many patients remain undiagnosed until the
              disease has reached an advanced stage, leading to severe
              complications like kidney failure, which requires dialysis or
              transplantation. For those from economically weaker sections, the
              high costs of treatment, combined with a lack of awareness and
              limited access to healthcare, make this battle even harder.
            </p>
            <p className="text-gray-600">
              Recognizing these challenges, Ikrazah Foundation is dedicated to
              tackling the issues head-on. We aim to spread awareness about the
              importance of early detection and preventive care through
              educational campaigns, medical camps and partnerships with
              healthcare providers. By addressing both the medical and emotional
              needs of patients, we aim to offer holistic support to individuals
              and their families. Offering selfless service with profound
              compassion. Providing urgent help with personal accountability.
              Ensuring unquestionable transparency in all our efforts.
              Continually innovating to better serve kidney patients in need
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
              <ul className="space-y-3 text-slate-700">
                {shortTermGoals.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2.5 h-2.5 bg-green-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                    <span>{goal}</span>
                  </li>
                ))}
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
              <ul className="space-y-3 text-slate-700">
                {[
                  "To provide vital assistance to underprivileged kidney patients.",
                  "To support individuals in need of dialysis.",
                  "To assist kidney patients in regaining a sense of dignity and joy.",
                  "To foster a compassionate and inclusive environment by celebrating special moments like birthdays and anniversaries with patients.",
                  "To provide long-term, quality solutions for the welfare of kidney patients.",
                  "To promote happiness and hope to those suffering from kidney-related diseases.",
                ].map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2 mt-1 flex-shrink-0"></span>
                    <span>{goal}</span>
                  </li>
                ))}
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
