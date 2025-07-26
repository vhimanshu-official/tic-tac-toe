export default function Square({ value, onSquareClick }) {
  return (
    <div className="border-2 rounded border-white m-0">
      <button
        onClick={onSquareClick}
        className="h-20 w-20  rounded border-white p-2 text-5xl font-bold bg-white bg-opacity-35"
      >
        {value}
      </button>
    </div>
  );
}
