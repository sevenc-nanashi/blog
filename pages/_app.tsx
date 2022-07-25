import React from "react"
import Head from "next/head"
// import Link from "next/link"

import { TableOfContents, TopNav } from "../components"

import "prismjs"
// Import other Prism themes here

import "../public/globals.scss"
import "../public/article.scss"
import "../public/CodeBlock.scss"

import type { AppProps } from "next/app"

const TITLE = "名前のない日記｡"
const DESCRIPTION = "名無し｡の色々な書き散らし。"

function collectHeadings(node, sections = []) {
  if (node) {
    if (node.name === "Heading") {
      const title = node.children[0]

      if (typeof title === "string") {
        sections.push({
          ...node.attributes,
          title,
        })
      }
    }

    if (node.children) {
      for (const child of node.children) {
        collectHeadings(child, sections)
      }
    }
  }

  return sections
}

export default function App({ Component, pageProps }: AppProps) {
  const { markdoc } = pageProps

  let title = TITLE
  let description = DESCRIPTION
  if (markdoc) {
    if (markdoc.frontmatter.title) {
      title = markdoc.frontmatter.title + " - " + TITLE
    }
    if (markdoc.frontmatter.description) {
      description = markdoc.frontmatter.description
    }
  }

  const toc = pageProps.markdoc?.content
    ? collectHeadings(pageProps.markdoc.content)
    : []
  if (pageProps.markdoc?.content) {
    pageProps.markdoc.content.children
      .filter((t) => t.name === "Fence")
      .map((t) => t.attributes.language)
      .forEach((t) => {
        require(`prismjs/components/prism-${t}.min`)
      })
  }

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="referrer" content="strict-origin" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="theme-color" content="#48b0d5" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="dark:bg-gray-900">
        <div className="min-h-screen bg-theme-pale">
          <TopNav />
          <div className="flex flex-row p-8 justify-center h-full">
            {toc.length > 0 ? (
              <>
                <TableOfContents toc={toc} />

                <main className="flex p-6 flex-grow content-bg rounded mx-8">
                  <Component {...pageProps} />
                </main>
                <div className="w-1/5 hidden xl:block" />
              </>
            ) : (
              <>
                <main className="flex p-4 flex-grow rounded mx-8">
                  <Component {...pageProps} />
                </main>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
