import ProfileCard from "@/components/Profile/Profilecard" 
import React from "react";

type Props = {};

export default function MyChats({}: Props) {
  return (
    <main className="h-full bg-core-thBg w-full">
      <ProfileCard />
    </main>
  );
}