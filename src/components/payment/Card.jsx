import {
  ChevronRightIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const PaymentCards = () => {
  return (
    <div className="w-full grid grid-cols-3 gap-4">
      <PaymentCard
        title="Next payout"
        hexBgcolor="#186cb4"
        hexTextColor="#fff"
        data="₹52,312.19"
        helpText="This is the amount that will be paid to you on 1st of next month."
        nav={{
          link: "#",
          text: "23 orders",
        }}
        botton={
          <div className="bg-[#0e4f82] text-white flex justify-between items-center py-2 rounded-lg -mt-2 px-6">
            <p className="text-sm">Next payout date:</p>
            <p className="text-sm">Today, 4:00pm</p>
          </div>
        }
      />

      <PaymentCard
        title="Amount Pending"
        data="₹25,412.00"
        helpText="This is the amount that will be paid to you on 1st of next month."
        nav={{
          link: "#",
          text: "13 orders",
        }}
      />

      <PaymentCard
        title="Amount processed"
        data="₹5,712.07"
        helpText="This is the amount that will be paid to you on 1st of next month."
      />
    </div>
  );
};

const PaymentCard = ({
  title = "",
  hexBgcolor = "",
  hexTextColor = "",
  helpText = "",
  data = "",
  nav = null,
  botton = null,
}) => {
  return (
    <div
      className="w-full rounded-lg shadow-md flex flex-col justify-between gap-3 overflow-hidden h-max"
      style={{
        backgroundColor: hexBgcolor || "#fff",
        color: hexTextColor || "#000",
      }}
    >
      <div className="p-6 flex flex-col justify-between gap-3">
        <div className="flex items-center gap-2">
          <p className="text-sm">{title}</p>

          <QuestionMarkCircleIcon
            className="h-5 w-5 cursor-help"
            title={helpText}
          />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-3xl font-bold">{data}</p>
          {nav && (
            <div className="flex items-center gap-2">
              <a className="text-sm underline" href={nav.link}>
                {nav.text}
              </a>

              <ChevronRightIcon className="h-5 w-5" />
            </div>
          )}
        </div>
      </div>

      {botton && <div>{botton}</div>}
    </div>
  );
};

export default PaymentCards;
