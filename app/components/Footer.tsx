import { Heart } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 border-t border-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Transformative
            </h3>
            <p className="text-gray-400 max-w-md leading-relaxed">
              A powerful React Router template for building modern web
              applications. Fast, type-safe, and developer-friendly.
            </p>
          </div>

          <div className="col-start-4">
            <h4 className="font-semibold mb-4 text-gray-200">Resources</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
               <Link to="https://reactrouter.com/start/framework/installation" className="hover:text-white transition-colors">Documentation</Link>
              </li>
              <li>
                <Link to="https://www.robinwieruch.de/react-router/" className="hover:text-white transition-colors">Examples</Link>
              </li>
              <li>
                <Link to="https://www.robinwieruch.de/react-router/" className="hover:text-white transition-colors">Tutorials</Link>
              </li>
              <li>
                <Link to="https://reactrouter.com/" className="hover:text-white transition-colors">Blog</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-500" /> for the React
            community
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            © 2025 Transformative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
