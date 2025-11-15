import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: "techstart-seo",
    title: "TechStart SEO Transformation",
    category: "SEO & Digital Marketing",
    description: "Increased organic traffic by 300% in 6 months",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["SEO", "Content Strategy"],
  },
  {
    id: "designco-website",
    title: "DesignCo Modern Website",
    category: "Web Development",
    description: "Beautiful, responsive website with 40% conversion increase",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    tags: ["Web Development", "UI/UX"],
  },
  {
    id: "growthlabs-ads",
    title: "Growth Labs Ad Campaign",
    category: "Digital Advertising",
    description: "ROI of 450% with strategic ad management",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["PPC", "Google Ads"],
  },
  {
    id: "brand-identity",
    title: "Startup Brand Identity",
    category: "Branding & Design",
    description: "Complete brand redesign with modern visual identity",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    tags: ["Branding", "Logo Design"],
  },
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform",
    category: "Web Development",
    description: "Scalable e-commerce solution with 200% sales growth",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    tags: ["E-commerce", "React"],
  },
  {
    id: "content-strategy",
    title: "Content Marketing Strategy",
    category: "Content Creation",
    description: "Comprehensive content strategy driving 500% engagement",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    tags: ["Content", "Strategy"],
  },
];

export default function PortfolioGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
          className="group relative overflow-hidden rounded-2xl bg-white/95 dark:bg-gray-800 shadow-xl dark:shadow-lg hover:shadow-2xl dark:hover:shadow-2xl transition-all duration-500 ease-out border border-gray-100/50 dark:border-gray-700"
        >
          <Link to={`/portfolio/${project.id}`}>
            <div className="relative h-64 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
            </div>
            <div className="p-6">
              <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-xs font-semibold mb-3">
                {project.category}
              </span>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-500 ease-out">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold text-sm">
                View Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
}

