
import { Github, Heart, Code, Coffee } from "lucide-react";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="orbitron text-4xl md:text-5xl font-bold text-white mb-4">
            About GameZone
          </h1>
          <p className="text-xl text-gray-300">
            Where classic games meet modern design
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="orbitron text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              GameZone was created to bring the joy of classic browser games to modern web users. 
              We believe that gaming should be accessible, fun, and instantly available without 
              the need for downloads or complex setups.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our collection features timeless games that have entertained generations, 
              now with a fresh, modern interface and responsive design that works perfectly 
              on any device.
            </p>
          </div>
          
          <div className="game-card rounded-xl p-8">
            <h3 className="orbitron text-xl font-bold text-white mb-4 text-center">Features</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center space-x-3">
                <Code className="h-5 w-5 text-purple-400" />
                <span>Modern, responsive design</span>
              </li>
              <li className="flex items-center space-x-3">
                <Heart className="h-5 w-5 text-pink-400" />
                <span>Intuitive user interface</span>
              </li>
              <li className="flex items-center space-x-3">
                <Coffee className="h-5 w-5 text-yellow-400" />
                <span>Instant play, no downloads</span>
              </li>
              <li className="flex items-center space-x-3">
                <Github className="h-5 w-5 text-green-400" />
                <span>Open source & customizable</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="game-card rounded-xl p-8 text-center">
          <h2 className="orbitron text-2xl font-bold text-white mb-4">About the Developer</h2>
          <p className="text-gray-300 mb-6 leading-relaxed max-w-2xl mx-auto">
            GameZone is built with passion for both gaming and web development. 
            Using modern technologies like React, TypeScript, and Tailwind CSS, 
            we've created an experience that's both nostalgic and cutting-edge.
          </p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <div className="flex items-center space-x-2">
              <Code className="h-5 w-5" />
              <span>React & TypeScript</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5" />
              <span>Made with love</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
