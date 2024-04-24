import { IAMagic, SendArrow } from "@/app/icons";
import React from "react";

type Props = {};

export default function ChatSender({}: Props) {
  return (
    <div className="self-baseline bg-core-secBg space-x-5 flex items-center py-2 px-5 shadow-lg w-full rounded-xl h-12">
      <button className="size-8 rounded-md flex items-center justify-center bg-core-thBg">
        <IAMagic />
      </button>
      <input
        type="text"
        className="w-full h-full border-none rounded-xl bg-transparent focus:outline-none text-core-text active:border-none"
      />
      <button className="size-8 rounded-md flex items-center justify-center bg-transparent">
        <SendArrow />
      </button>
    </div>
  );
}
