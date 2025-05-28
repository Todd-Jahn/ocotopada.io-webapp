#!/bin/bash

echo "=== 照片上传验证脚本 ==="
echo ""

# 检查文件是否存在且不为空
check_file() {
    local file=$1
    local name=$2
    
    if [ -f "$file" ] && [ -s "$file" ]; then
        local size=$(du -h "$file" | cut -f1)
        echo "✅ $name: 文件存在，大小: $size"
    elif [ -f "$file" ]; then
        echo "⚠️  $name: 文件存在但为空"
    else
        echo "❌ $name: 文件不存在"
    fi
}

echo "检查AI伙伴照片文件状态："
echo ""

check_file "/app/frontend/public/images/avatars/xiaoxuan.jpg" "小萱 (位置2)"
check_file "/app/frontend/public/images/avatars/manli.jpg" "曼丽 (位置3)"
check_file "/app/frontend/public/images/avatars/ludi.jpg" "陆迪 (位置4)"
check_file "/app/frontend/public/images/avatars/simonli.jpg" "Simon Li (位置5)"
check_file "/app/frontend/public/images/avatars/linchengqing.jpg" "林成卿 (位置6)"

echo ""
echo "文件夹总览："
ls -la /app/frontend/public/images/avatars/