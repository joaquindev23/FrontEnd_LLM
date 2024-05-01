import ChatSideBar from "@/components/helpers/chatSideBar";
import ChatsCard from "@/components/myChats/card";
import ChatContiner from "@/components/myChats/chatContiner";
import ChatSender from "@/components/myChats/chatSender";
import React from "react";

type Props = {};

export default function MyChats({}: Props) {
  return (
    <section className="flex bg-core-secBg w-full h-full max-sm:justify-center">
      <ChatSideBar title="Mis Chats">
          <ChatsCard id="1" />
          <ChatsCard />
          <ChatsCard />
          <ChatsCard /> 
      </ChatSideBar>
      <ChatContiner>
        <ChatSender />
      </ChatContiner>
    </section>
  );
}
