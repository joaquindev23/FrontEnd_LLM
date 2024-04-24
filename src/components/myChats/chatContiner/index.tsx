import React from "react";
import IABubble from "../bubbles/iaBubble";
import UserBubble from "../bubbles/userBubble";

type Props = { children: React.ReactNode };

export default function ChatContiner({ children }: Props) {
  return (
    <div className="pt-16 w-full pr-5 pb-5">
      <div className="w-full bg-core-thBg h-full rounded-xl flex flex-col items-center">
        <div className="flex flex-col p-4 max-w-[800px] h-full w-full justify-between  ">
          <div className="flex flex-col space-y-4 overflow-y-auto">
            <UserBubble />
            <IABubble />
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
