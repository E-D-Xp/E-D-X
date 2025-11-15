import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

// This would typically come from a database or CMS
const projects: Record<string, {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  results: string[];
}> = {
  "techstart-seo": {
    id: "techstart-seo",
    title: "TechStart SEO Transformation",
    category: "SEO & Digital Marketing",
    description: "Increased organic traffic by 300% in 6 months",
    longDescription: "We helped TechStart Inc. completely transform their online presence through comprehensive SEO optimization. Our strategy included technical SEO improvements, content optimization, and strategic link building.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    tags: ["SEO", "Content Strategy", "Technical SEO"],
    results: [
      "300% increase in organic traffic",
      "Top 3 rankings for 15+ target keywords",
      "50% reduction in bounce rate",
      "200% increase in lead generation",
    ],
  },
  "designco-website": {
    id: "designco-website",
    title: "DesignCo Modern Website",
    category: "Web Development",
    description: "Beautiful, responsive website with 40% conversion increase",
    longDescription: "We designed and developed a stunning, modern website for DesignCo that perfectly represents their brand. The site features smooth animations, responsive design, and optimized performance.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=600&fit=crop",
    tags: ["Web Development", "UI/UX Design", "React"],
    results: [
      "40% increase in conversion rate",
      "60% faster page load times",
      "95+ mobile performance score",
      "50% increase in user engagement",
    ],
  },
  "growthlabs-ads": {
    id: "growthlabs-ads",
    title: "Growth Labs Ad Campaign",
    category: "Digital Advertising",
    description: "ROI of 450% with strategic ad management",
    longDescription: "We managed a comprehensive digital advertising campaign for Growth Labs across multiple platforms, optimizing for maximum ROI and lead generation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    tags: ["PPC", "Google Ads", "Facebook Ads"],
    results: [
      "450% ROI on ad spend",
      "60% reduction in cost per acquisition",
      "300% increase in qualified leads",
      "200% increase in brand awareness",
    ],
  },
};

export default function PortfolioDetail() {
  const { id } = useParams<{ id: string }>();
  const project = id ? projects[id] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Project Not Found</h1>
          <Link to="/portfolio" className="text-blue-600 dark:text-blue-400 hover:underline">
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <Link
          to="/portfolio"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Link>

        <div className="mb-8">
          <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-semibold mb-4">
            {project.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            {project.description}
          </p>
        </div>

        <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Project Overview</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
            {project.longDescription}
          </p>

          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Key Results</h2>
          <ul className="space-y-3 mb-8">
            {project.results.map((result, index) => (
              <li key={index} className="flex items-start">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-3 mt-2 flex-shrink-0"></span>
                <span className="text-gray-600 dark:text-gray-400">{result}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="mb-6 text-blue-100">
            Let's discuss how we can help you achieve similar results.
          </p>
          <Link
            to="/contact"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

