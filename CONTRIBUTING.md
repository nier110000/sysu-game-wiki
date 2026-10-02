# SYSU Game Wiki 维护与投稿指南

这份说明面向网站管理员、内容审核者和普通组员，介绍如何修改网站、添加 Wiki、协作审核以及发布更新。

- 在线网站：<https://sysu-game-wiki.pages.dev/>
- GitHub 仓库：<https://github.com/nier110000/sysu-game-wiki>
- 腾讯案例观察表：<https://docs.qq.com/sheet/DUWhRVURwQ1RrT0dp>

## 一、网站如何工作

网站使用 VitePress 构建。绝大多数页面都是 Markdown 文档，不需要数据库，也不需要单独维护服务器。

```text
成员编写 Markdown
→ 提交到 GitHub
→ 审核并合并到 main
→ Cloudflare Pages 自动构建
→ 网站更新
```

Cloudflare Pages 当前使用以下设置：

```text
构建命令：npm run docs:build
输出目录：docs/.vitepress/dist
生产分支：main
```

合并到 `main` 后通常几分钟即可上线。不要手动上传构建后的文件。

## 二、内容放在哪里

| 网站内容 | 文件或目录 |
| --- | --- |
| 首页 | `docs/index.md` |
| Wiki 首页 | `docs/wiki/index.md` |
| 游戏设计 | `docs/wiki/game-design.md` |
| 游戏开发 | `docs/wiki/development.md` |
| 游戏美术 | `docs/wiki/art.md` |
| “涌现”专题 | `docs/spotlight/` |
| 活动记录 | `docs/activities/` |
| 项目与作品 | `docs/projects/` |
| 关于我们 | `docs/about/` |
| 加入我们 | `docs/join/` |
| 顶部导航和侧边栏 | `docs/.vitepress/config.mts` |
| 图片等静态资源 | `docs/public/` |

通常只需要修改 `docs` 下的 `.md` 文件。

请不要提交或手动修改：

- `node_modules/`
- `docs/.vitepress/dist/`
- 本地编辑器产生的缓存文件
- 与本次内容无关的配置文件

## 三、直接在 GitHub 网页修改

这种方式最适合不熟悉 Git 的组员。

1. 打开 GitHub 仓库。
2. 找到需要修改的 `.md` 文件。
3. 点击文件右上角的铅笔按钮。
4. 修改内容，并切换到预览页面检查格式。
5. 填写简短、明确的提交说明。
6. 选择创建新分支并发起 Pull Request，不要直接覆盖 `main`。
7. 等待内容审核者检查并合并。
8. 合并后等待 Cloudflare Pages 自动更新网站。

只修改错别字或失效链接时，也建议通过 Pull Request 提交，方便保留修改记录。

## 四、在本地修改和预览

适合网站管理员和熟悉 Git 的组员。

首次使用：

```bash
npm install
```

启动本地预览：

```bash
npm run docs:dev
```

终端会显示本地访问地址，通常是：

```text
http://localhost:5173
```

提交前检查正式构建：

```bash
npm run docs:build
```

常见提交流程：

```bash
git switch main
git pull
git switch -c docs/文章简短名称

# 完成修改后
git add docs
git commit -m "docs: 添加文章名称"
git push -u origin docs/文章简短名称
```

然后在 GitHub 创建 Pull Request。

## 五、添加一篇 Wiki 文档

### 1. 选择文件位置和名称

普通 Wiki 放在 `docs/wiki/`。例如“游戏手感设计”可以创建为：

```text
docs/wiki/game-feel.md
```

文件名应使用小写英文、数字和连字符：

```text
正确：level-design.md
正确：unity-animation.md
不建议：关卡设计.md
不建议：Level Design.md
```

### 2. 使用统一结构

可以复制下面的模板：

```md
# 文章标题

> 用一两句话说明这篇文章解决什么问题。

## 背景

问题来自什么项目、活动、讨论或游戏案例？

## 核心结论

- 结论一
- 结论二

## 案例或实践过程

- 游戏／项目名称：
- 具体场景：
- 实况链接与时间点：
- 观察到的现象：

## 分析

说明玩家能力、系统规则、关卡情境和反馈之间的关系。

## 对我们的启发

说明这个发现可以怎样应用到社团项目或原型中。

## 参考资料

- [资料名称](https://example.com)
```

不要求每篇文章一次写完，但应明确区分：

- 可以核实的事实；
- 作者的观察；
- 仍需讨论的判断或猜想。

引用游戏实况时，尽量附带具体时间点；引用外部文章或素材时，保留原始链接和作者信息。

### 3. 把文章加入导航

新建文件后，需要编辑 `docs/.vitepress/config.mts`，把文章加入对应侧边栏。例如：

```ts
{ text: '游戏手感设计', link: '/wiki/game-feel' },
```

同时建议在 `docs/wiki/index.md` 中增加文章入口。

如果不修改侧边栏，文章仍可能通过直接网址打开，但普通访问者很难找到它。

## 六、添加图片和附件

图片统一放在 `docs/public/images/` 下，并按照栏目或文章分目录。例如：

```text
docs/public/images/game-feel/hit-feedback.png
```

在 Markdown 中引用：

```md
![命中反馈示意图](/images/game-feel/hit-feedback.png)
```

图片要求：

- 文件名使用小写英文、数字和连字符；
- 尽量压缩图片，避免直接上传超大的原图；
- 为图片填写有意义的说明文字；
- 不上传没有使用许可的素材；
- 大型视频不要放进仓库，建议使用公开视频链接。

## 七、“涌现”专题内容流程

专题采用以下流程：

```text
腾讯表格收集原始观察
→ 群内讨论
→ Wiki 整理案例
→ 提炼设计规律
→ 2D 原型
→ GameJam
→ 最终复盘
```

相关文件：

| 内容 | 文件 |
| --- | --- |
| 专题首页 | `docs/spotlight/index.md` |
| 案例观察库 | `docs/spotlight/cases.md` |
| 设计笔记 | `docs/spotlight/notes.md` |
| 讨论记录 | `docs/spotlight/discussions.md` |
| 2D 原型提案 | `docs/spotlight/prototype.md` |
| 最终复盘 | `docs/spotlight/retrospective.md` |

腾讯表格适合快速收集未经整理的观察，Wiki 适合保存经过讨论、可以长期检索的内容。不要把表格中的所有条目不加筛选地复制进 Wiki。

## 八、多人协作与审核

建议设置三类角色：

### 网站管理员

- 管理 GitHub 仓库和 Cloudflare Pages；
- 维护网站导航、依赖和构建配置；
- 处理合并冲突和部署故障；
- 保证至少两人拥有必要的管理权限，避免账号交接后无法维护。

### 内容审核者

- 检查内容是否清楚、可追溯；
- 检查引用、图片权限和外部链接；
- 确认文章放在正确栏目；
- 合并符合要求的 Pull Request。

### 普通成员

- 使用独立分支提交内容；
- 一次 Pull Request 尽量只解决一个主题；
- 根据审核意见继续修改；
- 不直接修改构建配置和生产分支。

推荐为 `main` 开启分支保护：

- 禁止直接推送；
- 合并前至少需要一人审核；
- 要求构建检查通过；
- 不允许强制推送。

同一时间尽量避免多人修改同一个大文件。一篇 Wiki、一次活动或一个项目最好各用独立文件，从结构上减少冲突。

## 九、Pull Request 检查清单

提交者应确认：

- [ ] 标题能准确说明本次修改；
- [ ] 页面在本地或 GitHub 预览中格式正常；
- [ ] 新页面已经加入相应目录或侧边栏；
- [ ] 内部链接可以打开；
- [ ] 外部链接仍然有效；
- [ ] 图片路径、大小和授权没有问题；
- [ ] 事实、观察和个人判断已经区分；
- [ ] 没有提交 `node_modules` 或构建输出；
- [ ] 本次修改没有意外删除其他成员的内容。

审核者应重点检查：

- 内容是否适合长期保存，而不只是临时聊天记录；
- 是否包含可定位的具体案例或实践背景；
- 是否泄露个人隐私、群聊内容或未公开项目信息；
- 是否存在版权、素材授权或署名问题；
- 导航和页面结构是否容易理解。

## 十、提交信息建议

```text
docs: 添加游戏手感设计笔记
docs: 更新涌现案例观察库
activity: 添加十月 GameJam 记录
project: 更新项目开发进度
fix: 修复失效链接
style: 调整页面展示样式
chore: 更新构建配置
```

提交信息应说明“改了什么”，不要只写 `update`、`修改` 或 `test`。

## 十一、上线后的检查

Pull Request 合并后：

1. 打开 Cloudflare Pages 查看最新部署状态；
2. 确认构建状态为成功；
3. 打开线上页面检查标题、导航、图片和链接；
4. 使用无痕窗口再检查一次，避免浏览器缓存干扰；
5. 如果只在本地正常，检查文件名大小写和链接路径。

重点页面：

- <https://sysu-game-wiki.pages.dev/>
- <https://sysu-game-wiki.pages.dev/wiki/>
- <https://sysu-game-wiki.pages.dev/activities/>
- <https://sysu-game-wiki.pages.dev/projects/>
- <https://sysu-game-wiki.pages.dev/join/>
- <https://sysu-game-wiki.pages.dev/spotlight/>

## 十二、常见问题

### 页面存在，但侧边栏里看不到

检查是否已经在 `docs/.vitepress/config.mts` 中加入页面链接。

### 图片本地能显示，线上不能显示

检查图片是否放在 `docs/public/` 下，并使用以 `/` 开头的路径。还要检查文件名大小写是否完全一致。

### 合并后网站没有更新

先查看 Cloudflare Pages 的最新部署记录。如果没有新部署，确认修改是否已经合并到 `main`；如果构建失败，根据日志中的第一个错误进行修复。

### 构建提示找不到页面或文件

检查 Markdown 链接、图片路径和文件名。线上环境区分大小写，`Game-Feel.md` 和 `game-feel.md` 会被视为不同文件。

### 两个人修改同一个文件发生冲突

不要直接覆盖另一方内容。先把 `main` 的最新修改合并到自己的分支，再人工保留双方需要的段落。无法判断时交给网站管理员处理。

### 能否直接在腾讯表格维护全部内容

腾讯表格适合收集原始观察，正式 Wiki 应继续保存在 GitHub。这样才能获得版本记录、审核流程、稳定链接和长期检索能力。

## 十三、基本原则

- 一篇文章解决一个清楚的问题；
- 从具体案例和真实项目经验出发；
- 保留失败原因和设计取舍，不只保留最终结论；
- 尽量让资料可追溯；
- 小步提交、及时审核、持续更新；
- 不在公开仓库中保存密码、令牌、个人隐私或未公开资料。


