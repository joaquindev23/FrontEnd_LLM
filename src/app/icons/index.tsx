import React from "react";

type Props = {};

export function Add({}: Props) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
      >
        <path
          d="M7 1.12354V12.8467"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.8672 6.98438H1.13281"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </>
  );
}

export default function Chat({}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="15"
      viewBox="0 0 14 15"
      fill="none"
    >
      <path
        d="M13.3996 7.1389C13.402 8.09214 13.1827 9.03248 12.7596 9.88334C12.2579 10.9029 11.4865 11.7605 10.532 12.36C9.57748 12.9596 8.47746 13.2773 7.35515 13.2778C6.41658 13.2803 5.49071 13.0576 4.65294 12.6278L0.599609 14L1.95072 9.88334C1.52756 9.03248 1.30827 8.09214 1.31072 7.1389C1.31115 5.99906 1.62404 4.88185 2.21434 3.91241C2.80464 2.94298 3.64903 2.1596 4.65294 1.65002C5.49071 1.22025 6.41658 0.997535 7.35515 1.00002H7.71071C9.19291 1.08307 10.5929 1.71846 11.6425 2.78453C12.6922 3.8506 13.3178 5.27243 13.3996 6.77779V7.1389Z"
        stroke="#EEEEEE"
        stroke-width="1.2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function IAs({}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
    >
      <line
        x1="1"
        y1="2.35291"
        x2="17.7077"
        y2="2.35291"
        stroke="white"
        stroke-opacity="0.5"
        stroke-width="2"
        stroke-linecap="round"
      />
      <line
        x1="1"
        y1="9.05884"
        x2="17.7077"
        y2="9.05884"
        stroke="#999999"
        stroke-opacity="0.8"
        stroke-width="2"
        stroke-linecap="round"
      />
      <line
        x1="1"
        y1="15.7646"
        x2="17.7077"
        y2="15.7646"
        stroke="white"
        stroke-opacity="0.5"
        stroke-width="2"
        stroke-linecap="round"
      />
      <ellipse
        cx="12.6554"
        cy="2.79412"
        rx="2.75113"
        ry="2.79412"
        fill="white"
      />
      <ellipse
        cx="6.05191"
        cy="9.50005"
        rx="2.75113"
        ry="2.79412"
        fill="white"
      />
      <ellipse
        cx="12.6554"
        cy="16.2059"
        rx="2.75113"
        ry="2.79412"
        fill="white"
      />
    </svg>
  );
}
