#!/bin/bash

echo "🚀 Octopada.io - Vercel部署脚本"
echo "=================================="

# 检查是否在正确目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误: 请在frontend目录运行此脚本"
    exit 1
fi

# 构建项目
echo "📦 构建项目..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ 构建成功!"
else
    echo "❌ 构建失败!"
    exit 1
fi

# 检查是否安装了Vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "📥 安装Vercel CLI..."
    npm install -g vercel
fi

echo ""
echo "🎯 准备部署到Vercel"
echo "请选择部署方式:"
echo "1) 测试部署 (vercel)"
echo "2) 生产部署 (vercel --prod)"
echo "3) 退出"

read -p "选择 (1-3): " choice

case $choice in
    1)
        echo "🧪 开始测试部署..."
        vercel
        ;;
    2)
        echo "🚀 开始生产部署..."
        vercel --prod
        ;;
    3)
        echo "👋 退出部署"
        exit 0
        ;;
    *)
        echo "❌ 无效选择"
        exit 1
        ;;
esac

echo ""
echo "🎉 部署完成!"
echo "💡 提示: 可以在Vercel控制台查看部署状态和日志"