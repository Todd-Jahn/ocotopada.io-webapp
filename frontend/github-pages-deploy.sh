#!/bin/bash

echo "🚀 Octopada.io - GitHub Pages 部署"
echo "=================================="

# 安装gh-pages
echo "📥 安装gh-pages..."
npm install --save-dev gh-pages

# 添加部署脚本到package.json
echo "⚙️ 配置package.json..."

# 检查是否已有homepage
if ! grep -q "homepage" package.json; then
    # 添加homepage字段（需要替换为实际的GitHub用户名和仓库名）
    echo "请在package.json中添加:"
    echo '"homepage": "https://yourusername.github.io/octopada-io",'
fi

# 检查是否已有部署脚本
if ! grep -q "predeploy" package.json; then
    echo "请在package.json的scripts中添加:"
    echo '"predeploy": "npm run build",'
    echo '"deploy": "gh-pages -d build"'
fi

echo ""
echo "📋 完成配置后运行:"
echo "npm run deploy"
echo ""
echo "🌐 网站将在以下地址可访问:"
echo "https://yourusername.github.io/octopada-io"