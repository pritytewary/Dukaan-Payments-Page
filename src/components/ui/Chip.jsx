import clsx from "clsx";

const Chip = ({ label, onClick, isHighlighted = false }) => {
  return (
    <button
      className={clsx(
        "px-3.5 py-1.5 text-xs font-semibold text-gray-700 rounded-full",
        {
          "bg-[#186cb4] text-white": isHighlighted,
          "bg-gray-200 text-black hover:bg-gray-300": !isHighlighted,
        }
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export { Chip };
