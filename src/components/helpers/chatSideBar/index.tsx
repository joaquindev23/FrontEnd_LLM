import React from "react";
import IconBtn from "../iconBtn";
import { Add } from "@/app/icons";

type Props = { children: React.ReactNode; title: string };

export default function ChatSideBar({ children, title }: Props) {
  return (
    <section className="bg-core-secBg w-[500px] max-sm:w-full h-full px-5 py-2 overflow-x-hidden overflow-y-auto ">
      <div >

      <div className="flex items-center justify-between h-14">

        <h2 className="text-core-text font-semibold text-xl ">{title}</h2>
        <div className="flex gap-3">
          <IconBtn isOn={true}>
            <Add />
          </IconBtn>
          <IconBtn isOn={false}>
            <span className="text-core-text pb-2 font-bold">...</span>
          </IconBtn>
        </div>
        
      </div>
      <div className="flex flex-col gap-3 flex-1 h-20 ">{children}</div>
      </div>

    </section>
  );
}
