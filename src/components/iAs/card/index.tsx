import Image from "next/image";
import React from "react";

type Props = { isSelected?: boolean };

export default function IACard({ isSelected = false }: Props) {
  return (
    <div
      className={`flex w-full gap-2 px-2 py-3 ${
        isSelected && "bg-core-bg "
      } rounded-xl items-center`}
    >
        <Image src={"/assets/logo.png"} alt='IA img' width={50} height={50} className="rounded-full"></Image>
      <div className="w-full">
        <h3 className="text-sm text-core-text font-semibold overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">
          Warning Messages Samples
        </h3>
        <p className="text-core-secText text-sm max-w-[80%] overflow-hidden whitespace-nowrap text-ellipsis">
          Lorem consectetur adipisicing elit. Tempora consequa rcitationem!
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
  );
}
