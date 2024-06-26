'use client'
import { NewIAMagic, NewSendArrow, PeperClip } from "@/app/icons";
import useSendMessage from "@/hooks/useSendMessage";
import React, { useState } from "react";
import FileBox from "../fileBox";


type Props = {};

export default function ChatSender({ }: Props) {
  const [customInputValue, setCustomInputValue, inputExtract] = useSendMessage() as any
  const [showComponent, setShowComponent] = useState(false)

  const SendFileBox = (e: any) => {
    e.preventDefault()
    setShowComponent(!showComponent)
  }

  return (
    <>
      {showComponent === true && <FileBox />}
      <form action={inputExtract} className="self-baseline bg-core-secBg space-x-5 flex items-center py-2 px-5 shadow-lg w-full rounded-xl h-12">
        <button className="size-6 rounded-md flex items-center justify-center group">
          <NewIAMagic />
        </button>
        <button onClick={(e) => SendFileBox(e)} className="size-6 rounded-md flex items-center justify-center group">
          <PeperClip />
        </button>
        <input
          required
          type="text" name="inputValue"
          value={customInputValue}
          onChange={(e) => setCustomInputValue(e.currentTarget.value)}
          className="w-full h-full border-none rounded-xl bg-transparent focus:outline-none text-core-text active:border-none"
        />
        <button type="submit" className="size-6 rounded-md flex items-center justify-center " >
          <NewSendArrow customInputValue={customInputValue} />
        </button>
      </form>
    </>
  );

}
