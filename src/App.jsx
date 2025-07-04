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
    <div className="flex flex-col justify-center items-center h-screen bg-#002333">
      <h1 className="p-2 font-extrabold uppercase text-3xl text-white">
        Tic - Tac - Toe
      </h1>
      <div className="flex items-center gap-x-10 px-5">
        <div>
          <Board
            xIsNext={xIsNext}
            squares={currentSquares}
            onPlay={handlePlay}
          />
        </div>
        <div className="flex flex-col">
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}
