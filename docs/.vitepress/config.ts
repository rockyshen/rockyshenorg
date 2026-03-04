import { defineConfig, HeadConfig } from "vitepress";
import { RssPlugin, RSSOptions } from "vitepress-plugin-rss";
import { rss } from "./genFeed";

import markdownImagePlugin from "./markdownPlugin";

const RSS: RSSOptions = {
  title: "RockyShen的独立博客",
  baseUrl: `http://rockyshen.com`,
  copyright: "Copyright (c) RockyShen的独立博客",
  filename: "rss.xml",
};

export default defineConfig({
  title: "RockyShen的独立博客",
  description: "rockyshen.com",
  cleanUrls: true,
  appearance: false,
  ignoreDeadLinks: true,
  base: "/",
  buildEnd: rss,
  markdown: {
    lineNumbers: true,
    config: (md) => {
      md.use(markdownImagePlugin);
    },
  },
  vite: {
    plugins: [RssPlugin(RSS)],
  },
  head: [
    [
      "meta",
      {
        name: "keywords",
        content:
          "编程,流行文化,生活方式,游戏，旅行，程序员,编程,后端,后端工程师,独立博客",
      },
    ],
    [
      "meta",
      {
        name: "description",
        content:
          "我叫RockyShen，来自中国上海，程序员，后端工程师，游戏玩家和内容创作者，中文，内容主题涉及编程、流行文化、旅行、生活方式等领域。",
      },
    ],
    // [
    //   "script",
    //   {
    //     async: "",
    //     src: "https://www.googletagmanager.com/gtag/js?id=G-TG5VK8GPSG",
    //   },
    // ],
    [
      "script",
      {},
      "window.dataLayer = window.dataLayer || [];\nfunction gtag(){dataLayer.push(arguments);}\ngtag('js', new Date());\ngtag('config', 'G-TG5VK8GPSG');",
    ],
  ],
  transformHead: ({ pageData }) => {
    const head: HeadConfig[] = [];

    head.push([
      "meta",
      { property: "og:title", content: pageData.frontmatter.title },
    ]);
    head.push([
      "meta",
      { property: "og:description", content: pageData.frontmatter.title },
    ]);

    return head;
  },
  themeConfig: {
    logo: "./logo.svg",
    nav: [
      { text: "B站主页™", link: "https://space.bilibili.com/9482552" },
      {
        text: "视频",
        items: [
          { text: "YouTube", link: "https://www.youtube.com/@user-bh9jx8wo7f" },
          { text: "哔哩哔哩", link: "https://space.bilibili.com/9482552" },
        ],
      },
      { text: "关于", link: "https://github.com/rockyshen" },
    ],
    socialLinks: [
      { icon: "twitter", link: "https://x.com/Rockyshen2" },
      { icon: "github", link: "https://github.com/rockyshen" },
    ],

    outlineTitle: "本文导览",
    lastUpdatedText: "最后更新时间",
    footer: {
      message: `Powered By <a href="https://github.com/foru17/luoleiorg">VitePress</a>`,
      copyright: `Copyright © 2024 | <a href="https://rockyshen.com/">ROCKYSHEN.COM</a><br/>
      <a href="http://beian.miit.gov.cn/" target="_blank" rel="nofollow" class="d-none d-lg-inline-block">沪ICP备2024094061号</a>
      `,
    },
  },
});
