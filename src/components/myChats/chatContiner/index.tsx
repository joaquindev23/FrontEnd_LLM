"use client";
import React, { useContext, useState } from "react";
import IABubble from "../bubbles/iaBubble";
import UserBubble from "../bubbles/userBubble";
import { GetChatID } from "@/hooks/getChatID";
import { SendMessageContext } from "@/contex/sendMessageContext";
import MyMessages from "@/interfaces";
import { BackButton, Clear } from "@/app/icons";


type Props = { children: React.ReactNode };

export default function ChatContiner({ children }: Props) {
  const [Show, setshow] = useState(true);
  const chatId = GetChatID();
  const { sendMessages, setSendMessages } = useContext(SendMessageContext)

  const clearChat=()=>{
    setSendMessages([])
    localStorage.removeItem('userMessage')
  }

  return (
    <div className={`w-full ${!Show && "max-sm:-z-10"} max-sm:absolute max-sm:h-screen`}>
      <div className="bg-core-thBg h-full rounded-xl max-sm:rounded-none flex flex-col items-center">
        <nav className="h-16 bg-core-secBg w-full text-core-text flex  items-center justify-end max-sm:justify-between px-5 text-xl font-semibold">
          <button className="max-sm:inline-block hidden" onClick={() => setshow(false)}> <BackButton/> </button>
          <button className="flex flex-row gap-3 items-center group" onClick={()=>{clearChat()}}>
            <span className="text-xs font-normal text-[#ababab] hidden group-hover:inline-block max-sm:inline-block">
              Clear Chat
            </span>
            <Clear></Clear>
          </button>
        </nav>
        <div className="flex flex-col p-4 max-sm:w-full max-md:w-[600px] w-[800px] h-full justify-between  ">
          <div className="flex flex-col space-y-4 overflow-y-auto">
            {sendMessages.map((message: MyMessages) => (
              <li key={message.text} className="list-none">
                {message.isUser === true && <UserBubble textMessage={message.text} />}
                {message.isUser === false && <IABubble textMessage={message.text} />}
              </li>
            ))}

          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
