interface CircleButtonProps {
  onClick: () => void;
}

export function CircleButton({ onClick }: CircleButtonProps) {
  function handle(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    onClick();
  }

  return (
    <button
      className="w-5 h-5 rounded-full bg-blue-800 flex items-center justify-center"
      onClick={(e) => handle(e)}
    >
      <span className="text-white text-lg font-bold">+</span>
    </button>
  );
}
