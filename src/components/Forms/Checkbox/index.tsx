import { ChangeEvent } from "react";

interface CheckboxProps {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}

export function Checkbox({ label, value, onChange }: CheckboxProps) {
  function setChecked(e: ChangeEvent<HTMLInputElement>) {
    onChange(e.target.checked);
  }

  return (
    <div className="flex space-x-2  items-center">
      <input type="checkbox" checked={value} onChange={setChecked} />
      <label className="text-sm">{label}</label>
    </div>
  );
}
