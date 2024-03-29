import React from "react";

export const StarBig = ({ size, stroke, color }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 324 324"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_6_48)">
        <path
          stroke={stroke}
          stroke-width="3"
          d="M161.693 -0.193756L163.282 7.50162C179.32 85.1659 240.476 145.574 318.331 160.654L323.551 161.665L318.331 162.676C240.476 177.756 179.32 238.164 163.282 315.829L161.693 323.524L160.788 318.778C145.694 239.594 83.7645 177.664 4.58094 162.57L-0.165771 161.665L4.5808 160.76C83.7645 145.666 145.694 83.7365 160.788 4.55282L161.693 -0.193756Z"
        />
      </g>
      <defs>
        <clipPath id="clip0_6_48">
          <rect width={size} height={size} fill={color} />
        </clipPath>
      </defs>
    </svg>
  );
};
