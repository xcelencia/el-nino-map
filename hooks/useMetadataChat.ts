'use client'

import { useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'

const useMetadataChat = () => {
  const [input, setInput] = useState('')

  const { messages, sendMessage, status } = useChat({
    transport: new DefaultChatTransport({
      api: 'https://recoup-api.vercel.app/api/chat',
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_RECOUP_API_KEY || '',
      },
      body: {
        artistId: 'eaa2fb07-5a4b-4710-9c0d-4a74db3612d2',
      },
    }),
  })

  const handleSubmit = (event?: { preventDefault?: () => void }) => {
    event?.preventDefault?.()
    if (!input.trim()) return
    sendMessage({ text: input })
    setInput('')
  }

  const handlePromptSelect = (prompt: string) => {
    sendMessage({ text: prompt })
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
