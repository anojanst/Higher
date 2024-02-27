import React from "react";

interface FormInputProps {
  label?: string;
  placeHolder?: string;
  width?: string;
}

const FormInput: React.FC<FormInputProps> = ({ label, placeHolder, width }) => {
  return (
    <div className={`flex flex-col w-[${width}] gap-2`}>
      <label className="text-gray-600 text-sm">{label}</label>
      <input
        type="text"
        className="w-full rounded-md h-9 p-2 py-4 text-base"
        placeholder={placeHolder}
      />
    </div>
  );
};

export default FormInput;
