import ProfileCard from "@/components/profile/profilecard"
import React from "react";

type Props = {};

export default function MyChats({}: Props) {
  return (
    <main className="h-full bg-core-thBg w-full">
      <ProfileCard />
    </main>
  );
}
