import { useEffect, useState } from "react";
import { InpulField } from "../Input";

interface TextAreaFieldProps {
  name: string;
  id: string;
  label: string;
  cols: number;
  rows: number;
  maxlength?: number;
  moreInfo?: boolean;
  limited?: boolean;
  setValue: (v: string) => void;
}

export function TextAreaField({
  name,
  id,
  label,
  cols,
  rows,
  maxlength,
  moreInfo,
  limited,
  setValue,
}: TextAreaFieldProps) {
  const [textAreaValue, setTextAreaValue] = useState("");

  function onChange(e: React.ChangeEvent<HTMLTextAreaElement> | string) {
    if (typeof e === "string") setTextAreaValue(e);
    else setTextAreaValue(e.target.value);
  }

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setValue(textAreaValue);
    }, 1000);

    return () => clearTimeout(delayInputTimeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textAreaValue]);

  return (
    <div className="space-y-3">
      {moreInfo ? (
        <div className="flex w-full h-auto space-x-3">
          <InpulField
            label="Data Inicial"
            name={`date-${label}-1`}
            id={`date-${label}-1`}
            type="text"
            setValue={(e) => onChange(e)}
          />
          <InpulField
            label="Data final"
            name={`date-${label}-2`}
            id={`date-${label}-2`}
            type="text"
            setValue={(e) => onChange(e)}
          />
        </div>
      ) : (
        <div className="w-full h-auto flex items-center space-x-5">
          <h4 className="text-xl font-bold">{label}</h4>
        </div>
      )}
      {moreInfo && (
        <div className="space-y-2">
          <label htmlFor={id}>Descrição</label>
        </div>
      )}
      <div className="w-hull h-auto rounded-lg border border-black flex items-center justify-center overflow-auto py-2 px-3">
        <textarea
          name={name}
          id={id}
          cols={cols}
          rows={rows}
          maxLength={maxlength}
          className="w-full h-full resize-none outline-none"
          value={textAreaValue}
          onChange={(e) => onChange(e)}
        ></textarea>
      </div>
      {limited && (
        <div className="w-full flex justify-end">
          <p>máximo {400}</p>
        </div>
      )}
    </div>
  );
}
