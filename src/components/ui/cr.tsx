"use client"
import React from 'react'
import { useTheme } from 'next-themes'

const Copyright = () => {
  const currentYear = new Date().getFullYear()
  const { theme } = useTheme()

  return (
    <div className={`w-full py-1 text-center text-sm ${
      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
    } bottom-2`}>
      <p>
        © {currentYear} AoiXsy. All rights reserved.
      </p>
    </div>
  )
}

export default Copyright
