#!/bin/bash

# 照片上传脚本
# 使用方法：在您的本地 Mac 终端运行此脚本

echo "=== AI伙伴照片上传脚本 ==="
echo ""

# 源文件夹路径
SOURCE_DIR="/Users/toddjahn/Desktop/avatar pics"
TARGET_SERVER="[您的服务器地址]"
TARGET_DIR="/app/frontend/public/images/avatars/"

echo "源文件夹: $SOURCE_DIR"
echo "目标路径: $TARGET_DIR"
echo ""

# 检查源文件夹是否存在
if [ ! -d "$SOURCE_DIR" ]; then
    echo "❌ 错误: 找不到源文件夹 $SOURCE_DIR"
    exit 1
fi

echo "📁 文件夹内容："
ls -la "$SOURCE_DIR"
echo ""

echo "请按照以下顺序上传照片："
echo ""
echo "位置2 - 小萱:"
echo "  本地文件: [第2张照片的文件名]"
echo "  目标: xiaoxuan.jpg"
echo ""
echo "位置3 - 曼丽:"
echo "  本地文件: [第3张照片的文件名]"
echo "  目标: manli.jpg"
echo ""
echo "位置4 - 陆迪:"
echo "  本地文件: [第4张照片的文件名]"
echo "  目标: ludi.jpg"
echo ""
echo "位置5 - Simon Li:"
echo "  本地文件: [第5张照片的文件名]"
echo "  目标: simonli.jpg"
echo ""
echo "位置6 - 林成卿:"
echo "  本地文件: [第6张照片的文件名]"
echo "  目标: linchengqing.jpg"
echo ""

# 如果有 scp 访问权限，可以取消注释以下部分
# echo "开始上传..."
# scp "$SOURCE_DIR/[第2张照片]" "$TARGET_SERVER:$TARGET_DIR/xiaoxuan.jpg"
# scp "$SOURCE_DIR/[第3张照片]" "$TARGET_SERVER:$TARGET_DIR/manli.jpg"
# scp "$SOURCE_DIR/[第4张照片]" "$TARGET_SERVER:$TARGET_DIR/ludi.jpg"
# scp "$SOURCE_DIR/[第5张照片]" "$TARGET_SERVER:$TARGET_DIR/simonli.jpg"
# scp "$SOURCE_DIR/[第6张照片]" "$TARGET_SERVER:$TARGET_DIR/linchengqing.jpg"