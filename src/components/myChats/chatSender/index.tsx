import { NewIAMagic, NewSendArrow, PeperClip } from "@/app/icons";
import React from "react";

type Props = {};

export default function ChatSender({ }: Props) {
  return (
    <div className="self-baseline bg-core-secBg space-x-5 flex items-center py-2 px-5 shadow-lg w-full rounded-xl h-12">
      <button className="size-6 rounded-md flex items-center justify-center group">
        <NewIAMagic />
      </button>
      <button className="size-6 rounded-md flex items-center justify-center group">
        <PeperClip />
      </button>
      <input
        type="text"
        className="w-full h-full border-none rounded-xl bg-transparent focus:outline-none text-core-text active:border-none"
      />
      <button className="size-6 rounded-md flex items-center justify-center group">
        <NewSendArrow />
      </button>
    </div>
  );
}
