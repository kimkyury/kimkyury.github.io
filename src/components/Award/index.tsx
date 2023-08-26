import SectionTitle from "../SectionTitle";
import AwardItem from "./AwardItem";

import { DataProps } from "@/types";

const Award = ({ award }: Pick<DataProps, "award">) => {
  return (
    <div>
      <SectionTitle>수상 이력</SectionTitle>
      <div className="flex flex-col gap-24">
        {[...award].reverse().map((certificate) => (
          <AwardItem key={certificate.id} {...certificate} />
        ))}
      </div>
    </div>
  );
};

export default Award;