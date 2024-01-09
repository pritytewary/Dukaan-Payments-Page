import { twMerge } from "tailwind-merge";

const Table = ({ children, className = "" }) => {
  return (
    <table
      className={twMerge("w-full text-sm text-left text-gray-500", className)}
    >
      {children}
    </table>
  );
};

const Thead = ({ children, className = "" }) => {
  return (
    <thead
      className={twMerge(
        "text-sm text-gray-700 capitalize bg-gray-200 border",
        className
      )}
    >
      {children}
    </thead>
  );
};

const Tbody = ({ children, className = "" }) => {
  return (
    <tbody className={twMerge("divide-y text-sm divide-gray-200", className)}>
      {children}
    </tbody>
  );
};

const Tr = ({ children, className = "" }) => {
  return (
    <tr className={twMerge("hover:bg-gray-100", className)}>{children}</tr>
  );
};

const Th = ({ children, className = "" }) => {
  return (
    <th className={twMerge("p-3 font-semibold", className)}>{children}</th>
  );
};

const Td = ({ children, className = "" }) => {
  return <td className={twMerge("px-3 py-2", className)}>{children}</td>;
};

export { Table, Thead, Tbody, Tr, Th, Td };
