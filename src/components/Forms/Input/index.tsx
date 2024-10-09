"use client";

import { useEffect, useState } from "react";

interface InputFieldProps {
  label: string;
  name: string;
  id: string;
  type: string;
  disabled?: boolean;
  required?: boolean;
  setValue: (v: string) => void;
}

export function InpulField({
  label,
  name,
  id,
  type,
  disabled,
  required,
  setValue,
}: InputFieldProps) {
  const [inputValue, setInputValue] = useState("");

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setValue(inputValue);
    }, 1000);

    return () => clearTimeout(delayInputTimeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  return (
    <div className="w-full h-auto space-y-1">
      <label htmlFor={id}>{label}</label>
      <div className="w-hull h-10 rounded-lg border border-black flex items-center justify-center overflow-auto py-2 px-3">
        <input
          type={type}
          name={name}
          id={id}
          value={inputValue}
          disabled={disabled}
          required={required}
          onChange={(e) => onChange(e)}
          className="outline-none w-full h-full"
        />
      </div>
    </div>
  );
}
