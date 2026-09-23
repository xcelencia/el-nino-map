'use client'

import { usePathname, useRouter } from 'next/navigation'

const Header = () => {
  const pathname = usePathname()
  const { push } = useRouter()

  if (pathname === '/') return null

  return (
    <div className="fixed z-[100] top-4 left-0 px-8 flex items-center">
      <button
        type="button"
        className="bg-black text-white px-3 py-2 font-titilliumweb rounded-md"
        onClick={() => push('/')}
      >
        Back To Home
      </button>
    </div>
  )
}

export default Header
