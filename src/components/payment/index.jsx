import PaymentTable from "./Table";
import PaymentTitle from "./Title";
import PaymentCards from "./Card";

const Payout = () => {
  return (
    <div className="space-y-8">
      <PaymentTitle />
      <PaymentCards />
      <PaymentTable />
    </div>
  );
};

export default Payout;
