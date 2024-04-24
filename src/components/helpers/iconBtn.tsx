import React from "react";

type Props = { children: React.ReactNode; isOn: boolean; isShadow?: boolean };

export default function IconBtn({ children, isOn, isShadow }: Props) {
  return (
    <button
      className={`${isOn ? "bg-core-primary  " : "bg-core-secBg"} ${
        isShadow && "shadow-lg shadow-core-primary"
      } size-8 rounded-md flex items-center justify-center`}
    >
      {children}
    </button>
  );
}
