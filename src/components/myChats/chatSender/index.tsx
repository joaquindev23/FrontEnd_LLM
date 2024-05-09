'use client'
import { NewIAMagic, NewSendArrow, PeperClip } from "@/app/icons";
import { SendMessageContext } from "@/contex/sendMessageContext";
import useSendMessage from "@/hooks/useSendMessage";
import React, { useContext, useEffect, useState } from "react";

type Props = {};

export default function ChatSender({ }: Props) {
const [customInputValue, setCustomInputValue, inputExtract]=useSendMessage() as any

  return (
    <form action={inputExtract} className="self-baseline bg-core-secBg space-x-5 flex items-center py-2 px-5 shadow-lg w-full rounded-xl h-12">
      <button className="size-6 rounded-md flex items-center justify-center group">
        <NewIAMagic />
      </button>
      <button className="size-6 rounded-md flex items-center justify-center group">
        <PeperClip />
      </button>
      <input
        type="text" name="inputValue"
        value={customInputValue}
        onChange={(e) => setCustomInputValue(e.currentTarget.value)}
        className="w-full h-full border-none rounded-xl bg-transparent focus:outline-none text-core-text active:border-none"
      />
      <button type="submit" className="size-6 rounded-md flex items-center justify-center group">
        <NewSendArrow />
      </button>
    </form>
  );
}
