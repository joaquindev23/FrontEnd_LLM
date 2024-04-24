import ChatSideBar from "@/components/helpers/chatSideBar";
import ChatsCard from "@/components/myChats/card";
import ChatContiner from "@/components/myChats/chatContiner";
import ChatSender from "@/components/myChats/chatSender";
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
      <ChatContiner>
          <ChatSender /></ChatContiner>
    </main>
  );
}
