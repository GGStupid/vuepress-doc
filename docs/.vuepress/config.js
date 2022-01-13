const rootPath = process.cwd();
const distPath = `${rootPath}/docsdist`;

module.exports = {
  head: [["link", { rel: "icon", href: "/logoicon.png" }]],
  title: "Niu UI",
  description: "Niu UI description",
  themeConfig: {
    logo: "/logoicon.png",
    nav: [
      { text: "首页", link: "/" },
      { text: "指导", link: "/guide/" },
      { text: "组件", link: "/component/" },
      { text: "github", link: "https://google.com" },
    ],
    sidebar: {
      "/guide/": ["/guide/", "/guide/help"],
      "/component/": ["/component/", "/component/bbb"],
    },
  },
  dest: distPath,
  port: 3222,
};
