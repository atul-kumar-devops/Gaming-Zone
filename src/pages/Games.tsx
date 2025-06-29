
import { Link } from "react-router-dom";
import { Grid3X3, Zap, Scissors } from "lucide-react";
import Navigation from "../components/Navigation";

const Games = () => {
  const games = [
    {
      id: "tic-tac-toe",
      title: "Tic Tac Toe",
      description: "Classic strategy game for two players",
      icon: Grid3X3,
      path: "/games/tic-tac-toe",
      color: "from-purple-600 to-purple-800"
    },
    {
      id: "snake",
      title: "Snake Game",
      description: "Navigate the snake and collect food",
      icon: Zap,
      path: "/games/snake",
      color: "from-green-600 to-green-800"
    },
    {
      id: "rock-paper-scissors",
      title: "Rock Paper Scissors",
      description: "Beat the computer in this classic game",
      icon: Scissors,
      path: "/games/rock-paper-scissors",
      color: "from-blue-600 to-blue-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="orbitron text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your Game
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Select from our collection of classic games and start playing instantly!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game) => {
            const Icon = game.icon;
            return (
              <Link
                key={game.id}
                to={game.path}
                className="game-card rounded-xl p-6 group hover:scale-105 transition-all duration-300"
              >
                <div className={`bg-gradient-to-br ${game.color} p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-200`}>
                  <Icon className="h-8 w-8 text-white mx-auto" />
                </div>
                <h3 className="orbitron text-xl font-bold text-white mb-2 text-center">
                  {game.title}
                </h3>
                <p className="text-gray-400 text-center mb-4">
                  {game.description}
                </p>
                <div className="text-center">
                  <span className="inline-block px-4 py-2 bg-purple-600 text-white rounded-full text-sm font-medium group-hover:bg-purple-500 transition-colors">
                    Play Now
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Games;
