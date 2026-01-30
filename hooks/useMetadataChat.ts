'use client'

import { useMemo, useState } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'

const generateUUID = () => crypto.randomUUID()

const useMetadataChat = () => {
  const [input, setInput] = useState('')

  const transport = useMemo(() => {
    return new DefaultChatTransport({
      api: 'https://recoup-api.vercel.app/api/chat',
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_RECOUP_API_KEY || '',
      },
    })
  }, [])

  const { messages, status, sendMessage, setMessages } = useChat({
    transport,
    generateId: generateUUID,
  })

  const chatRequestOptions = useMemo(
    () => ({
      body: {
        artistId: 'eaa2fb07-5a4b-4710-9c0d-4a74db3612d2',
      },
    }),
    [],
  )

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!input.trim()) return
    sendMessage({ text: input }, chatRequestOptions)
    setInput('')
  }

  const handlePromptSelect = (prompt: string) => {
    sendMessage({ text: prompt }, chatRequestOptions)
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
