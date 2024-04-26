"use client";
import React, { useState } from "react";
import IABubble from "../bubbles/iaBubble";
import UserBubble from "../bubbles/userBubble";
import { GetChatID } from "@/hooks/getChatID";

type Props = { children: React.ReactNode };

export default function ChatContiner({ children }: Props) {
  const [Show, setshow] = useState(true);
  const chatId = GetChatID();
  return (
    <div className={`w-full ${!Show && "max-sm:-z-10"} max-sm:absolute max-sm:h-screen`}>
      <div className="bg-core-thBg h-full rounded-xl max-sm:rounded-none flex flex-col items-center">
        <nav className="h-16 bg-core-secBg w-full text-core-text flex  items-center px-5 text-xl font-semibold">
          <button onClick={()=>setshow(false)}>{"<-"}</button>
        </nav>
        <div className="flex flex-col p-4 max-w-[800px] h-full justify-between  ">
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
