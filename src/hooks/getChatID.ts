
import { useSearchParams } from 'next/navigation'

export const GetChatID = () => {
    
  const chatId = useSearchParams().get("id")
  return chatId

}