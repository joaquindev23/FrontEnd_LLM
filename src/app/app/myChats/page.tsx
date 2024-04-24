import ChatSideBar from "@/components/helpers/chatSideBar";
import ChatsCard from "@/components/myChats/card";
import React from "react";

type Props = {};

export default function MyChats({}: Props) {
  return (
    <main className="flex h-full bg-core-secBg w-full">
      <ChatSideBar title="Mis Chats">
        <div className="flex flex-col gap-3">
          <ChatsCard />
          <ChatsCard isSelected />
          <ChatsCard />
          <ChatsCard />
        </div>
      </ChatSideBar>
      <div className="pt-16 w-full pr-5 pb-5">
        <div className="w-full bg-core-thBg h-full rounded-xl"></div>
      </div>
    </main>
  );
}
