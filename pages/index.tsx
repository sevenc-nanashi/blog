import Markdoc from "@markdoc/markdoc"
import { promises as fs } from "fs"
import Link from "next/link"
import React from "react"
import * as yaml from "js-yaml"

export async function getStaticProps(context) {
  const articles = await Promise.all(
    (
      await fs.readdir("./pages/articles", { withFileTypes: true })
    )
      .filter((article) => article.isFile() && article.name.endsWith(".md"))
      .map(async (article) => {
        const content = await fs.readFile(
          `./pages/articles/${article.name}`,
          "utf8"
        )
        const parsed = Markdoc.parse(content)
        const frontmatter = yaml.load(parsed.attributes.frontmatter) as {
          title: string
          summary: string
          date: Date
          tags: string[]
        }

        return {
          name: article.name.replace(".md", ""),
          title: frontmatter.title,
          summary: frontmatter.summary,
          date: frontmatter.date,
          tags: frontmatter.tags,
        }
      })
  )
  return {
    props: {
      articles: articles
        .sort((a, b) => a.date.getTime() - b.date.getTime())
        .map((article) => ({
          ...article,
          date: article.date.toISOString(),
        })),
    },
  }
}

export default (props) => (
  <div className="flex flex-col w-full space-y-4">
    <div className="content-bg round p-4 rounded shadow-md">
      <h1>記事一覧</h1>
    </div>
    {props.articles.map((article) => (
      <Link href={`/articles/${article.name}`}>
        <a>
          <div className="content-bg round p-4 w-full rounded">
            <h2>{article.title}</h2>
            <div>
              {article.tags.length > 0 ? (
                article.tags.map((e) => (
                  <span className="rounded-full bg-theme-pale text-sm py-[2px] px-2 mr-1 text-theme">
                    {e}
                  </span>
                ))
              ) : (
                <p className="opacity-50">タグ無し</p>
              )}
            </div>
            <p>{article.summary}</p>
            <div className="opacity-50 flex">
              <p>
                作成：
                <time>{article.date.split("T")[0]}</time>
              </p>
            </div>
          </div>
        </a>
      </Link>
    ))}
  </div>
)
