'use client'
import { GetChatID } from "@/hooks/getChatID";
import Link from "next/link";
import React from "react";

type Props = {  id?: string , children:React.ReactNode};

export default function ChatCardLayout({ id,children }: Props) {
  
  const chatId = GetChatID()
   
  return (
    <Link
      className={`flex w-full gap-2 px-2 py-3  ${
        chatId == id && chatId && "bg-core-bg "
      } rounded-xl items-center`}
      href={"?id=" + id}
    >
    {children}
    </Link>
  );
}
