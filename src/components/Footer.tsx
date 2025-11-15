import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:elitedigitalxp@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 border-t border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.05),transparent)] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.03),transparent)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                EDX
              </h3>
            </div>
            <p className="text-base text-gray-700 dark:text-gray-300 mb-6 max-w-lg leading-relaxed">
              Transforming brands through innovative digital marketing strategies and expert freelancing services.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-gradient-to-br hover:from-blue-600 hover:to-purple-600 hover:border-transparent hover:shadow-lg hover:scale-110 transition-all duration-500 ease-out"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-sm">
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-1 h-6 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></span>
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="group">
                <div className="flex items-start gap-2">
                  <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm mt-0.5">Email</span>
                </div>
                <a 
                  href="mailto:elitedigitalxp@gmail.com" 
                  className="pt-1 pl-2 text-base text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 opacity-80 hover:opacity-100 hover:translate-x-1 inline-block"
                >
                  elitedigitalxp@gmail.com
                </a>
              </li>
              <li className="group">
                <div className="flex items-start gap-2">
                  <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm mt-0.5">Phone</span>
                </div>
                <a 
                  href="tel:+919787597478" 
                  className="text-base pl-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 opacity-60 hover:opacity-100 hover:translate-x-1 inline-block"
                >
                  +91 97875 97478
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200/50 dark:border-gray-800/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} <span className="font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">EDX</span>. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500">
              Built with ❤️ for digital excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

