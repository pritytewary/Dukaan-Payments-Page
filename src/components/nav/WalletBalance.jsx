import { CreditCardIcon } from "@heroicons/react/24/outline";

const WalletBalance = ({ balance = 0 }) => {
  return (
    <div className="mt-auto p-2 rounded-lg bg-white bg-opacity-10 w-full flex items-center gap-3 text-white">
      <CreditCardIcon className="w-10 h-10 p-2 bg-white bg-opacity-15 rounded-md" />

      <div className="text-xs">
        Available Balance
        <p className="text-lg font-semibold">₹{balance.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default WalletBalance;
