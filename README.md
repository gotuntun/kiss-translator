## 简约翻译

一个简约的 [双语网页翻译扩展 & 油猴脚本](https://github.com/fishjar/kiss-translator)。

[kiss-translator.webm](https://github.com/fishjar/kiss-translator/assets/1157624/f7ba8a5c-e4a8-4d5a-823a-5c5c67a0a47f)

### 缘由

本项目灵感来源于 [Immersive Translate](https://github.com/immersive-translate/immersive-translate)，在试用了后，发现搭配本人早前开发的 [网页划词翻译扩展](https://github.com/fishjar/kiss-dictionary) 一起使用，刚好形成很好补充。

但该扩展的功能对我来说有些繁杂了，而且只提供编译混淆后的安装包，没有提供源代码，无法满足我的一些个性化定制需求。

恰巧本人对翻译类工具有些执念，本着`“自用为主，能用就行”`的理念，于是动手撸了一个，目前初版完成，基本达到个人使用需求。

如果你也喜欢简约一点的，欢迎自取。

### 特点

- 保持简约

### 进度

- [x] 提供试用安装包
- [x] 适配浏览器
  - [x] Chrome
  - [x] Edge
  - [x] Firefox
  - [ ] Safari
  - [x] Kiwi
- [x] 支持翻译服务
  - [x] Google
  - [x] Microsoft
  - [x] OpenAI
  - [ ] DeepL
- [ ] 上架应用市场
  - [x] [Chrome](https://chrome.google.com/webstore/detail/kiss-translator/bdiifdefkgmcblbcghdlonllpjhhjgof?hl=zh-CN)
  - [ ] Edge
  - [x] [Firefox](https://addons.mozilla.org/zh-CN/firefox/addon/kiss-translator/)
  - [ ] Safari
  - [x] [Greasy Fork](https://greasyfork.org/zh-CN/scripts/472840-kiss-translator)
- [x] 开放源代码
- [x] 数据同步功能
- [x] 油猴脚本([链接 1](https://fishjar.github.io/kiss-translator/kiss-translator.user.js)、[链接 2](https://kiss-translator.rayjar.com/kiss-translator.user.js))
  - [x] [Tampermonkey](https://www.tampermonkey.net/) (Chrome/Edge/Firefox)
  - [ ] [Userscripts Safari](https://github.com/quoid/userscripts) (待测)

### 指引

```sh
git clone https://github.com/fishjar/kiss-translator.git
cd kiss-translator
yarn install
yarn build
```

### 数据同步

移步: [https://github.com/fishjar/kiss-worker](https://github.com/fishjar/kiss-worker)

### 交流

- 加入 [Telegram 群](https://t.me/+RRCu_4oNwrM2NmFl)