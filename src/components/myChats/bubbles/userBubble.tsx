import React from "react";

type Props = {text?:string};

export default function UserBubble({text}: Props) {
  return (
    <div className="flex items-end justify-end">
    <div className="flex flex-col space-y-2 text-sm  max-w-[80%] mx-2 order-1 items-start">
      <div>
        <span className="px-4 py-2 rounded-lg rounded-tr-none inline-block bg-core-bbBg text-white">
          Hola, ¿cómo estás?
        </span>
      </div>
    </div>
  </div>
  );
}
