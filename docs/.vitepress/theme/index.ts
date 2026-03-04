import * as Sentry from "@sentry/vue";
import { Theme } from "vitepress";
import { Integrations } from "@sentry/tracing";
import DefaultTheme from "vitepress/theme";
// import Layout from "./components/Layout.vue";

import "./style.css";
// import ThemeLayout from "./components/Layout.vue";
// import ArticleComment from "./components/ArticleComment.vue";
// import TweetCard from "./components/TweetCard.vue";
import { customConfigProvider } from "./configProvider";
// @ts-ignore
import Layout from "./components/Layout.vue";
// @ts-ignore
import ArticleComment from "./components/ArticleComment.vue";
// @ts-ignore
import TweetCard from "./components/TweetCard.vue";
export default {
  ...DefaultTheme,
  Layout: customConfigProvider(Layout),
  enhanceApp({ app }) {
    Sentry.init({
      app: app,
      dsn: "https://28535f00024737c373688b8451acd0ce@sentry.is26.com/2",
      integrations: [
        new Integrations.BrowserTracing({
          tracingOrigins: ["http://blog.rockyshen.com", /^\//], // replace 'your-website.com' with your actual domain
        }),
      ],
      tracesSampleRate: 1.0,
    });

    app.component("ArticleComment", ArticleComment);
    app.component("TweetCard", TweetCard);
  },
} as Theme;
