# 🏗️ Octopoda AI Platform - 重构后项目结构

## 📁 项目目录结构

```
/app/
├── backend/                    # 后端服务 (FastAPI + MongoDB)
│   ├── api/                   # API路由模块
│   │   ├── auth/              # 认证相关API
│   │   │   └── routes.py      # 登录/注册/登出路由
│   │   ├── chat/              # 对话系统API  
│   │   │   └── routes.py      # 消息发送/会话管理
│   │   ├── character/         # 角色管理API
│   │   │   └── routes.py      # 角色创建/编辑/删除
│   │   ├── payment/           # 支付订阅API
│   │   │   └── routes.py      # 支付/订阅/回调
│   │   └── user/              # 用户管理API
│   │       └── routes.py      # 用户档案/成长数据
│   ├── config/                # 配置管理
│   │   └── settings.py        # 应用配置和环境变量
│   ├── core/                  # 核心功能
│   │   ├── database.py        # MongoDB连接管理
│   │   ├── ai.py             # AI服务集成 (TODO)
│   │   └── security.py        # 安全认证 (TODO)
│   ├── models/                # 数据模型
│   │   ├── __init__.py        # 模型导出
│   │   ├── user.py            # 用户模型
│   │   ├── character.py       # 角色模型
│   │   ├── chat.py            # 聊天模型
│   │   └── payment.py         # 支付模型
│   ├── services/              # 业务服务
│   │   ├── ai/                # AI服务 (百度文心一言/讯飞星火)
│   │   ├── auth/              # 认证服务
│   │   ├── payment/           # 支付服务 (微信/支付宝)
│   │   └── character/         # 角色定制服务
│   ├── middleware/            # 中间件 (TODO)
│   ├── utils/                 # 工具函数 (TODO)
│   ├── server.py             # 原始服务器文件 (保持兼容)
│   ├── server_new.py         # 重构后服务器文件
│   ├── requirements.txt       # Python依赖
│   └── .env                  # 环境变量
│
├── frontend/                  # 前端应用 (React + Tailwind)
│   ├── src/
│   │   ├── components/        # React组件
│   │   │   ├── auth/          # 认证相关组件
│   │   │   │   └── AuthPage.js
│   │   │   ├── character/     # 角色相关组件
│   │   │   │   └── AvatarCreation.js
│   │   │   ├── chat/          # 聊天相关组件
│   │   │   │   └── ChatInterface.js
│   │   │   ├── common/        # 通用组件
│   │   │   │   ├── LoadingScreen.js
│   │   │   │   └── RadarChart.js
│   │   │   ├── layout/        # 布局组件
│   │   │   │   ├── LandingPage.js
│   │   │   │   ├── TeamStoryPage.js
│   │   │   │   └── Footer.js
│   │   │   ├── payment/       # 支付相关组件
│   │   │   │   └── PaymentPage.js
│   │   │   └── profile/       # 用户档案组件
│   │   │       ├── ProfilePage.js
│   │   │       └── Dashboard.js
│   │   ├── services/          # 前端服务
│   │   │   ├── api/           # API调用
│   │   │   │   └── client.js  # API客户端
│   │   │   ├── ai/            # AI服务调用 (TODO)
│   │   │   ├── auth/          # 认证服务 (TODO)
│   │   │   └── payment/       # 支付服务 (TODO)
│   │   ├── hooks/             # React Hooks (TODO)
│   │   ├── utils/             # 工具函数 (TODO)
│   │   ├── contexts/          # React Context (TODO)
│   │   ├── constants/         # 常量定义 (TODO)
│   │   ├── App.js             # 主应用组件
│   │   ├── App.css            # 全局样式
│   │   └── index.js           # 应用入口
│   ├── public/                # 静态资源
│   ├── package.json           # 前端依赖
│   ├── tailwind.config.js     # Tailwind配置
│   └── .env                   # 前端环境变量
│
├── tests/                     # 测试目录 (TODO)
├── scripts/                   # 部署脚本 (TODO)
├── docker-compose.yml         # Docker配置 (TODO)
└── README.md                  # 项目文档
```

## 🎯 基于产品规划的架构设计

### 1. 用户与权限体系 👥
- **MySQL数据库设计** (TODO: 迁移到MySQL)
- **统一登录注册API** (`/api/auth/`)
- **RBAC权限控制** (`backend/core/security.py`)
- **多级权限分层** (用户/管理员/审核员)

### 2. 高级对话AI 🤖
- **百度文心一言集成** (`backend/services/ai/`)
- **讯飞星火API** (`backend/services/ai/`)
- **Redis缓存管理** (TODO)
- **多轮对话支持** (`/api/chat/`)

### 3. 虚拟角色定制 🎭
- **角色属性管理** (`backend/models/character.py`)
- **3D建模集成** (TODO: 商汤SenseMARS)
- **个性化设置** (`/api/character/`)
- **多模态支持** (语音/图像/3D)

### 4. 情感分析与成长 📈
- **哈工大BERT集成** (TODO)
- **成长任务系统** (`backend/models/growth.py`)
- **情绪判别分析** (`backend/services/emotion/`)
- **加密存储支持** (`backend/core/security.py`)

### 5. 互动故事系统 📚
- **MongoDB分支存储** (`backend/models/story.py`)
- **动态剧情计算** (`backend/services/story/`)
- **个性化内容生成** (TODO)
- **内容安全审核** (TODO)

### 6. 语音交互 🎵
- **科大讯飞TTS/ASR** (`backend/services/voice/`)
- **音频文件管理** (TODO: OSS存储)
- **多音色支持** (`backend/models/character.py`)
- **Web/小程序兼容** (`frontend/services/voice/`)

### 7. 会员订阅系统 💳
- **Credit积分系统** (`backend/models/payment.py`)
- **微信/支付宝支付** (`backend/services/payment/`)
- **订阅管理** (`/api/payment/`)
- **消费流水跟踪** (TODO)

### 8. 安全合规 🛡️
- **数据加密存储** (`backend/core/security.py`)
- **操作日志记录** (TODO)
- **内容安全检测** (TODO: 阿里/腾讯/百度)
- **GDPR合规支持** (TODO)

### 9. B端API接口 🏢
- **RESTful API设计** (`backend/api/`)
- **OAuth2认证** (TODO)
- **接口限流监控** (TODO)
- **WebHook回调** (TODO)

### 10. 监控运维 📊
- **Prometheus+Grafana** (TODO)
- **Docker容器化** (TODO)
- **K8s编排支持** (TODO)
- **自动化CI/CD** (TODO)

## 🚀 下一步开发计划

### Phase 1: 核心功能 (当前)
- [x] 项目结构重构
- [x] 基础API路由
- [x] 数据模型设计
- [ ] 数据库迁移 (MongoDB → MySQL)
- [ ] 基础认证系统

### Phase 2: AI集成
- [ ] 百度文心一言API
- [ ] 讯飞星火API
- [ ] 对话上下文管理
- [ ] 情感分析集成

### Phase 3: 角色系统
- [ ] 角色定制API
- [ ] 3D建模集成
- [ ] 语音合成系统
- [ ] 个性化设置

### Phase 4: 支付订阅
- [ ] 微信支付集成
- [ ] 支付宝集成
- [ ] Credit积分系统
- [ ] 订阅管理

### Phase 5: 高级功能
- [ ] 互动故事系统
- [ ] 成长任务管理
- [ ] B端API接口
- [ ] 内容安全审核

### Phase 6: 部署运维
- [ ] Docker容器化
- [ ] K8s部署配置
- [ ] 监控告警系统
- [ ] 自动化测试

## 📝 开发注意事项

1. **保持向后兼容**: 原有的 `server.py` 保持不变，新功能在 `server_new.py` 开发
2. **模块化开发**: 每个功能模块独立开发，便于并行开发和测试
3. **API优先**: 前端通过统一的API客户端调用后端服务
4. **环境配置**: 使用环境变量管理所有配置，支持多环境部署
5. **日志记录**: 所有关键操作都要有详细的日志记录
6. **错误处理**: 统一的错误处理机制和用户友好的错误提示

## 🔧 快速开始

### 后端开发
```bash
cd /app/backend
# 安装依赖
pip install -r requirements.txt
# 启动新的服务器
python server_new.py
```

### 前端开发
```bash
cd /app/frontend
# 安装依赖 (使用yarn)
yarn install
# 启动开发服务器
yarn start
```

---

**项目已完成基础架构重构，可以按照产品规划逐步开发各个模块！** 🎉