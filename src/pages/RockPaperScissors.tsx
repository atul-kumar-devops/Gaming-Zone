
import { useState } from "react";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

type Choice = 'rock' | 'paper' | 'scissors';

const RockPaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState<string>('');
  const [showResult, setShowResult] = useState(false);

  const choices: { name: Choice; emoji: string; display: string }[] = [
    { name: 'rock', emoji: '🪨', display: 'Rock' },
    { name: 'paper', emoji: '📄', display: 'Paper' },
    { name: 'scissors', emoji: '✂️', display: 'Scissors' }
  ];

  const getRandomChoice = (): Choice => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex].name;
  };

  const determineWinner = (player: Choice, computer: Choice): string => {
    if (player === computer) return "It's a tie!";
    
    if (
      (player === 'rock' && computer === 'scissors') ||
      (player === 'paper' && computer === 'rock') ||
      (player === 'scissors' && computer === 'paper')
    ) {
      setPlayerScore(prev => prev + 1);
      return 'You win!';
    } else {
      setComputerScore(prev => prev + 1);
      return 'Computer wins!';
    }
  };

  const playGame = (choice: Choice) => {
    const computerChoice = getRandomChoice();
    const gameResult = determineWinner(choice, computerChoice);
    
    setPlayerChoice(choice);
    setComputerChoice(computerChoice);
    setResult(gameResult);
    setShowResult(true);
  };

  const resetGame = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setPlayerScore(0);
    setComputerScore(0);
    setResult('');
    setShowResult(false);
  };

  const newRound = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult('');
    setShowResult(false);
  };

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
          <h1 className="orbitron text-4xl font-bold text-white mb-4">Rock Paper Scissors</h1>
          <p className="text-gray-300">Choose your weapon and beat the computer!</p>
        </div>

        <div className="game-card rounded-xl p-8">
          {/* Score Board */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-center">
              <p className="text-white font-semibold">You</p>
              <p className="orbitron text-3xl font-bold text-purple-400">{playerScore}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-400">VS</p>
            </div>
            <div className="text-center">
              <p className="text-white font-semibold">Computer</p>
              <p className="orbitron text-3xl font-bold text-pink-400">{computerScore}</p>
            </div>
          </div>

          {/* Game Result */}
          {showResult && (
            <div className="text-center mb-8">
              <div className="flex justify-center items-center space-x-8 mb-4">
                <div className="text-center">
                  <p className="text-white mb-2">You chose:</p>
                  <div className="text-6xl mb-2">
                    {choices.find(c => c.name === playerChoice)?.emoji}
                  </div>
                  <p className="text-purple-400 font-semibold">
                    {choices.find(c => c.name === playerChoice)?.display}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-white mb-2">Computer chose:</p>
                  <div className="text-6xl mb-2">
                    {choices.find(c => c.name === computerChoice)?.emoji}
                  </div>
                  <p className="text-pink-400 font-semibold">
                    {choices.find(c => c.name === computerChoice)?.display}
                  </p>
                </div>
              </div>
              <p className="text-2xl font-bold text-white mb-4">{result}</p>
              <button
                onClick={newRound}
                className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors neon-glow"
              >
                Play Again
              </button>
            </div>
          )}

          {/* Choice Buttons */}
          {!showResult && (
            <div>
              <p className="text-center text-white text-xl mb-6">Make your choice:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {choices.map((choice) => (
                  <button
                    key={choice.name}
                    onClick={() => playGame(choice.name)}
                    className="p-6 bg-gray-800 hover:bg-gray-700 border-2 border-purple-500/30 rounded-xl transition-all duration-200 hover:border-purple-500 hover:scale-105 group"
                  >
                    <div className="text-6xl mb-3 group-hover:scale-110 transition-transform">
                      {choice.emoji}
                    </div>
                    <p className="text-white font-semibold">{choice.display}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Reset Button */}
          <div className="text-center">
            <button
              onClick={resetGame}
              className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
            >
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset Score
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RockPaperScissors;
