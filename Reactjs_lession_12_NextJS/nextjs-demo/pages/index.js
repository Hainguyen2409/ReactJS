import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <div className="title">
      Read {''}
      <Link href="/posts/first-post">
        <a>This page!</a>
      </Link>
    </div> 
  )
}
