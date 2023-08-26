import ContactItem from "../ContactItem";
import Introduce from "./Introduce";
import profileImage from "@/assets/images/profile1.png"; // 이미지 파일을 import로 가져옴

import { DataProps } from "@/types";

const Information = ({ information }: Pick<DataProps, "information">) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex">
          <div className="flex-1">
            <img
              src={profileImage.src}
              alt="KGYURY_PROFILE"
              style={{ width: "150px", height: "165px", borderRadius: "50px" }}
            />
          </div>
          <div className="flex-3">
            <h1 className="leading-[1.15]">
              {/* 포지션에 맞게 문구를 수정해주세요. 혹은, 본인이 원하는 대로 문구를 바꿔주세요. */}
              <span className="text-PRIMARY font-semibold">한 조각</span>이 되고 싶은
              <br /> 백엔드개발자,{" "}
              <span className="text-PRIMARY font-semibold">{information.name}</span>
              입니다.
            </h1>
            <div className="flex gap-1">
              {information.contact.map((contact) => (
                <ContactItem
                  key={contact.id}
                  className="text-BLACK hover:text-PRIMARY_HEAVY dark:hover:text-PRIMARY_HEAVY"
                  {...contact}
                >
                  {contact.name}
                </ContactItem>
              ))}
            </div>
          </div>
        </div>

        <div></div>
      </div>
      <Introduce markdown={information.markdown} />
    </div>
  );
};

export default Information;
