import ChatSideBar from "@/components/helpers/chatSideBar";
import IACard from "@/components/iAs/card";
import ChatContiner from "@/components/myChats/chatContiner";
import ChatSender from "@/components/myChats/chatSender";
import React from "react";

type Props = {};

export default function IAs({}: Props) {
  return (
    <section className="flex bg-core-secBg w-full h-full max-sm:justify-center">
      <ChatSideBar title="Mis IAs">
          <IACard />
          <IACard />
          <IACard />
          <IACard />
      </ChatSideBar>
      <ChatContiner>
        <div className="flex items-center">
          <button className="bg-core-primary w-40 h-full rounded-xl mx-10 max-sm:mx-2 max-sm:w-20 max-sm:text-sm text-core-text ">+ Add New</button>
          <ChatSender />
        </div>
      </ChatContiner>
    </section>
  );
}
