import ChatSideBar from "@/components/helpers/chatSideBar";
import IACard from "@/components/iAs/card";
import ChatContiner from "@/components/myChats/chatContiner";
import ChatSender from "@/components/myChats/chatSender";
import React from "react";

type Props = {};

export default function IAs({}: Props) {
  return (
    <main className="flex h-full bg-core-secBg w-full">
      <ChatSideBar title="Mis Chats">
        <div className="flex flex-col gap-3">
          <IACard />
          <IACard isSelected />
          <IACard />
          <IACard />
        </div>
      </ChatSideBar>
      <ChatContiner>
        <div className="flex items-center">
          <button className="bg-core-primary w-40 h-full rounded-xl mx-10 text-core-text ">+ Add New</button>
          <ChatSender />
        </div>
      </ChatContiner>
    </main>
  );
}
