"use client";

import { useFormStore } from "@/app/store/form";
import { TextAreaField } from "./TextArea";
import { useEffect, useState } from "react";
import { CircleButton } from "./Button/Circle";
import { Experience } from "@/app/store/experience";
import { Education } from "@/app/store/education";

export function FormProfessional() {
  const { professional, setProfessional } = useFormStore((state) => state);
  const [count, setCount] = useState(0);
  const [experienceList, setExperienceList] = useState<React.JSX.Element[]>([]);
  const [countEducation, setCountEducation] = useState(0);
  const [educationList, setEducationList] = useState<React.JSX.Element[]>([]);

  function addExperience() {
    setCount((prev: number) => (prev += 1));
  }

  useEffect(() => {
    const newlist = [...experienceList];

    newlist.push(
      <TextAreaField
        key={`experinece-${experienceList.length}`}
        id={`experience-${count}`}
        name="experience"
        label={"Experiência Profissional"}
        cols={5}
        rows={5}
        moreInfo
        maxlength={400}
        limited
        category="experience"
        setValue={(e) => {
          if (
            typeof e !== "string" &&
            e.description &&
            e.category === "experience"
          ) {
            const updatedExperience = [
              ...professional.experience,
              e,
            ] as Experience[];

            setProfessional({
              ...professional,
              experience: updatedExperience,
            });
          }
        }}
      />
    );
    setExperienceList(newlist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, professional.experience]);

  function addEducation() {
    setCountEducation((prev: number) => (prev += 1));
  }

  useEffect(() => {
    const newlist = [...educationList];

    newlist.push(
      <TextAreaField
        key={`education-${educationList.length}`}
        id={`education-${countEducation}`}
        name="education"
        label={"Educação"}
        cols={5}
        rows={5}
        moreInfo
        maxlength={400}
        limited
        category="education"
        setValue={(e) => {
          if (
            typeof e !== "string" &&
            e.description &&
            e.category === "education"
          ) {
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
    );
    setEducationList(newlist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countEducation, professional.education]);

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
          if (typeof e === "string")
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
          if (typeof e === "string")
            setProfessional({ ...professional, technicalSkills: e });
        }}
      />
      <div className="space-y-3">
        <div className="w-full h-auto flex items-center space-x-5">
          <h4 className="text-xl font-bold">Experiência Profissional</h4>
          <CircleButton onClick={() => addExperience()} />
        </div>
        {...experienceList}
      </div>

      <div className="space-y-3">
        <div className="w-full h-auto flex items-center space-x-5">
          <h4 className="text-xl font-bold">Educação</h4>
          <CircleButton onClick={() => addEducation()} />
        </div>
        {...educationList}
      </div>
      <TextAreaField
        id="projects"
        name="projects"
        label={"Projetos (Opcional)"}
        cols={5}
        rows={5}
        maxlength={400}
        limited
        setValue={(e) => {
          if (typeof e === "string")
            setProfessional({ ...professional, projects: e });
        }}
      />
      <TextAreaField
        id="addInfo"
        name="addInfo"
        label={"Outras Informações (Opcional)"}
        cols={5}
        rows={5}
        maxlength={400}
        limited
        setValue={(e) => {
          if (typeof e === "string")
            setProfessional({ ...professional, addInfo: e });
        }}
      />
    </form>
  );
}
