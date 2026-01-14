import { createContentLoader } from "vitepress";
const isProd = process.env.NODE_ENV === "production";

interface Post {
  title: string;
  url: string;
  date: {
    time: number;
    string: string;
    year: string;
    monthDay: string;
  };
  excerpt: string | undefined; // 摘要
}

export declare const data: Post[];

/**
 * 在项目构建阶段，自动扫描指定目录下的所有 Markdown 文章
 */
export default createContentLoader("posts/**/*.md", {
  excerpt: excerptFn,
  transform(raw): Post[] {
    return raw
      .map(({ url, frontmatter, excerpt }) => ({
        title: frontmatter.title,
        url: isProd ? "/BanBing" + url : url,
        excerpt,
        date: formatDate(frontmatter.date),
      }))
      .sort((a, b) => b.date.time - a.date.time);
  },
});

// 提取摘要
function excerptFn(file: {
  data: { [key: string]: any };
  content: string;
  excerpt?: string;
}) {
  file.excerpt = file.content.split("<!-- DESC SEP -->")[1];
}

function formatDate(raw: string): Post["date"] {
  const date = new Date(raw);
  date.setUTCHours(12);
  return {
    time: +date,
    string: date.toLocaleDateString("zh-Hans", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }),
    year: date.toLocaleDateString("zh-Hans", {
      year: "numeric",
    }),
    monthDay: date.toLocaleDateString("zh-Hans", {
      month: "2-digit",
      day: "2-digit",
    }),
  };
}
