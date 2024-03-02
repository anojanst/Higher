import React from "react";

interface ButtonProps {
  text: string;
  width?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, width, onClick }) => {
  return (
    <button
      className={`text-white ${
        width ? `w-${width}` : ""
      } flex-center bg-secondary-500 px-[1rem] py-[8px] rounded-lg`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
