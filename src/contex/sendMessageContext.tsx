"use client";
import MyMessages from "@/interfaces";
import { createContext, useState } from "react";
type Props = {children:React.ReactNode};

let myLocalStorage = localStorage.getItem("userMessage")
myLocalStorage = JSON.parse(myLocalStorage as string)?.sendMessages || []



export const SendMessageContext = createContext<any>(null);

export function SendMessageProvider({ children }: Props) {
  const [sendMessages, setSendMessages] = useState<MyMessages[]>(myLocalStorage as any)
  return (
    //lo que quieres proveer
    <SendMessageContext.Provider value={{ sendMessages, setSendMessages }}>
      {children}
    </SendMessageContext.Provider>
  );
}
