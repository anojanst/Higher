import React from "react";

interface FormInputProps {
  label: string;
}

const FormInput: React.FC<FormInputProps> = ({ label }) => {
  return (
    <div className="flex flex-col w-full gap-2">
      <label className="text-gray-600 text-sm">{label}</label>
      <input type="text" className="w-full rounded-md h-9 p-2 text-base" />
    </div>
  );
};

export default FormInput;
