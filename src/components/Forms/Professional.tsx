"use client";

import { useFormStore } from "@/app/store/form";
import { TextAreaField } from "./textArea";
import { useEffect, useState } from "react";
import { CircleButton } from "./Button/Circle";

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
        key={count}
        id={`experience-${count}`}
        name="experience"
        label={"Experiência Profissional"}
        cols={5}
        rows={5}
        moreInfo
        maxlength={400}
        limited
        setValue={(e) =>
          setProfessional({ ...professional, profExperience: e })
        }
      />
    );
    setExperienceList(newlist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

  function addEducation() {
    setCountEducation((prev: number) => (prev += 1));
  }

  useEffect(() => {
    const newlist = [...educationList];

    newlist.push(
      <TextAreaField
        key={countEducation}
        id={`education-${countEducation}`}
        name="education"
        label={"Educação"}
        cols={5}
        rows={5}
        moreInfo
        maxlength={400}
        limited
        setValue={(e) => setProfessional({ ...professional, education: e })}
      />
    );
    setEducationList(newlist);
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        setValue={(e) => setProfessional({ ...professional, profSummary: e })}
      />
      <div className="space-y-3">
        <div className="w-full h-auto flex items-center space-x-5">
          <h4 className="text-xl font-bold">Experiência Profissional</h4>
          <CircleButton onClick={() => addExperience()} />
        </div>
        {...experienceList}
      </div>
      <TextAreaField
        id="techSkills"
        name="techSkills"
        label={"Habilidades Técnicas"}
        cols={5}
        rows={5}
        maxlength={400}
        limited
        setValue={(e) =>
          setProfessional({ ...professional, technicalSkills: e })
        }
      />
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
        setValue={(e) => setProfessional({ ...professional, projects: e })}
      />
      <TextAreaField
        id="addInfo"
        name="addInfo"
        label={"Outras Informações (Opcional)"}
        cols={5}
        rows={5}
        maxlength={400}
        limited
        setValue={(e) => setProfessional({ ...professional, addInfo: e })}
      />
    </form>
  );
}
