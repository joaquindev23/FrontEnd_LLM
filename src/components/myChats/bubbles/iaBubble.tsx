import React from "react";

type Props = {textMessage?:string};

export default function IABubble({textMessage}: Props) {
  return (
    <div className="flex items-start justify-start">
      <div className="flex flex-col space-y-2 text-sm mx-2 order-1  max-w-[80%] items-start">
        <div>
          <p className="px-4 py-2 rounded-lg rounded-tl-none inline-block bg-core-secBg text-core-text">
           {textMessage}
          </p>
        </div>
      </div>
    </div>
  );
}
