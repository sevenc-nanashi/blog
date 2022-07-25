import { Tag } from "@markdoc/markdoc"
import { Link } from "../../components"

export const link = {
  render: Link,
  children: ["inline"],
  attributes: {
    href: { type: String },
  },
  transform(node, config) {
    const attributes = node.transformAttributes(config)
    const children = node.transformChildren(config)

    return new Tag(this.render, attributes, children)
  },
}
