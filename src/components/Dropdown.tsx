import React from "react";

interface Option {
  option: string;
}

interface DropdownProps {
  name: string;
  defaultValue: string;
  options: Option[];
  value: string;
  onChange: (selectedValue: string, name: string) => void;
}

export default function Dropdown({
  name,
  defaultValue,
  options,
  value,
  onChange,
}: DropdownProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    onChange(selectedValue, name);
  };
  return (
    <select
      className="w-full p-[8px] rounded-lg bg-white border border-gray-500 cursor-pointer"
      name={name}
      onChange={handleChange}
      value={value}
    >
      <option value="">{defaultValue}</option>
      {options.map((item, index) => (
        <option key={index} value={item.option}>
          {item.option}
        </option>
      ))}
    </select>
  );
}
