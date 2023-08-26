import Image from "next/image";
import { SkillProps } from "@/types";

const SkillItem = ({ name, description, imgSrc }: SkillProps) => {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="flex items-center gap-4">
        {imgSrc && (
          <Image
            src={imgSrc}
            width="70"
            height="70"
            style={{ borderRadius: "100px" }}
            alt={name}
            className="object-cover rounded-lg border-[1px] border-GRAY_LIGHT border-solid w-25 h-25"
          />
        )}
        <h4>{name}</h4>
      </div>
      <blockquote className="whitespace-pre-wrap text-center">{`${description}`}</blockquote>
    </div>
  );
};

export default SkillItem;
