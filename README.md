# proger

> 项目管理可视化工具

## 目录结构

```
.
├── README.md
├── app                       // 存放electron相关
│   ├── index.js              // electron入口文件
│   ├── ipc                   // 主线程与子线程通信相关
│   │   └── index.js
│   ├── menu                  // 菜单配置
│   │   └── index.js
│   └── libs                 // 存放自己封装的或者工具函数
│       └── createWindow.js  // 打开url窗口的工具函数
├── config-overrides.js      // react-app-rewired覆盖webpack配置文件
├── icons                    // app图标
│   ├── icon.icns
│   └── icon.png
├── package-lock.json
├── package.json
├── public                   // react使用的静态文件
│   ├── index.html
│   └── manifest.json
├── src                      // react开发相关文件目录
│   ├── App.js
│   ├── assets
│   │   ├── css
│   │   │   └── reset.css
│   │   └── logo.svg
│   ├── components           // 存放展示组件
│   │   └── HelloProger
│   │       ├── HelloProger.css
│   │       ├── HelloProger.js
│   │       └── index.js
│   ├── containers           // 存放容器组件
│   │   └── TopNav
│   ├── index.js
│   ├── libs                 // 存放工具函数
│   │   └── ipc              // 与主进程通信相关
│   │       ├── index.js
│   │       └── util.js
│   ├── routes               // 路由，使用reach-router
│   │   └── index.js
│   ├── store                // redux存储，使用rematch
│   │   ├── counter.js
│   │   └── index.js
│   └── views                // 页面
│       └── Home
│           ├── Home.js
│           └── index.js
└── yarn.lock
```