# PDF文件放置说明

## 如何添加你的PDF文件

1. 将你的PDF文件重命名为：`写给同学的IT书_电子版.pdf`
2. 将此文件放置在此目录下：`book/public/pdfs/`
3. 确保文件名完全匹配（包括中文名称）

## 文件路径结构

```
book/
├── public/
│   └── pdfs/
│       ├── README.md
│       └── 写给同学的IT书_电子版.pdf  ← 你的PDF文件放这里
└── src/
    └── pages/
        └── read-online.astro  ← 在线阅读页面
```

## 注意事项

- PDF文件名必须完全匹配代码中的路径
- 文件大小建议控制在合理范围内（如10MB以内）
- 确保PDF文件没有密码保护
- 支持所有现代浏览器的PDF查看器

## 测试

放置PDF文件后，访问 `/read-online` 页面，点击"Open PDF in New Window"按钮即可在新窗口中打开PDF。
