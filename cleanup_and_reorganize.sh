#!/bin/bash

echo "🧹 开始清理和重组项目结构..."

# 1. 清理Frontend多余组件文件
echo "📁 清理Frontend重复组件..."
cd /app/frontend/src/components

# 保留核心组件，删除重复版本
rm -f OctopodaApp.js OctopodaChinese.js OctopodaComplete.js OctopodaFinal.js OctopodaMinimal.js OctopodaSimple.js OctopodaSimpleFixed.js
rm -f AIKOLCarousel.js AIKOLCarouselUpdated.js KOLSectionUpdated.js
rm -f CommunityDemo.js CommunityBlueprint.js AdditionalPages.js

# 2. 清理多余的部署文档和脚本
echo "📄 清理多余的部署文档..."
cd /app/frontend
rm -f DEPLOYMENT-CHECKLIST.md GITHUB-PAGES-GUIDE.md TODD-DEPLOYMENT-GUIDE.md GITHUB-DEPLOY.md DEPLOYMENT.md
rm -f PHOTO_UPLOAD_GUIDE.md READY-TO-DEPLOY.md
rm -f upload_photos.sh surge-deploy.sh deploy.sh one-click-deploy.sh verify_photos.sh
rm -f build.log frontend_logs.txt

# 3. 清理多余的配置文件
rm -f vercel.json netlify.toml

# 4. 创建新的目录结构
echo "📂 创建新的目录结构..."
cd /app

# Frontend模块化目录
mkdir -p frontend/src/components/layout
mkdir -p frontend/src/components/auth
mkdir -p frontend/src/components/character
mkdir -p frontend/src/components/chat
mkdir -p frontend/src/components/payment
mkdir -p frontend/src/components/profile
mkdir -p frontend/src/components/common
mkdir -p frontend/src/services/api
mkdir -p frontend/src/services/ai
mkdir -p frontend/src/services/auth
mkdir -p frontend/src/services/payment
mkdir -p frontend/src/hooks
mkdir -p frontend/src/utils
mkdir -p frontend/src/contexts
mkdir -p frontend/src/constants

# Backend模块化目录
mkdir -p backend/api/auth
mkdir -p backend/api/chat
mkdir -p backend/api/character
mkdir -p backend/api/payment
mkdir -p backend/api/user
mkdir -p backend/core/database
mkdir -p backend/core/ai
mkdir -p backend/core/security
mkdir -p backend/services/ai
mkdir -p backend/services/auth
mkdir -p backend/services/payment
mkdir -p backend/services/character
mkdir -p backend/models
mkdir -p backend/utils
mkdir -p backend/middleware
mkdir -p backend/config

# 清理根目录多余文件
rm -f /app/requirements.txt  # 保留backend/requirements.txt
rm -f /app/yarn.lock        # 保留frontend/yarn.lock

echo "✅ 清理完成！"