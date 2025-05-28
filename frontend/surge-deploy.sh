#!/bin/bash

echo "🚀 Octopada.io - Surge.sh 快速部署"
echo "==================================="

# 检查build文件夹
if [ ! -d "build" ]; then
    echo "📦 构建项目..."
    npm run build
fi

# 安装surge
echo "📥 安装Surge..."
npm install -g surge

# 部署到surge
echo "🌐 部署到Surge.sh..."
echo "即将部署到: octopada-io-live.surge.sh"
echo ""

cd build
surge . octopada-io-live.surge.sh

echo ""
echo "🎉 部署完成!"
echo "🌐 访问地址: https://octopada-io-live.surge.sh"
echo ""
echo "💡 如果域名被占用，Surge会提示您选择其他域名"