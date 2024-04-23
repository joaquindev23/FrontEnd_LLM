import React from "react";

type Props = { children: React.ReactNode; isOn: boolean };

export default function IconBtn({ children, isOn }: Props) {
  return (
    <div
      className={`${
        isOn ? "bg-core-secBg" : "bg-core-primary shadow-lg shadow-core-primary"
      } size-8 rounded-md flex items-center justify-center`}
    >
      {children}
    </div>
  );
}
