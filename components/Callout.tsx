import * as React from "react"

export function Callout({ title, children }) {
  return (
    <div className="callout">
      <strong>{title}</strong>
      <span>{children}</span>
    </div>
  )
}
