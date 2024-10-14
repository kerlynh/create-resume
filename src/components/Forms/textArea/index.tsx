import { useEffect, useState } from "react";
import { InpulField } from "../Input";
import { Checkbox } from "../Checkbox";
import { Experience } from "@/app/store/experience";
import { Education } from "@/app/store/education";

interface TextAreaFieldProps {
  name: string;
  id: string;
  label: string;
  cols: number;
  rows: number;
  maxlength?: number;
  moreInfo?: boolean;
  limited?: boolean;
  category?: "experience" | "education";
  setValue: (v: string | Experience | Education) => void;
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
  category,
  setValue,
}: TextAreaFieldProps) {
  const [textAreaValue, setTextAreaValue] = useState("");
  const [info, setInfo] = useState<Experience | Education>({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    category: category!,
    isCurrent: false,
    id: Date.now(),
  });

  function onChange(
    e: React.ChangeEvent<HTMLTextAreaElement> | string | boolean,
    type: string
  ) {
    if (moreInfo) {
      if (type === "isCurrent") {
        console.log("current", e);
        setInfo((prev: any) => {
          return {
            ...prev,
            isCurrent: e,
            endDate: e === true && "até o momento",
          };
        });
      } else setInfo((prev: any) => ({ ...prev, [type]: e }));
    }
    if (typeof e === "string" && type === "description") {
      setTextAreaValue(e);
    }
  }

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      const value = moreInfo ? info : textAreaValue;
      setValue(value);
    }, 1000);

    return () => clearTimeout(delayInputTimeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textAreaValue, moreInfo, info]);

  return (
    <div className="space-y-3">
      {moreInfo ? (
        <>
          <InpulField
            label="Nome"
            name="company"
            id="company"
            type="text"
            setValue={(e) => onChange(e, "title")}
          />
          <div className="flex w-full h-auto space-x-3">
            <InpulField
              label="Data Inicial"
              name={`date-${label}-1`}
              id={`date-${label}-1`}
              type="text"
              setValue={(e) => onChange(e, "startDate")}
            />
            <InpulField
              label="Data final"
              name={`date-${label}-2`}
              id={`date-${label}-2`}
              type="text"
              disabled={info.isCurrent}
              setValue={(e) => onChange(e, "endDate")}
            />
          </div>
          <div className="w-full h-auto flex justify-end">
            <Checkbox
              label="Atualmente"
              value={info.isCurrent}
              onChange={(e) => onChange(e, "isCurrent")}
            />
          </div>
        </>
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
          onChange={(e) => onChange(e.target.value, "description")}
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
