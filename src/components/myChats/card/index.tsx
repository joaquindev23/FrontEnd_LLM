import Chat from "@/app/icons";
import React from "react";

type Props = {isSelected?:boolean};

export default function ChatsCard({isSelected=false}: Props) {
  return (
    <div className={`flex w-full gap-2 px-2 py-3 ${isSelected && "bg-core-bg "} rounded-xl`}>
      <Chat />
      <div className="w-full">
        <h3 className="text-sm text-core-text font-semibold overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
          Warning Messages Samples
        </h3>
        <p className="text-core-secText text-sm w-full line-clamp-2">
            Lorem consectetur adipisicing elit. Tempora consequa rcitationem! Lorem ipsum dolor sit amet.
        </p>
      </div>
      <span className="text-xs ml-auto text-core-secText">New</span>
    </div>
  );
}
