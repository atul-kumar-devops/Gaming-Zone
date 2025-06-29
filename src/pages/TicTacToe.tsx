
import { useState } from "react";
import { ArrowLeft, RotateCcw } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

const TicTacToe = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [winner, setWinner] = useState<string | null>(null);
  const [gameOver, setGameOver] = useState(false);

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  const checkWinner = (newBoard: (string | null)[]) => {
    for (const combo of winningCombinations) {
      const [a, b, c] = combo;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      setGameOver(true);
    } else if (newBoard.every(cell => cell !== null)) {
      setWinner('Draw');
      setGameOver(true);
    } else {
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
    setGameOver(false);
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
          <h1 className="orbitron text-4xl font-bold text-white mb-4">Tic Tac Toe</h1>
          <p className="text-gray-300">Classic strategy game for two players</p>
        </div>

        <div className="game-card rounded-xl p-8 text-center">
          {!gameOver && (
            <p className="text-xl text-white mb-6">
              Current Player: <span className="orbitron font-bold text-purple-400">{currentPlayer}</span>
            </p>
          )}

          {gameOver && (
            <div className="mb-6">
              <p className="text-2xl font-bold text-white mb-2">
                {winner === 'Draw' ? "It's a Draw!" : `Player ${winner} Wins!`}
              </p>
              <button
                onClick={resetGame}
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors neon-glow"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Play Again
              </button>
            </div>
          )}

          <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto mb-6">
            {board.map((cell, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className="w-24 h-24 bg-gray-800 hover:bg-gray-700 border-2 border-purple-500/30 rounded-lg transition-all duration-200 hover:border-purple-500 flex items-center justify-center"
                disabled={!!cell || gameOver}
              >
                <span className="orbitron text-3xl font-bold text-white">{cell}</span>
              </button>
            ))}
          </div>

          <button
            onClick={resetGame}
            className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors"
          >
            <RotateCcw className="h-4 w-4 mr-2" />
            Reset Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
