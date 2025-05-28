# 🚀 GitHub Pages 部署完整指南

## 📋 完整步骤

### 步骤1: 创建GitHub仓库

1. **访问GitHub**: [github.com](https://github.com)
2. **创建新仓库**:
   - 仓库名: `octopada-io`
   - 设为Public（GitHub Pages免费版需要）
   - ✅ 勾选 "Add a README file"

### 步骤2: 上传项目文件

**方法A: 网页上传**
1. 进入仓库
2. 点击 "uploading an existing file"
3. 上传所有文件（除了node_modules）

**方法B: Git命令行**
```bash
git clone https://github.com/yourusername/octopada-io.git
cd octopada-io
# 复制所有项目文件到此目录
git add .
git commit -m "🚀 Initial commit: Octopada.io"
git push origin main
```

### 步骤3: 修改package.json

⚠️ **重要**: 将package.json中的homepage URL修改为您的实际GitHub地址：

```json
"homepage": "https://你的GitHub用户名.github.io/octopada-io"
```

例如：
- 用户名是 `john123`
- 仓库名是 `octopada-io`
- 则homepage应该是: `"https://john123.github.io/octopada-io"`

### 步骤4: 本地部署到GitHub Pages

```bash
# 1. 克隆仓库到本地
git clone https://github.com/yourusername/octopada-io.git
cd octopada-io

# 2. 安装依赖
npm install

# 3. 部署到GitHub Pages
npm run deploy
```

### 步骤5: 启用GitHub Pages

1. **进入GitHub仓库设置**:
   - 仓库页面 → Settings → Pages

2. **配置Source**:
   - Source: `Deploy from a branch`
   - Branch: `gh-pages`
   - Folder: `/ (root)`

3. **保存设置**

### 步骤6: 访问网站

🎉 **部署完成后，您的网站将在以下地址可访问**:
```
https://你的GitHub用户名.github.io/octopada-io
```

例如: `https://john123.github.io/octopada-io`

---

## 🔧 故障排除

### 问题1: 404错误
**解决方案**: 确保homepage URL正确，等待5-10分钟让GitHub Pages更新

### 问题2: 空白页面
**解决方案**: 检查浏览器控制台错误，通常是路径问题

### 问题3: 样式丢失
**解决方案**: 确保homepage字段设置正确

### 问题4: gh-pages分支不存在
**解决方案**: 运行 `npm run deploy` 会自动创建

---

## ⚡ 更新网站

每次修改后重新部署：
```bash
git add .
git commit -m "✨ 更新内容"
git push origin main
npm run deploy
```

---

## 🌐 自定义域名（可选）

如果您想使用 octopada.io 域名：

1. **在仓库根目录创建 CNAME 文件**:
   ```
   octopada.io
   ```

2. **在Squarespace配置DNS**:
   ```
   类型: CNAME
   主机: @
   值: yourusername.github.io
   ```

---

✨ **GitHub Pages优势**:
- 🆓 完全免费
- 🔒 自动SSL
- 🌍 全球CDN
- 🔄 自动部署