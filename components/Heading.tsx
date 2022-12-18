import Link from "next/link"
import * as React from "react"

export function Heading({ id = "", level = 1, children, className }) {
  return (
    <Link href={`#${id}`} className="no-color">
      {React.createElement(
        `h${level}`,
        {
          id,
          className: ["heading", className].filter(Boolean).join(" "),
        },
        children
      )}
    </Link>
  )
}
