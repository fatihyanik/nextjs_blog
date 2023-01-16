import React from 'react'
import "../styles/globals.css"

function RootLayout({children,} : {children: React.ReactNode}) {
  return (
    <html>
        <head />
        <body>{children}</body>
    </html>
  )
}

export default RootLayout