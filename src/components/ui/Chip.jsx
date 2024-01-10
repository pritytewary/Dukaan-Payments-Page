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
const ButtonChip = ({ label, onClick, isBlue, isBorder = false }) => {
  return (
    <button
      className={clsx(
        "px-5 py-4 border-2  text-sm shadow-md font-semibold space-x-2 rounded-md flex items-center",

        {
          " text-black border-gray-300 ": isBorder,
          "bg-white text-black hover:bg-gray-300 border-gray-50": !isBorder,
        },
        {
          "bg-blue-700 text-white ": isBlue,
          "bg-white text-black hover:bg-gray-300": !isBlue,
        }
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export { Chip, ButtonChip };
