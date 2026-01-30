'use client'

import { useRef } from 'react'

interface MessageInputProps {
  value: string
  onChange: (value: string) => void
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  status?: string
}

const MessageInput = ({ value, onChange, onSubmit, status }: MessageInputProps) => {
  const formRef = useRef<HTMLFormElement>(null)
  const isLoading = status === 'submitted' || status === 'streaming'

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      formRef.current?.requestSubmit()
    }
  }

  return (
    <div className="bg-white border-t border-gray-200 p-6">
      <div className="max-w-2xl mx-auto">
        <form ref={formRef} onSubmit={onSubmit} className="flex space-x-4">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            disabled={isLoading}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-base disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={!value.trim() || isLoading}
            className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed font-medium"
          >
            {isLoading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default MessageInput
