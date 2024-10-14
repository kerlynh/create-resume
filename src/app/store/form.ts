import { create } from "zustand";
import { Experience } from "./experience";
import { Education } from "./education";

export type Personal = {
  fullname: string;
  jobTitle: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  linkedin: string;
};

export type Professional = {
  profSummary: string;
  experience: Experience[];
  education: Education[];
  technicalSkills: string;
  projects: string;
  addInfo: string;
};

interface FormState {
  personal: Personal;
  professional: Professional;
  setPersonal: (personal: Personal) => void;
  setProfessional: (update: Partial<Professional> | any) => void; // Uso de Partial
}

export const useFormStore = create<FormState>((set) => ({
  personal: {
    fullname: "Lorem Ipsum",
    jobTitle: "Test test",
    address: "Rua João Bueno, 151",
    city: "São Paulo",
    state: "SP",
    phone: "(11) 98483-9785",
    email: "lorem@ipsum.com",
    linkedin: "xxxxxxx-xxxxxx",
  },
  professional: {
    profSummary: "Lorem ipsum dolor sit amet...",
    experience: [],
    education: [],
    technicalSkills: "lalala\nlalala\nlalala",
    projects: "",
    addInfo: "",
  },
  setPersonal: (newPersonal: Personal) =>
    set((state) => ({
      personal: { ...state.personal, ...newPersonal },
    })),
  setProfessional: (update: Partial<Professional>) =>
    set((state) => ({
      professional: {
        ...state.professional,
        ...update,
      },
    })),
}));
