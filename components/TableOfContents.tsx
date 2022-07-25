import React from "react"
import Link from "next/link"

export function TableOfContents({ toc }) {
  const items = toc.filter(
    (item) => item.id && (item.level === 2 || item.level === 3)
  )
  const title = toc.find(item => item.level === 1)

  return (
    <nav className="w-1/5">
      <div className="flex flex-col content-bg rounded p-4 h-full ">
        <ul className="">
          <li className="text-theme text-xl font-bold">
            <Link href={`#{title.id}`} passHref>
              <a>目次</a>
            </Link>
          </li>
          {items.map((item) => {
            const href = `#${item.id}`
            const active =
              typeof window !== "undefined" && window.location.hash === href
            return (
              <li
                key={item.title}
                className={[
                  active ? "text-theme font-bold" : undefined,
                  item.level === 3 ? "pl-4" : undefined,
                  "text-lg"
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <Link href={href} passHref>
                  <a>{item.title}</a>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
