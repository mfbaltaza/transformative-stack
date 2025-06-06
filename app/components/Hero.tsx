
import { ArrowRight, Code, Zap } from "lucide-react";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-gray-800/60 backdrop-blur-sm rounded-full px-6 py-3 mb-8 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_0_rgba(0,0,0,0.8),0_1px_2px_0_rgba(0,0,0,0.9)] border border-gray-700/50">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Powered by React Router</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent leading-tight">
            Transformative
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Build exceptional web applications with the power of React Router. 
            Navigate seamlessly, load efficiently, and transform user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button 
              className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:shadow-[0_12px_40px_0_rgba(0,0,0,0.5)] transition-all duration-300 transform hover:scale-105 border-0 flex items-center cursor-pointer"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            
            <button 
              className="bg-gray-800/60 border-gray-600/50 text-gray-200 hover:bg-gray-700/60 hover:text-white px-8 py-4 text-lg rounded-2xl backdrop-blur-sm shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1),0_1px_3px_0_rgba(0,0,0,0.8),0_1px_2px_0_rgba(0,0,0,0.9)] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),0_2px_6px_0_rgba(0,0,0,0.9)] flex items-center cursor-pointer"
            >
              <Code className="mr-2 w-5 h-5" href="https://github.com/mfbaltaza/transformative-stack/tree/main" />
              <Link to="https://github.com/mfbaltaza/transformative-stack/tree/main">View on GitHub</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
