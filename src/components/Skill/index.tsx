import SectionTitle from "../SectionTitle";
import SkillItem from "./SkillItem";

import { DataProps } from "@/types";

const Skill = ({ skill }: Pick<DataProps, "skill">) => {
  return (
    <>
      <div>
        <SectionTitle>Skills</SectionTitle>
        <div className="grid grid-cols-3 gap-8">
          {[...skill].map((skill) => (
            <SkillItem key={skill.id} {...skill} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skill;
