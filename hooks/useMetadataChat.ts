'use client'

import { useChat } from '@ai-sdk/react'

const useMetadataChat = () => {
  const { messages, input, setInput, handleSubmit, status, append } = useChat({
    api: 'https://recoup-api.vercel.app/api/chat',
    headers: {
      'x-api-key': process.env.NEXT_PUBLIC_RECOUP_API_KEY || '',
    },
    body: {
      artistId: 'eaa2fb07-5a4b-4710-9c0d-4a74db3612d2',
    },
  })

  const handlePromptSelect = (prompt: string) => {
    append({
      role: 'user',
      content: prompt,
    })
  }

  return {
    messages,
    input,
    setInput,
    handleSubmit,
    status,
    handlePromptSelect,
  }
}

export default useMetadataChat
