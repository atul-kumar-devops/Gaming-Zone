
import { Link } from "react-router-dom";
import { Gamepad2, Play, Trophy, Users } from "lucide-react";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Navigation />
      
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="orbitron text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                GameZone
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Experience the thrill of classic browser games with modern design. 
              Play instantly, compete with friends, and have endless fun!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/games"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 neon-glow"
              >
                <Play className="mr-2 h-5 w-5" />
                Start Playing
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Floating Icons */}
        <div className="absolute top-20 left-10 text-purple-400/20 animate-bounce">
          <Gamepad2 className="h-16 w-16" />
        </div>
        <div className="absolute top-40 right-10 text-pink-400/20 animate-pulse">
          <Trophy className="h-12 w-12" />
        </div>
        <div className="absolute bottom-20 left-20 text-blue-400/20 animate-bounce delay-300">
          <Users className="h-14 w-14" />
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-full w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <Play className="h-8 w-8 text-white mx-auto mt-2" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Instant Play</h3>
            <p className="text-gray-400">No downloads required. Jump straight into the action!</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-pink-600 to-pink-800 p-6 rounded-full w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <Trophy className="h-8 w-8 text-white mx-auto mt-2" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">High Scores</h3>
            <p className="text-gray-400">Track your progress and compete for the top spot!</p>
          </div>
          
          <div className="text-center group">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-full w-20 h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
              <Users className="h-8 w-8 text-white mx-auto mt-2" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Multiplayer</h3>
            <p className="text-gray-400">Challenge friends in exciting multiplayer matches!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
