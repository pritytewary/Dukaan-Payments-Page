import { Select, Option } from "../ui/Select";

const PaymentTitle = () => {
  return (
    <div className="flex justify-between pt-8">
      <p className="text-lg font-semibold">Overview</p>

      <Select>
        <Option value="this-month">This Month</Option>
        <Option value="last-month">Last Month</Option>
        <Option value="this-year">This Year</Option>
      </Select>
    </div>
  );
};

export default PaymentTitle;
