"use client";
import Chat from "@/app/icons";
import ChatCardLayout from "@/components/helpers/chatCardLayout";
import { GetChatID } from "@/hooks/getChatID";
import React from "react";

type Props = { id?: string };

export default function ChatsCard({ id }: Props) {
  const chatId = GetChatID();

  return (
    <ChatCardLayout id={id}>
      <Chat />
      <div className="w-full">
        <h3 className="text-sm text-core-text font-semibold overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
          Warning Messages Samples
        </h3>
        <p className="text-core-secText text-sm w-full line-clamp-2">
          Lorem consectetur adipisicing elit. Tempora consequa rcitationem!
          Lorem ipsum dolor sit amet.
        </p>
      </div>
      <span className="text-xs ml-auto text-core-secText">New</span>
    </ChatCardLayout>
  );
}
