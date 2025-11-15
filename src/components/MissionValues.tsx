
import { motion } from "framer-motion";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To empower businesses of all sizes with innovative digital marketing strategies and expert freelancing services that drive measurable growth and success.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're genuinely passionate about what we do. Every project is an opportunity to create something exceptional and make a real impact on our clients' success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We stay ahead of the curve by continuously learning, adapting, and implementing the latest technologies and marketing strategies in the industry.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We believe in building long-term relationships with our clients. Your success is our success, and we're committed to being your trusted digital partner.",
  },
];

export default function MissionValues() {
  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
          Mission & Values
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          What drives us every day
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value, index) => {
          const Icon = value.icon;
          return (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="p-8 rounded-xl bg-white/90 dark:bg-gray-800 shadow-md dark:shadow-none hover:shadow-xl dark:hover:shadow-lg transition-all duration-500 ease-out border border-gray-100/50 dark:border-gray-700"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

