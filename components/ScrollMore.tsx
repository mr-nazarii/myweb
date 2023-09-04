import Image from "next/image";
import React from "react";

export const ScrollMore = () => {
  return (
    <div className="wrapper-scroll">
      <Image src={"./icons/mouse.svg"} width={40} height={40} alt="mouse" />
      Scroll More
    </div>
  );
};
