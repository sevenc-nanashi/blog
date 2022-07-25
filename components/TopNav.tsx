import React from "react"
import Link from "next/link"

export function TopNav() {
  return (
    <nav className="sticky flex px-8 py-4 w-full flex-row bg-theme-pale dark:bg-gray-800 shadow-[0_2px_4px_2px_rgb(0_0_0_/_0.1)]">
      <Link href="/">
        <a className="text-xl font-bold">名前のない日記。</a>
      </Link>
      <div className="ml-auto opacity-50 hover:opacity-100">
        <a href="https://github.com/sevenc-nanashi/blog" target="_blank">
          GitHub
        </a>
      </div>
    </nav>
  )
}