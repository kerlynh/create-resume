import { create } from "zustand";

export type Experience = {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  category: string;
  id: number;
};

// interface ExperienceState {
//   experience: Experience;
//   setExperience: (experience: Experience) => void;
// }

// export const useExperienceStore = create<ExperienceState>((set) => ({
//   experience: {
//     title: "",
//     description: "",
//     startDate: "",
//     endDate: "",
//     isCurrent: false,
//   },
//   setExperience: (newExperience: Experience) =>
//     set((state) => ({
//       experience: { ...state.experience, ...newExperience },
//     })),
// }));
