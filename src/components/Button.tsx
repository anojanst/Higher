import React from "react";

interface ButtonProps {
  text: string;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({ text, width }) => {
  return (
    <button
      className={`text-white w-[${width}] grid place-items-center bg-secondary-500 px-[1rem] py-[8px] rounded-lg`}
    >
      {text}
    </button>
  );
};

export default Button;
