import Head from 'next/head'
import Navbar from '../components/Navbar'
import type { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title> Banana Store </title>
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}
