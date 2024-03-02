import React from "react";

interface FormInputProps {
  label?: string;
  type: string;
  name: string;
  placeholder?: string;
  width?: string;
  value: string;
  onChange: (value: string, name: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  name,
  placeholder,
  width,
  value,
  onChange,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onChange(value, name);
  };

  return (
    <div className={`flex flex-col w-[${width}] gap-2`}>
      {label && <label className="text-gray-600 text-sm">{label}</label>}
      <input
        type={type}
        name={name}
        className="w-full rounded-md h-10 p-2 py-4 text-base shadow"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default FormInput;
