import { create } from "zustand";

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
  profExperience: string;
  profExperienceJob: string;
  profExperienceDate: string;
  technicalSkills: string;
  education: string;
  educationDate: string;
  educationGraduation: string;
  projects: string;
  addInfo: string;
};

interface FormState {
  personal: Personal;
  professional: Professional;
  setPersonal: (personal: Personal) => void;
  setProfessional: (professional: Professional) => void;
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
    profSummary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend fermentum placerat. Aliquam auctor massa elit, feugiat lobortis libero cursus quis. Cras ullamcorper cursus ex eu pellentesque. Nunc blandit eu nibh et tempor. Ut sagittis, nisi quis blandit vulputate, orci mauris tristique dolor, quis fringilla nulla lectus ut ligula. In aliquet turpis magna, id auctor tellus egestas nec. csd",
    profExperience: "",
    profExperienceDate: "",
    profExperienceJob: "",
    technicalSkills: "lalala\nlalala\nlalala",
    education: "",
    educationDate: "",
    educationGraduation: "",
    projects: "",
    addInfo: "",
  },
  setPersonal: (newPersonal: Personal) =>
    set((state) => ({
      personal: { ...state.personal, ...newPersonal },
    })),
  setProfessional: (newProfessional: Professional) =>
    set((state) => ({
      professional: { ...state.professional, ...newProfessional },
    })),
}));
