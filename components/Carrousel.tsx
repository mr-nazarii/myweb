import React, { useEffect } from "react";
import Image from "next/image";

interface BoxAnimationProps {
  data: string[];
  left: boolean;
}

export const Carrousel: React.FC<BoxAnimationProps> = ({ data, left }) => {
  return (
    <div className={left ? "slider" : "slider-right"}>
      <div className="slide-track">
        {data.map((item, index) => (
          <>
            <div key={index} className="slide">
              {item}
            </div>
            <Image src={"./icons/star.svg"} width={15} height={15} />
          </>
        ))}
      </div>
    </div>
  );
};
