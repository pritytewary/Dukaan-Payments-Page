import { Table, Tbody, Td, Th, Thead, Tr } from "../ui/Table";
import { ButtonChip, Chip } from "../ui/Chip";
import { Select, Option } from "../ui/Select";
import { FaDownload } from "react-icons/fa6";
import { HiOutlineDotsHorizontal } from "react-icons/hi";

import {
  AdjustmentsVerticalIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const PaymentTable = () => {
  const tables = [
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
    {
      id: 1,
      orderId: "#281209",
      orderdate: "7 July,2023",
      orderamount: "₹1200",
      transaction: "₹22",
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-700">
        Payments | This Month
      </h2>

      <div className="flex flex-wrap gap-2">
        <Chip label={"Pending payouts (23)"} isHighlighted />
        <Chip label={"Eligible for payout (2)"} />
        <Chip label={"Completed payouts (14)"} />
        <Chip label={"Refunds (2)"} />
      </div>

      <div className="">
        <div className="flex items-center justify-between py-4">
          <input
            type="text"
            placeholder="Order id or Transaction id"
            className="w-full max-w-xs border py-1 rounded-md px-3 bg-white outline-none"
          />

          <div className="flex items-center gap-2">
            <button className="flex items-center gap-1 text-sm text-gray-600 bg-white border p-2 rounded-md">
              Sort
              <AdjustmentsVerticalIcon className="w-4 h-4" />
            </button>

            <button className="flex items-center gap-1 text-sm text-gray-600 bg-white border p-2 rounded-md">
              <FaDownload className="w-4 h-4" />
            </button>
          </div>
        </div>

        <Table>
          <Thead>
            <Tr>
              <Th>Order Id</Th>
              <Th>Order date</Th>
              <Th>Order amount</Th>
              <Th>Transaction fees</Th>
            </Tr>
          </Thead>

          <Tbody>
            {tables.map(
              ({ orderId, orderdate, orderamount, transaction }, i) => {
                return (
                  <Tr key={i}>
                    <Td className="text-[#186cb4] font-medium">{orderId}</Td>
                    <Td>{orderdate}</Td>
                    <Td>{orderamount}</Td>
                    <Td>{transaction}</Td>
                  </Tr>
                );
              }
            )}
          </Tbody>
        </Table>
        <div className="flex justify-center items-center space-x-3 p-4">
          <ButtonChip
            label={
              <>
                {" "}
                <ChevronLeftIcon className="w-4 h-4" /> Previous
              </>
            }
            isBorder
          />
          <ButtonChip label={1} />
          <ButtonChip
            label={
              <>
                {" "}
                <HiOutlineDotsHorizontal />
              </>
            }
          />
          <ButtonChip label={10} isBlue={true} />
          <ButtonChip label={11} />
          <ButtonChip label={12} />
          <ButtonChip label={13} />
          <ButtonChip label={14} />
          <ButtonChip label={15} />
          <ButtonChip label={16} />
          <ButtonChip label={17} />
          <ButtonChip label={18} />
          <ButtonChip
            label={
              <>
                {" "}
                Next <ChevronRightIcon className="w-4 h-4" />
              </>
            }
            isBorder
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentTable;
