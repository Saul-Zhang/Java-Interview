import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/Java-Interview/",

  lang: "zh-CN",
  title: "Java面经",
  description: "java面试",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
