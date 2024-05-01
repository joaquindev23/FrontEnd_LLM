"use client";
import React from "react";
import IconBtn from "../iconBtn";
import Chat, { IAs } from "@/app/icons";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {};

const routes = {
  chat: "/app/myChats",
  IAs: "/app/iAs",
};

export default function CoreFunctionButtons({}: Props) {
  const path = usePathname();

  const routeIsOn = (route: string) => path == route;

  return (
    <div className="flex flex-col gap-10 max-sm:flex-row max-sm:w-full max-sm:gap-0 max-sm:justify-around">
      <Link href={routes.chat}>
        <IconBtn isOn={routeIsOn(routes.chat)} isShadow={routeIsOn(routes.chat)}>
          <Chat />
        </IconBtn>
      </Link>

      <Link href={routes.IAs}>
        <IconBtn isOn={routeIsOn(routes.IAs)} isShadow={routeIsOn(routes.IAs)}>
          <IAs />
        </IconBtn>
      </Link>
    </div>
  );
}
