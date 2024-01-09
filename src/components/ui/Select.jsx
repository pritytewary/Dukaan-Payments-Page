const Select = ({ children, ...props }) => (
  <select {...props} className="rounded-md border-gray-300 py-1 px-2 border">
    {children}
  </select>
);

const Option = ({ children, ...props }) => (
  <option {...props}>{children}</option>
);

export { Select, Option };
