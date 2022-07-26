import Markdoc from "@markdoc/markdoc"
import { promises as fs } from "fs"
import Link from "next/link"
import React from "react"
import * as yaml from "js-yaml"
import child_process from "child_process"

export async function getStaticProps(_context) {
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
          tags: string[]
        }
        const date =
          parseInt(
            child_process
              .execSync(
                `git log --diff-filter=A --pretty="%ct" -- ./pages/articles/${article.name}`
              )
              .toString()
              .split("\n")[0]
          ) * 1000

        return {
          name: article.name.replace(".md", ""),
          title: frontmatter.title,
          summary: frontmatter.summary,
          date,
          tags: frontmatter.tags,
        }
      })
  )
  return {
    props: {
      articles: articles.sort((a, b) => b.date - a.date),
    },
  }
}

const Index = (props) => (
  <div className="flex flex-col w-full space-y-4">
    <div className="content-bg round p-4 rounded shadow-md">
      <h1>記事一覧</h1>
    </div>
    {props.articles.map((article) => (
      <Link href={`/articles/${article.name}`} key={article.name}>
        <div className="content-bg round p-4 w-full rounded">
          <h2>{article.title}</h2>
          <div>
            {article.tags.length > 0 ? (
              article.tags.map((e) => (
                <span
                  className="rounded-full bg-theme-pale text-sm py-[2px] px-2 mr-1 text-theme font-bold"
                  key={`${article.name}-${e}`}
                >
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
              <time suppressHydrationWarning>
                {new Date(article.date).toLocaleString()}
              </time>
            </p>
          </div>
        </div>
      </Link>
    ))}
  </div>
)

export default Index
