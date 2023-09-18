# 基于 VitePress 构建的知识库系统

📝 **Wang Haoyu 的个人笔记库，记录个人碎片化、结构化、体系化的随笔。** 

🐢 [GitHub Pages（完整体验）](https://docs.ldoc.cc)

# 开始

```bash
# 1.克隆本仓库


# 2.安装 yarn
npm install -g yarn

# 3.安装依赖
yarn install

# 4.dev 运行，访问：http://localhost:5173
# 注意：本地node版本需大于v14.18.0
yarn dev

# 5.打包，文件存放位置：docs/.vitepress/dist
# 如果是部署到 GitHub Pages，可以利用 GitHub Actions，在 push 到 GitHub 后自动部署打包
# 详情见：.github/workflows/togithub.yml，根据个人需要删减工作流配置
yarn build

# 6.部署
# 6.1 push 到 GitHub 仓库，部署到 GitHub Pages：需要在仓库设置中启用 GitHub Pages（本仓库采用此种部署方式，该方式不利于国内搜索引擎SEO，可能会不收录）
# 6.2 在其他平台部署, 例如：Gitee Pages、Vercel、Netlify、个人虚拟主机、个人服务器等
```
