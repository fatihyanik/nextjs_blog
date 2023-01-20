import React from 'react'
import Banner from '../../components/Banner'
import Header from '../../components/Header'
import "../../styles/globals.css"

function RootLayout({children,} : {children: React.ReactNode}) {
  return (
    <html>

        <body className='max-w-7xl mx-auto'>
          <Header /> 
          <Banner />
          {children}
          </body>
    </html>
  )
}

export default RootLayout