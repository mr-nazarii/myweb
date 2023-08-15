import Image from "next/image";
import React from "react";

export const ScrollMore = () => {
  return (
    <div className="wrapper-scroll">
      <Image src={"./icons/mouse.svg"} width={30} height={30} alt="mouse" />
      Scroll More
    </div>
  );
};
