import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl">Home page</h1>
      <Link href="/blog">
        blog
      </Link>
    </div>
  )
}
