import React from "react";

interface ValuesType {
  [key: string]: string;
}

interface EventHandlerProps {
  setValues: React.Dispatch<React.SetStateAction<ValuesType>>;
}

export function useEventHandler({ setValues }: EventHandlerProps) {
  const handleDropdownChange = (selectedValue: string, name: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: selectedValue,
    }));
  };

  return {
    handleDropdownChange,
  };
}
