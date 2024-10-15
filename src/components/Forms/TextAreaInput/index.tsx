import { useEffect, useState } from "react";
import { InpulField } from "../Input";
import { Checkbox } from "../Checkbox";
import { Experience } from "@/app/store/experience";
import { Education } from "@/app/store/education";

interface TextAreaInputFieldProps {
  name: string;
  id: number;
  label: string;
  cols: number;
  rows: number;
  maxlength?: number;
  limited?: boolean;
  category?: "experience" | "education";
  setValue: (v: Experience | Education) => void;
}

export function TextAreaInputField({
  name,
  id,
  label,
  cols,
  rows,
  maxlength,
  limited,
  category,
  setValue,
}: TextAreaInputFieldProps) {
  const [info, setInfo] = useState<Experience | Education>({
    title: "",
    description: "",
    startDate: "",
    endDate: "",
    category: category!,
    isCurrent: false,
    id: id,
    position: "",
  });

  function onChange(
    e: React.ChangeEvent<HTMLTextAreaElement> | string | boolean,
    type: string
  ) {
    if (type === "isCurrent") {
      setInfo((prev: any) => {
        return {
          ...prev,
          isCurrent: e,
          endDate: e === true && "até o momento",
        };
      });
    } else setInfo((prev: any) => ({ ...prev, [type]: e }));
  }

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setValue(info);
    }, 1000);

    return () => clearTimeout(delayInputTimeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [info]);

  return (
    <div className="space-y-3">
      <>
        <InpulField
          label="Nome"
          name="company"
          id="company"
          type="text"
          setValue={(e) => onChange(e, "title")}
        />
        <InpulField
          label="Função"
          name={`position`}
          id={`position`}
          type="text"
          setValue={(e) => onChange(e, "position")}
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
      {category === "experience" && (
        <>
          <div className="space-y-2">
            <label htmlFor={`${category}-${id}`}>Descrição</label>
          </div>
          <div className="w-hull h-auto rounded-lg border border-black flex items-center justify-center overflow-auto py-2 px-3">
            <textarea
              name={name}
              id={`${category}-${id}`}
              cols={cols}
              rows={rows}
              maxLength={maxlength}
              className="w-full h-full resize-none outline-none"
              // value={textAreaValue}
              onChange={(e) => onChange(e.target.value, "description")}
            ></textarea>
          </div>
        </>
      )}
      {category === "experience" && limited && (
        <div className="w-full flex justify-end">
          <p>máximo {400}</p>
        </div>
      )}
    </div>
  );
}
