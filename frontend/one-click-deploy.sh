#!/bin/bash

echo "🚀 Octopada.io - 一键部署到Vercel"
echo "=================================="

# 检查环境
if ! command -v node &> /dev/null; then
    echo "❌ 请先安装Node.js"
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "❌ 请先安装npm"
    exit 1
fi

# 安装Vercel CLI
echo "📥 安装Vercel CLI..."
npm install -g vercel

# 构建项目
echo "📦 构建项目..."
npm run build

# 登录并部署
echo "🔐 请登录Vercel..."
vercel login

echo "🚀 开始部署..."
vercel --prod

echo ""
echo "🎉 部署完成!"
echo "🌐 您的网站现在已经在线了!"
echo ""
echo "💡 接下来可以:"
echo "   1. 配置自定义域名"
echo "   2. 设置环境变量"
echo "   3. 查看部署日志"