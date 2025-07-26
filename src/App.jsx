import { useState } from "react";
import Board from "./component/Board";

export default function App() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }
    return (
      <li key={move}>
        <button
          style={{ backgroundColor: "#038C7F", color: "#F2F2F2" }}
          className="p-1 my-1 rounded border-2 border-slate-500 font-extrabold font-serif tracking-widest"
          onClick={() => jumpTo(move)}
        >
          {description}
        </button>
      </li>
    );
  });

  return (
    <div>
      {/* Desktop */}
      <div className="hidden md:flex flex-col justify-center items-center min-h-screen bg-#002333">
        <h1 className="italic font-serif py-2 px-5 font-extrabold uppercase text-3xl text-white mb-20 border rounded-full bg-indigo-200 bg-opacity-20">
          Tic - Tac - Toe
        </h1>
        <div className="flex items-center gap-x-20 px-5">
          <div>
            <Board
              xIsNext={xIsNext}
              squares={currentSquares}
              onPlay={handlePlay}
            />
          </div>
          <div className="flex flex-col border border-slate-500 rounded-lg p-5 bg-opacity-15 bg-white">
            <ol className="grid grid-rows-5 grid-flow-col gap-4">{moves}</ol>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className="md:hidden flex flex-col justify-center items-center min-h-screen bg-#002333">
        <h1 className="italic font-serif tracking-widest py-2 mt-5 px-4 font-bold uppercase text-2xl text-white border rounded-full bg-indigo-200 bg-opacity-20">
          Tic - Tac - Toe
        </h1>
        <div className="flex items-center gap-x-10 px-5">
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="flex flex-col items-center my-5 border border-slate-500 rounded-lg p-5 bg-opacity-15 bg-white">
          <ol className="grid grid-rows-5 grid-flow-col gap-4">{moves}</ol>
        </div>
      </div>
    </div>
  );
}
