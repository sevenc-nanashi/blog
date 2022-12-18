import NextLink from "next/link"
import * as React from "react"
import { OpenFilled } from "@fluentui/react-icons"

export function Link({ href, children }) {
  if (href.startsWith("https://")) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
        <OpenFilled />
      </a>
    )
  } else {
    return (
      <NextLink legacyBehavior href={href}>
        <a>{children}</a>
      </NextLink>
    )
  }
}
