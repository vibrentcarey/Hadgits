import React, { Children } from 'react'

export default function PageWrapper({children}) {
  return (
    <div className='h-full w-full px-6 sm:px-12'>
      {children}
    </div>
  )
}
