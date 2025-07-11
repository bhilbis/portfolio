"use client"
import React from 'react'

const Copyright = () => {
  const currentYear = new Date().getFullYear()

  return (
    <div className={`w-full py-1 text-center text-sm text-gray-400 dark:text-gray-600 bottom-0`}>
      <p>
        © {currentYear} AoiXsy. All rights reserved.
      </p>
    </div>
  )
}

export default Copyright
