#!/bin/bash

echo "🚀 Octopada.io - GitHub Pages 自动部署"
echo "====================================="

# 检查是否在正确目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误: 请在项目根目录运行此脚本"
    exit 1
fi

# 检查homepage配置
if grep -q "yourusername" package.json; then
    echo "⚠️  警告: 请先修改package.json中的homepage字段"
    echo "   将 'yourusername' 替换为您的实际GitHub用户名"
    echo ""
    echo "   示例: \"homepage\": \"https://john123.github.io/octopada-io\""
    echo ""
    read -p "已修改完成，继续部署? (y/N): " confirm
    if [[ $confirm != [yY] ]]; then
        echo "👋 部署已取消"
        exit 0
    fi
fi

# 安装依赖
echo "📦 安装依赖..."
npm install

# 安装gh-pages（如果没有）
if ! npm list gh-pages > /dev/null 2>&1; then
    echo "📥 安装gh-pages..."
    npm install --save-dev gh-pages
fi

# 构建项目
echo "🔨 构建项目..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 构建失败!"
    exit 1
fi

# 部署到GitHub Pages
echo "🚀 部署到GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 部署成功!"
    echo ""
    echo "🌐 您的网站将在以下地址可访问:"
    
    # 从package.json提取homepage URL
    homepage=$(grep '"homepage"' package.json | sed 's/.*"homepage": *"\([^"]*\)".*/\1/')
    echo "   $homepage"
    echo ""
    echo "⏰ 注意: GitHub Pages可能需要5-10分钟来更新"
    echo "💡 如果第一次部署，请在GitHub仓库设置中启用Pages功能"
else
    echo "❌ 部署失败!"
    echo "💡 请检查GitHub仓库权限和网络连接"
fi