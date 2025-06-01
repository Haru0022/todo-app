import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Head from "next/head";



export default function Home() {
  return (
    <div>
      <Head>
        <title>My Next.js Todo App</title>
      </Head>

      <main>
        <h1>Todo Appへようこそ！</h1>

        <p>これからTodoアプリを作成します</p>
      </main>
    </div>
  )

}
