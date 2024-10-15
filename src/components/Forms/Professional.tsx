"use client";

import { useFormStore } from "@/app/store/form";
import { TextAreaField } from "./TextArea";
import { useEffect, useState } from "react";
import { CircleButton } from "./Button/Circle";
import { Experience } from "@/app/store/experience";
import { Education } from "@/app/store/education";
import { TextAreaInputField } from "./TextAreaInput";

export function FormProfessional() {
  const { professional, setProfessional } = useFormStore((state) => state);
  const [count, setCount] = useState(0);
  const [experienceList, setExperienceList] = useState<number[]>([]);
  const [countEducation, setCountEducation] = useState(0);
  const [educationList, setEducationList] = useState<number[]>([]);

  function addExperience() {
    setCount((prev: number) => (prev += 1));
  }
  useEffect(() => {
    const data = Array.from(Array(count).keys());
    console.log(data);
    setExperienceList(data);
  }, [count]);

  function addEducation() {
    setCountEducation((prev: number) => (prev += 1));
  }

  useEffect(() => {
    const data = Array.from(Array(countEducation).keys());
    console.log(data);
    setEducationList(data);
  }, [countEducation]);

  return (
    <form className="space-y-8 ">
      <TextAreaField
        id="summary"
        name="summary"
        label={"Resumo Profissional"}
        cols={5}
        rows={5}
        maxlength={400}
        limited
        setValue={(e) => {
          setProfessional({ ...professional, profSummary: e });
        }}
      />
      <TextAreaField
        id="techSkills"
        name="techSkills"
        label={"Habilidades Técnicas"}
        cols={5}
        rows={5}
        maxlength={400}
        limited
        setValue={(e) => {
          setProfessional({ ...professional, technicalSkills: e });
        }}
      />
      <div className="space-y-3">
        <div className="w-full h-auto flex items-center space-x-5">
          <h4 className="text-xl font-bold">Experiência Profissional</h4>
          <CircleButton onClick={addExperience} />
        </div>
        {experienceList.map((idx) => (
          <TextAreaInputField
            key={`experinece-${idx}`}
            id={idx}
            name="experience"
            label={"Experiência Profissional"}
            cols={5}
            rows={5}
            maxlength={400}
            limited
            category="experience"
            setValue={(e) => {
              const idExists = professional.experience?.some(
                (item) => item.id === e.id
              );

              if (idExists) {
                const updatedExperience = professional.experience.map((item) =>
                  item.id === e.id ? e : item
                );

                setProfessional({
                  ...professional,
                  experience: updatedExperience,
                });
              } else {
                const updatedExperience = [
                  ...(professional.experience || []),
                  e,
                ] as Experience[];

                setProfessional({
                  ...professional,
                  experience: updatedExperience,
                });
              }
            }}
          />
        ))}
      </div>

      <div className="space-y-3">
        <div className="w-full h-auto flex items-center space-x-5">
          <h4 className="text-xl font-bold">Educação</h4>
          <CircleButton onClick={addEducation} />
        </div>
        {educationList.map((idx) => (
          <TextAreaInputField
            key={`education-${idx}`}
            id={idx}
            name="education"
            label={"Educação"}
            cols={5}
            rows={5}
            maxlength={400}
            limited
            category="education"
            setValue={(e) => {
              const idExists = professional.education?.some(
                (item) => item.id === e.id
              );

              if (idExists) {
                const updatedEducation = professional.education.map((item) =>
                  item.id === e.id ? e : item
                );

                setProfessional({
                  ...professional,
                  education: updatedEducation,
                });
              } else {
                const updatedEducation = [
                  ...(professional.education || []),
                  e,
                ] as Education[];

                setProfessional({
                  ...professional,
                  education: updatedEducation,
                });
              }
            }}
          />
        ))}
      </div>
    </form>
  );
}
