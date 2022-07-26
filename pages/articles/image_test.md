---
title: 画像に対応させてみた
summary: このブログの画像対応について。
tags:
  - Next.js
  - Markdoc
date: 2022-07-26
---

２つ目の記事。~~記事を書くとGitHubのコントリビューションも溜まるのいいな~~  
というわけでこのブログを画像に対応させてみた。

## 画像を表示する

![画像](./image.png)

```markdown
![画像](./image.png)
```
で画像が表示できるようになった。  
そのうちクリックで拡大表示も実装してみたい。

## 技術的な話

せっかくなら`/pages/articles/記事名/画像.png`みたいに置くようにしたかったが、pagesの中に画像を入れるとバグるので断念。
```yaml
blog:
  pages:
    app.tsx
    index.tsx
    articles:
      image_test.md
      ...
  public:
    ...
    articles:
      image_test:
        image.png
```
のような変な構造になってしまった。そのうち改善するかもしれないししないかも知れない。

画像のURLを`./image.png`のようにすると、`/articles/image.png`と認識してしまったので`next.config.js`の`trailingSlash`を有効にした。

画像が大きすぎるとすごいことになるのでarticle.scssにて
```scss
  img {
    @apply max-h-96;
  }
```
のように防いでいる。


## おわり

内容薄すぎて草  
おわり。
