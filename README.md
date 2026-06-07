<!-- readme -->
# ☕ 咖啡计时器 (Coffee Timer)

一个优雅的在线咖啡冲泡计时器，帮助你完美控制咖啡冲泡时间！

**在线体验:** [https://maowang2025.github.io/coffee-timer/](https://maowang2025.github.io/coffee-timer/)

## ✨ 功能特性

- **预设冲泡方式** - 4种常见的咖啡冲泡方法
  - ⚡ 快速冲泡 (2分钟)
  - 📋 标准冲泡 (4分钟)
  - 🫖 法式压壶 (5分钟)
  - ❄️ 冷萃咖啡 (6分钟)

- **自定义时间** - 灵活设置任意时间长度
- **声音提醒** - 计时完成时的音频通知
- **浏览器通知** - 系统级别的桌面通知
- **进度条** - 可视化的计时进度
- **暂停/重置** - 完整的计时器控制

## 🎨 设计特点

- 现代化深色主题
- 毛玻璃效果 (Glassmorphism)
- 响应式设计，支持移动设备
- 流畅的动画和过渡效果
- 咖啡主题的色彩搭配

## 🚀 快速开始

### 本地运行

1. 克隆仓库
```bash
git clone https://github.com/maowang2025/coffee-timer.git
cd coffee-timer
```

2. 用浏览器打开 `index.html`
```bash
# Mac
open index.html

# Windows
start index.html

# Linux
firefox index.html
```

或者启动一个本地服务器：
```bash
# Python 3
python -m http.server 8000

# Node.js
npx http-server
```

然后访问 `http://localhost:8000`

## 📋 使用方法

1. **选择预设方式**：点击任意预设按钮快速开始
2. **或自定义时间**：在"分钟"和"秒"输入框中输入时间，点击"设置"
3. **开始计时**：点击"开始"按钮
4. **暂停计时**：点击"暂停"按钮暂停计时
5. **重置**：点击"重置"按钮重新开始

计时完成时会有：
- 🔔 声音提醒
- 🌟 视觉效果
- 💬 浏览器通知（如果已授权）

## 💡 咖啡冲泡小贴士

| 参数 | 建议 |
|------|------|
| 水温 | 88-92°C |
| 豆子研磨 | 根据冲泡方式调整粗度 |
| 豆子新鲜度 | 烘焙后3-4周内饮用最佳 |
| 水质 | 使用过滤水效果更好 |

### 不同冲泡方式的诀窍

**快速冲泡 (2分钟)**
- 适合快速享受
- 使用细磨咖啡豆
- 水温较高 (92°C)

**标准冲泡 (4分钟)**
- 手冲或法兰绒过滤
- 中等磨度的咖啡豆
- 水温 88-90°C

**法式压壶 (5分钟)**
- 粗磨咖啡豆
- 浸泡式冲泡
- 最后要缓慢按压

**冷萃咖啡 (6分钟)**
- 实际上需要浸泡12-24小时
- 这是快速冷萃的时间
- 粗磨豆子

## 🔧 技术栈

- **HTML5** - 页面结构
- **CSS3** - 样式和动画
  - Glassmorphism 效果
  - 渐变背景
  - Flexbox 布局
  - 媒体查询响应式设计
- **Vanilla JavaScript** - 逻辑实现
  - Web Audio API 用于声音
  - Notification API 用于通知
  - 无外部依赖

## 📱 兼容性

- ✅ Chrome/Chromium (推荐)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ 移动浏览器 (iOS Safari, Android Chrome)

## 🌐 GitHub Pages 部署

本项目已配置为使用 GitHub Pages 自动部署。访问以下地址查看在线版本：

**[https://maowang2025.github.io/coffee-timer/](https://maowang2025.github.io/coffee-timer/)**

### 部署说明

1. 在 GitHub 上转到仓库 Settings
2. 向下滚动到 "GitHub Pages" 部分
3. 在 "Source" 中选择 "Deploy from a branch"
4. 选择 `main` 分支和 `/ (root)` 目录
5. 保存配置
6. 几分钟后网站将在上述链接生效

## 📄 许可证

MIT License - 随意使用和修改

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## ☕ 咖啡爱好者必读

- 不同的咖啡豆需要不同的水温
- 新鲜的咖啡豆比陈年豆子更容易出油
- 一致的水流速度和温度对萃取很重要
- 使用咖啡秤称重会更加精确
- 记录你喜欢的参数，找到自己的完美配方

---

**享受你的咖啡！☕**

Made with ❤️ for coffee lovers | 2026
