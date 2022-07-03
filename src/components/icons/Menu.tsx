import React, { SVGProps } from 'react';

const Menu = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={18} {...props}>
    <g
      data-name="Group 13"
      fill="none"
      stroke="#0bcdd0"
      strokeLinecap="round"
      strokeWidth={2}
    >
      <path data-name="Line 2" d="M1 9h18" />
      <path data-name="Line 3" d="M1 1h18" />
      <path data-name="Line 4" d="M1 17h9" />
    </g>
  </svg>
);

export default Menu;
