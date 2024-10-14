# 跨境电商新标签页 - Chrome插件

## 体验地址

Chrome 网上应用店: [扩展名称](https://chrome.google.com/webstore/detail/your-extension-id)

## 功能

1. 多平台商品搜索：默认支持美亚、德亚、Temu、Etsy,也可以自定义添加新的电商平台
2. 多时区时钟：显示美国、欧洲、中国等多个时区的当前时间
3. 运营日历：提醒黑五、圣诞等购物季的剩余天数
4. AI经营工具（持续增加中）：写Listing、写用户回复、关键词等

技术栈：

- [Plasmo](https://docs.plasmo.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Shadcn/ui](https://ui.shadcn.com/)

## 本地开发

```bash
pnpm dev
# 或
npm run dev
```

## 构建生产版本

运行以下命令：

```bash
pnpm build
# 或
npm run build
```

这将为您的扩展创建一个生产包，可以打包并发布到应用商店。
