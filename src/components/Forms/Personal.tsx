"use client";

import { useFormStore } from "@/app/store/form";
import { InpulField } from "./Input";

export function FormPersonal() {
  const { personal, setPersonal } = useFormStore((state) => state);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <form className="space-y-4" onSubmit={(e) => onSubmit(e)}>
      <InpulField
        id="name"
        label="Nome Completo"
        name="name"
        type="text"
        setValue={(e) => setPersonal({ ...personal, fullname: e })}
      />
      <InpulField
        id="jobTitle"
        label="Cargo desejado"
        name="jobTitle"
        type="text"
        setValue={(e) => setPersonal({ ...personal, jobTitle: e })}
      />
      <InpulField
        id="address"
        label="Endereço"
        name="address"
        type="text"
        setValue={(e) => setPersonal({ ...personal, address: e })}
      />
      <div className="flex w-full space-x-3">
        <InpulField
          id="city"
          label="Cidade"
          name="city"
          type="text"
          setValue={(e) => setPersonal({ ...personal, city: e })}
        />
        <InpulField
          id="state"
          label="Estado"
          name="state"
          type="text"
          setValue={(e) => setPersonal({ ...personal, state: e })}
        />
      </div>
      <InpulField
        id="phone"
        label="Telefone"
        name="phone"
        type="number"
        setValue={(e) => setPersonal({ ...personal, phone: e })}
      />
      <InpulField
        id="email"
        label="e-mail"
        name="email"
        type="email"
        setValue={(e) => setPersonal({ ...personal, email: e })}
      />
      <InpulField
        id="linkein"
        label="Linkedin"
        name="linkein"
        type="text"
        setValue={(e) => setPersonal({ ...personal, linkedin: e })}
      />
    </form>
  );
}
