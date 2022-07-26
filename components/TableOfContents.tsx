import React, { useState } from "react"
import Link from "next/link"
import { TextBulletListLtr24Filled } from "@fluentui/react-icons"

export function TableOfContents({ toc }) {
  const items = toc.filter(
    (item) => item.id && (item.level === 2 || item.level === 3)
  )
  const [isOpen, setOpen] = useState(false)

  return (
    <>
      <div
        className={
          "flex justify-center items-center text-white lg:hidden fixed " +
          "bottom-2 left-2 w-12 h-12 rounded-full bg-theme drop-shadow-2xl cursor-pointer"
        }
        onClick={() => {
          setOpen(true)
        }}
      >
        <TextBulletListLtr24Filled />
      </div>
      <nav
        className={[
          "lg:min-w-1/5 lg:w-max w-screen h-screen lg:h-full drop-shadow-xl lg:drop-shadow-none",
          "t-0 fixed lg:relative -translate-y-24 lg:translate-y-0 pointer-events-none lg:pointer-events-auto",
          isOpen || "-translate-x-full lg:translate-x-0 shadow-md lg:shadow-sm",
          isOpen && "pointer-events-auto z-20 bg-theme-pale",
        ].join(" ")}
        onClick={() => setOpen(false)}
      >
        <div
          className={[
            "flex flex-col content-bg rounded-r lg:rounded p-4 h-full fixed lg:static top-0 left-0",
            isOpen ||
              "-translate-x-full lg:translate-x-0 shadow-md lg:shadow-sm",
          ]
            .filter((c) => typeof c === "string")
            .join(" ")}
        >
          <ul className="">
            <li className="text-theme text-xl font-bold">
              <Link href="#root" passHref>
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
                    "text-lg",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <Link href={href} passHref>
                    <a
                      onClick={() => {
                        setOpen(false)
                      }}
                      className="hover:text-theme"
                    >
                      {item.title}
                    </a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}
