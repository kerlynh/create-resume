import { useFormStore } from "@/app/store/form";
import { useStateBrStore } from "@/app/store/stateBr";
import { useEffect, useState } from "react";

export function SelectField() {
  const { aliasState, isLoading, error, getAliasState } = useStateBrStore(
    (state) => state
  );
  const [stateBr, setSateBr] = useState("UF");
  const { personal, setPersonal } = useFormStore((state) => state);

  useEffect(() => {
    getAliasState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setSateBr(e.target.value);
    setPersonal({ ...personal, state: e.target.value });
  }

  return (
    <div className="w-full h-auto space-y-1">
      <label htmlFor="select">Estado</label>
      <div className="w-hull h-10 rounded-lg border border-black flex items-center justify-center overflow-auto py-2 px-3">
        <select
          id="select"
          className={`w-full h-full outline-non`}
          value={stateBr}
          disabled={isLoading}
          onChange={(e) => {
            onChange(e);
          }}
        >
          <option value="" hidden>
            UF
          </option>
          {aliasState.map((alias, idx: number) => {
            return (
              <option key={idx} value={alias}>
                {alias}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}
