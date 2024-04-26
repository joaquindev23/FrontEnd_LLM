import ChatCardLayout from "@/components/helpers/chatCardLayout";
import Image from "next/image";
import React from "react";

type Props = { id?: string };

export default function IACard({ id }: Props) {
  return (
    <ChatCardLayout id={id}>
      <Image
        src={"/assets/logo.png"}
        alt="IA img"
        width={50}
        height={50}
        className="rounded-full size-9"
      ></Image>
      <div className="w-full">
        <h3 className="text-sm text-core-text font-semibold overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
          Warning Messages Samples
        </h3>
        <p className="text-core-secText text-sm max-w-[80%] overflow-hidden whitespace-nowrap text-ellipsis">
          Lorem consectetur adipisicing elit. Tempora consequa rcitationem!
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </ChatCardLayout>
  );
}
