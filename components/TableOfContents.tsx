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
          "lg:min-w-[20%] lg:w-max w-screen h-screen lg:h-auto lg:min-h-full drop-shadow-xl lg:drop-shadow-none",
          "t-0 fixed lg:relative -translate-y-24 lg:-translate-y-0 pointer-events-none lg:pointer-events-auto",
          "transition-transform",
          isOpen || "-translate-x-full lg:translate-x-0",
          isOpen && "pointer-events-auto z-20",
        ].join(" ")}
        onClick={() => setOpen(false)}
      >
        <div className="lg:sticky w-full h-max top-8">
          <div
            className={[
              "flex flex-col content-bg rounded-r lg:rounded p-4 h-full lg:h-max fixed lg:relative top-0 left-0",
              isOpen ||
                "-translate-x-full lg:translate-x-0 shadow-md lg:shadow-sm",
              isOpen && "w-2/3",
            ]
              .filter((c) => typeof c === "string")
              .join(" ")}
          >
            <ul className="pl-4 lg:pl-0">
              <li className="text-theme text-2xl lg:text-xl font-bold">
                <Link legacyBehavior href="#root" passHref>
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
                    <Link legacyBehavior href={href} passHref>
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
        </div>
      </nav>
    </>
  )
}
