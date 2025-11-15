
import { motion } from "framer-motion";
import { Users, Award, Briefcase, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Briefcase, value: "1000+", label: "Projects Completed" },
  { icon: Award, value: "50+", label: "Awards Won" },
  { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
];

export default function Stats() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1.2, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-white/20 backdrop-blur-sm">
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

