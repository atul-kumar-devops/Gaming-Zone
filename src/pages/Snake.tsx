
import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, Play, Pause, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const GRID_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_FOOD = { x: 5, y: 5 };
const INITIAL_DIRECTION = { x: 0, y: -1 };

const Snake = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    return newFood;
  }, []);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection(INITIAL_DIRECTION);
    setGameOver(false);
    setScore(0);
    setIsPlaying(false);
  };

  const moveSnake = useCallback(() => {
    if (!isPlaying || gameOver) return;

    setSnake(currentSnake => {
      const newSnake = [...currentSnake];
      const head = { ...newSnake[0] };
      
      head.x += direction.x;
      head.y += direction.y;

      // Check wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true);
        setIsPlaying(false);
        return currentSnake;
      }

      // Check self collision
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        setIsPlaying(false);
        return currentSnake;
      }

      newSnake.unshift(head);

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 10);
        setFood(generateFood());
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [direction, food, isPlaying, gameOver, generateFood]);

  useEffect(() => {
    const gameInterval = setInterval(moveSnake, 150);
    return () => clearInterval(gameInterval);
  }, [moveSnake]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying) return;

      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, isPlaying]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900">
      <Navigation />
      
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-8">
          <Link
            to="/games"
            className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Games
          </Link>
          <h1 className="orbitron text-4xl font-bold text-white mb-4">Snake Game</h1>
          <p className="text-gray-300">Use arrow keys to navigate</p>
        </div>

        <div className="game-card rounded-xl p-8 text-center">
          <div className="flex justify-between items-center mb-6">
            <div className="text-white">
              <span className="orbitron font-bold text-2xl">Score: {score}</span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center px-4 py-2 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                disabled={gameOver}
              >
                {isPlaying ? <Pause className="h-4 w-4 mr-2" /> : <Play className="h-4 w-4 mr-2" />}
                {isPlaying ? 'Pause' : 'Play'}
              </button>
              <button
                onClick={resetGame}
                className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Reset
              </button>
            </div>
          </div>

          {gameOver && (
            <div className="mb-6">
              <p className="text-2xl font-bold text-red-400 mb-2">Game Over!</p>
              <p className="text-white">Final Score: {score}</p>
            </div>
          )}

          <div 
            className="grid gap-1 bg-gray-800 p-4 rounded-lg mx-auto max-w-md"
            style={{ 
              gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
              aspectRatio: '1'
            }}
          >
            {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
              const x = index % GRID_SIZE;
              const y = Math.floor(index / GRID_SIZE);
              const isSnake = snake.some(segment => segment.x === x && segment.y === y);
              const isFood = food.x === x && food.y === y;
              const isHead = snake[0]?.x === x && snake[0]?.y === y;

              return (
                <div
                  key={index}
                  className={`aspect-square rounded-sm ${
                    isSnake
                      ? isHead
                        ? 'bg-purple-400'
                        : 'bg-purple-600'
                      : isFood
                      ? 'bg-red-500'
                      : 'bg-gray-700'
                  }`}
                />
              );
            })}
          </div>

          <p className="text-gray-400 mt-4">
            Use arrow keys to control the snake
          </p>
        </div>
      </div>
    </div>
  );
};

export default Snake;
