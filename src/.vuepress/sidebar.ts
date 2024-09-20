import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  sidebar: "structure",
  "/": [
    // "",
    // "portfolio",
    // {
    //   text: "案例",
    //   icon: "laptop-code",
    //   prefix: "demo/",
    //   link: "demo/",
    //   children: "structure",
    // },
    {
      text: "Java",
      icon: "book",
      prefix: "interview/java",
      children: "structure",
    },
    {
      text:"多线程",
      icon: "book",
      prefix: "interview/thread",
      children: "structure",
    },
    {
      text: "数据库",
      icon: "database",
      prefix: "interview/database",
      children: "structure",
    },
    // {
    //   text: "幻灯片",
    //   icon: "person-chalkboard",
    //   link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    // },
  ],
});
