import React from "react"
import Link from "next/link"

export function TopNav() {
  return (
    <nav
      className={
        "sticky flex items-center px-8 h-16 w-full flex-row " +
        "bg-theme text-white shadow-[0_2px_4px_2px_rgb(0_0_0_/_0.1)]"
      }
    >
      <Link href="/">
        <a className="text-xl font-bold">名前のない日記。</a>
      </Link>
      <div className="ml-auto opacity-50 hover:opacity-100">
        <a
          href="https://github.com/sevenc-nanashi/blog"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </nav>
  )
}
