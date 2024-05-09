import { SendMessageContext } from '@/contex/sendMessageContext'
import React, { useContext, useEffect, useState } from 'react'



export default function useSendMessage() {
    const [customInputValue, setCustomInputValue] = useState('')
  
  const {sendMessages, setSendMessages} = useContext(SendMessageContext)
  async function inputExtract() {
    const newMessage = [...sendMessages, { text: customInputValue, isUser: true }]
    setSendMessages(() => newMessage)
    setCustomInputValue('')
  }

  useEffect(() => {
    localStorage.setItem("userMessage", JSON.stringify({ sendMessages }))
  }, [sendMessages])
  return[customInputValue, setCustomInputValue, inputExtract]
}