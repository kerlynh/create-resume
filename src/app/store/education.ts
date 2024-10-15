import { create } from "zustand";

export type Education = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  category: string;
  id: number;
  position: string;
};

// interface EducationState {
//   education: Education[];
//   setEducation: (education: Education[]) => void;
// }

// export const useEducationStore = create<EducationState>((set) => ({
//   education: {
//     title: "",
//     description: "",
//     startDate: "",
//     endDate: "",
//     isCurrent: false,
//   },
//   setEducation: (newEducation: Education[]) =>
//     set((state) => ({
//       education: { ...state.education, ...newEducation },
//     })),
// }));
