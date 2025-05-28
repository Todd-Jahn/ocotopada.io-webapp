import React, { useState } from "react";
import { 
  Users, 
  Heart, 
  Award,
  MessageSquare,
  BookOpen,
  Target,
  HelpCircle,
  Gift,
  TrendingUp,
  Shield,
  Eye,
  EyeOff,
  Plus,
  Star,
  Zap,
  Clock,
  CheckCircle,
  User,
  Crown,
  Bot,
  Settings,
  Filter,
  Search,
  Bookmark,
  Share2,
  MoreHorizontal,
  ChevronRight,
  Calendar,
  Tag
} from "lucide-react";

const CommunityBlueprint = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [userRole, setUserRole] = useState('participant');

  // 社区架构概览
  const CommunityOverview = () => (
    <div className="space-y-8">
      {/* 社区愿景 */}
      <div className="bg-gradient-to-br from-octopoda-primary to-octopoda-sage p-8 rounded-2xl text-white">
        <h2 className="text-3xl font-bold mb-4">共创成长社区</h2>
        <p className="text-lg text-blue-100 leading-relaxed">
          在这里，每个人都是成长故事的主角。与AI成长伙伴和真实用户一起，
          共同创造有温度的成长内容，分享真实人生经历，互相陪伴前行。
        </p>
      </div>

      {/* 核心价值观 */}
      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            icon: <Heart className="w-8 h-8" />,
            title: "真诚共情",
            description: "真实分享，用心倾听，温暖陪伴每一个成长时刻"
          },
          {
            icon: <Shield className="w-8 h-8" />,
            title: "隐私保护",
            description: "多层隐私设置，让你在安全的环境中敞开心扉"
          },
          {
            icon: <Users className="w-8 h-8" />,
            title: "社区赋能",
            description: "每个人都能贡献价值，共同构建成长知识库"
          },
          {
            icon: <TrendingUp className="w-8 h-8" />,
            title: "持续成长",
            description: "记录进步轨迹，见证彼此的蜕变历程"
          }
        ].map((value, i) => (
          <div key={i} className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-shadow duration-200">
            <div className="text-octopoda-coral mb-4">{value.icon}</div>
            <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // 社区结构设计
  const CommunityStructure = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">社区架构设计</h2>
      
      {/* 六大功能区块 */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            icon: <BookOpen className="w-6 h-6" />,
            title: "成长故事",
            subtitle: "Growth Stories",
            description: "分享真实的人生故事，记录成长足迹",
            features: ["故事发布", "进度追踪", "情感标签", "成长里程碑"],
            color: "bg-blue-50 border-blue-200"
          },
          {
            icon: <Heart className="w-6 h-6" />,
            title: "陪伴日记",
            subtitle: "Companion Diaries",
            description: "与AI伙伴的深度对话记录和成长感悟",
            features: ["对话回顾", "感悟提炼", "成长洞察", "情绪追踪"],
            color: "bg-pink-50 border-pink-200"
          },
          {
            icon: <Users className="w-6 h-6" />,
            title: "共创剧本",
            subtitle: "Co-creation Scripts",
            description: "用户与AI协作创造的成长场景和解决方案",
            features: ["剧本创作", "角色设定", "场景构建", "结果分享"],
            color: "bg-purple-50 border-purple-200"
          },
          {
            icon: <Target className="w-6 h-6" />,
            title: "成长挑战",
            subtitle: "Growth Challenges",
            description: "个人和团队成长挑战，激发潜能",
            features: ["挑战任务", "团队协作", "进度打卡", "成果展示"],
            color: "bg-green-50 border-green-200"
          },
          {
            icon: <HelpCircle className="w-6 h-6" />,
            title: "互助问答",
            subtitle: "Q&A Support",
            description: "社区智慧集合，解答成长困惑",
            features: ["问题发布", "专家回答", "投票评分", "最佳答案"],
            color: "bg-orange-50 border-orange-200"
          },
          {
            icon: <Gift className="w-6 h-6" />,
            title: "资源交换",
            subtitle: "Resource Exchange",
            description: "分享和交换成长资源、工具和方法",
            features: ["资源分享", "工具推荐", "方法交流", "经验传递"],
            color: "bg-yellow-50 border-yellow-200"
          }
        ].map((section, i) => (
          <div key={i} className={`p-6 rounded-xl border-2 ${section.color} hover:shadow-lg transition-all duration-200`}>
            <div className="flex items-center mb-4">
              <div className="text-octopoda-primary mr-3">{section.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-900">{section.title}</h3>
                <p className="text-xs text-gray-500">{section.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">{section.description}</p>
            <div className="space-y-2">
              {section.features.map((feature, j) => (
                <div key={j} className="flex items-center text-xs text-gray-500">
                  <CheckCircle className="w-3 h-3 mr-2 text-octopoda-sage" />
                  {feature}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // 用户角色系统
  const UserRolesSystem = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">用户角色系统</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {[
          {
            role: "参与者",
            subtitle: "Participant",
            icon: <User className="w-8 h-8" />,
            color: "bg-blue-500",
            description: "社区的基础成员，积极参与各类成长活动",
            permissions: [
              "发布成长故事和日记",
              "参与挑战和讨论",
              "获得成长积分和徽章",
              "使用匿名发布功能",
              "访问基础学习资源"
            ],
            growthPath: "通过持续参与和贡献，可升级为共创者"
          },
          {
            role: "共创者",
            subtitle: "Co-creator",
            icon: <Star className="w-8 h-8" />,
            color: "bg-purple-500",
            description: "资深成员，能够与AI协作创造高质量内容",
            permissions: [
              "创建和主导共创剧本",
              "发起成长挑战",
              "担任新人导师",
              "参与内容审核",
              "获得创作者激励"
            ],
            growthPath: "通过优质贡献，获得社区认可和影响力"
          },
          {
            role: "虚拟KOL",
            subtitle: "Virtual KOL",
            icon: <Crown className="w-8 h-8" />,
            color: "bg-octopoda-coral",
            description: "AI驱动的虚拟导师，提供专业指导和陪伴",
            permissions: [
              "发布专业成长内容",
              "提供个性化指导",
              "参与深度对话",
              "创建学习路径",
              "数据分析和洞察"
            ],
            growthPath: "通过机器学习不断进化，提供更好的服务"
          },
          {
            role: "社区管家",
            subtitle: "Community Admin",
            icon: <Bot className="w-8 h-8" />,
            color: "bg-octopoda-sage",
            description: "AI助手+人工管理员，维护社区健康环境",
            permissions: [
              "内容审核和管理",
              "用户行为分析",
              "社区活动策划",
              "问题处理和支持",
              "数据统计和报告"
            ],
            growthPath: "持续优化社区运营，提升用户体验"
          }
        ].map((userRole, i) => (
          <div key={i} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-200">
            <div className={`${userRole.color} p-6 text-white`}>
              <div className="flex items-center mb-4">
                {userRole.icon}
                <div className="ml-4">
                  <h3 className="text-xl font-bold">{userRole.role}</h3>
                  <p className="text-white/80 text-sm">{userRole.subtitle}</p>
                </div>
              </div>
              <p className="text-white/90 leading-relaxed">{userRole.description}</p>
            </div>
            
            <div className="p-6">
              <h4 className="font-semibold text-gray-900 mb-3">权限与功能</h4>
              <div className="space-y-2 mb-4">
                {userRole.permissions.map((permission, j) => (
                  <div key={j} className="flex items-start text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 mr-2 text-octopoda-sage mt-0.5 flex-shrink-0" />
                    {permission}
                  </div>
                ))}
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <h5 className="text-sm font-medium text-gray-700 mb-1">成长路径</h5>
                <p className="text-xs text-gray-600">{userRole.growthPath}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // 核心功能系统
  const CoreFeatures = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">核心功能系统</h2>
      
      {/* 成长积分系统 */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-8 rounded-2xl border border-yellow-200">
        <div className="flex items-center mb-6">
          <Award className="w-8 h-8 text-yellow-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">成长积分系统</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">积分获取方式</h4>
            <div className="space-y-3">
              {[
                { action: "发布成长故事", points: "+10分", description: "分享真实成长经历" },
                { action: "完成每日反思", points: "+5分", description: "记录当天成长感悟" },
                { action: "参与社区讨论", points: "+3分", description: "积极回复和互动" },
                { action: "帮助他人解答", points: "+8分", description: "提供有价值的建议" },
                { action: "完成成长挑战", points: "+15分", description: "达成挑战目标" },
                { action: "创作共创内容", points: "+20分", description: "高质量原创贡献" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between bg-white p-3 rounded-lg">
                  <div>
                    <span className="font-medium text-gray-900">{item.action}</span>
                    <p className="text-xs text-gray-500">{item.description}</p>
                  </div>
                  <span className="text-yellow-600 font-bold">{item.points}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">积分应用场景</h4>
            <div className="space-y-3">
              {[
                "解锁高级AI功能",
                "兑换成长资源",
                "获得专属徽章",
                "参与特殊活动",
                "提升社区等级",
                "获得优先支持"
              ].map((usage, i) => (
                <div key={i} className="flex items-center bg-white p-3 rounded-lg">
                  <Zap className="w-4 h-4 text-yellow-600 mr-3" />
                  <span className="text-gray-700">{usage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 徽章系统 */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-2xl border border-purple-200">
        <div className="flex items-center mb-6">
          <Star className="w-8 h-8 text-purple-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">共创徽章系统</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              name: "故事新手",
              icon: "📝",
              description: "发布首个成长故事",
              rarity: "基础",
              color: "bg-gray-100"
            },
            {
              name: "深度思考者",
              icon: "🤔",
              description: "连续7天完成深度反思",
              rarity: "进阶",
              color: "bg-blue-100"
            },
            {
              name: "共创大师",
              icon: "🎭",
              description: "创作10个高质量共创剧本",
              rarity: "专家",
              color: "bg-purple-100"
            },
            {
              name: "温暖陪伴者",
              icon: "💝",
              description: "帮助50位社区成员解决困惑",
              rarity: "稀有",
              color: "bg-pink-100"
            },
            {
              name: "成长导师",
              icon: "🌟",
              description: "指导新成员完成成长挑战",
              rarity: "传奇",
              color: "bg-yellow-100"
            },
            {
              name: "社区之光",
              icon: "👑",
              description: "获得社区年度最佳贡献奖",
              rarity: "史诗",
              color: "bg-gradient-to-r from-yellow-200 to-orange-200"
            }
          ].map((badge, i) => (
            <div key={i} className={`${badge.color} p-4 rounded-xl border border-gray-200`}>
              <div className="text-3xl mb-2">{badge.icon}</div>
              <h4 className="font-semibold text-gray-900 mb-1">{badge.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{badge.description}</p>
              <span className="text-xs bg-white px-2 py-1 rounded-full text-gray-500">
                {badge.rarity}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* AI智能功能 */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
        <div className="flex items-center mb-6">
          <Bot className="w-8 h-8 text-blue-600 mr-3" />
          <h3 className="text-2xl font-bold text-gray-900">AI智能功能</h3>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">内容审核</h4>
            <div className="space-y-3">
              {[
                "自动检测不当内容",
                "情感色彩分析",
                "真实性验证",
                "隐私信息保护",
                "建设性建议提供"
              ].map((feature, i) => (
                <div key={i} className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">智能推荐</h4>
            <div className="space-y-3">
              {[
                "个性化内容推送",
                "相似经历匹配",
                "成长路径建议",
                "伙伴关系推荐",
                "资源智能筛选"
              ].map((feature, i) => (
                <div key={i} className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // UI流程设计
  const UIFlowDesign = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">用户界面流程设计</h2>
      
      {/* 主要用户流程 */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-octopoda-primary p-6 text-white">
          <h3 className="text-xl font-bold">核心用户流程</h3>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            {[
              {
                step: 1,
                title: "个人档案设置",
                description: "用户注册后，创建个人成长档案，设置隐私偏好",
                details: ["填写基本信息", "选择成长目标", "设置隐私级别", "选择AI伙伴"]
              },
              {
                step: 2,
                title: "社区探索",
                description: "浏览不同区块，了解社区文化和功能",
                details: ["查看热门故事", "了解挑战活动", "发现感兴趣的话题", "关注榜样用户"]
              },
              {
                step: 3,
                title: "首次发布",
                description: "分享第一个成长故事或参与讨论",
                details: ["选择发布类型", "编写内容", "设置可见性", "添加标签分类"]
              },
              {
                step: 4,
                title: "社区互动",
                description: "与其他用户和AI伙伴进行深度互动",
                details: ["回复评论", "参与讨论", "提供建议", "寻求帮助"]
              },
              {
                step: 5,
                title: "成长跟踪",
                description: "记录和分析个人成长轨迹",
                details: ["查看积分变化", "分析成长报告", "设置新目标", "分享成果"]
              }
            ].map((flow, i) => (
              <div key={i} className="flex items-start">
                <div className="flex-shrink-0 w-8 h-8 bg-octopoda-coral text-white rounded-full flex items-center justify-center font-bold text-sm mr-4">
                  {flow.step}
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-2">{flow.title}</h4>
                  <p className="text-gray-600 mb-3">{flow.description}</p>
                  <div className="grid grid-cols-2 gap-2">
                    {flow.details.map((detail, j) => (
                      <div key={j} className="text-sm text-gray-500 flex items-center">
                        <ChevronRight className="w-3 h-3 mr-1" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 界面布局设计 */}
      <div className="bg-gray-50 p-8 rounded-2xl">
        <h3 className="text-xl font-bold text-gray-900 mb-6">界面布局设计</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* 主导航 */}
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">主导航区</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-octopoda-primary">
                <BookOpen className="w-4 h-4 mr-2" />
                成长故事
              </div>
              <div className="flex items-center text-gray-600">
                <Heart className="w-4 h-4 mr-2" />
                陪伴日记
              </div>
              <div className="flex items-center text-gray-600">
                <Users className="w-4 h-4 mr-2" />
                共创剧本
              </div>
              <div className="flex items-center text-gray-600">
                <Target className="w-4 h-4 mr-2" />
                成长挑战
              </div>
              <div className="flex items-center text-gray-600">
                <HelpCircle className="w-4 h-4 mr-2" />
                互助问答
              </div>
              <div className="flex items-center text-gray-600">
                <Gift className="w-4 h-4 mr-2" />
                资源交换
              </div>
            </div>
          </div>

          {/* 内容区域 */}
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">内容展示区</h4>
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">故事标题</span>
                  <Eye className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-xs text-gray-500">故事内容预览...</p>
              </div>
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">挑战活动</span>
                  <Target className="w-4 h-4 text-gray-400" />
                </div>
                <p className="text-xs text-gray-500">挑战描述预览...</p>
              </div>
            </div>
          </div>

          {/* 侧边栏 */}
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-3">个人中心</h4>
            <div className="space-y-3">
              <div className="bg-gradient-to-r from-octopoda-coral to-pink-500 p-3 rounded-lg text-white">
                <div className="text-xs mb-1">成长积分</div>
                <div className="text-lg font-bold">1,250</div>
              </div>
              <div className="bg-gradient-to-r from-octopoda-sage to-green-500 p-3 rounded-lg text-white">
                <div className="text-xs mb-1">获得徽章</div>
                <div className="text-lg font-bold">8</div>
              </div>
              <div className="bg-gradient-to-r from-octopoda-primary to-blue-500 p-3 rounded-lg text-white">
                <div className="text-xs mb-1">社区等级</div>
                <div className="text-lg font-bold">共创者</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // 社区健康指南
  const CommunityGuidelines = () => (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">社区健康管理</h2>
      
      {/* 内容准则 */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-green-50 p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-green-800 mb-2">内容发布准则</h3>
          <p className="text-green-700">维护积极向上的社区氛围，促进真诚的成长交流</p>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-green-800 mb-4 flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                鼓励的内容
              </h4>
              <div className="space-y-2">
                {[
                  "真实的成长故事和经历分享",
                  "建设性的建议和经验交流",
                  "积极正面的情感表达",
                  "有价值的学习资源分享",
                  "温暖的陪伴和支持话语",
                  "创新的成长方法和工具"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-red-800 mb-4 flex items-center">
                <X className="w-5 h-5 mr-2" />
                不当的内容
              </h4>
              <div className="space-y-2">
                {[
                  "虚假或误导性的成长故事",
                  "攻击、诋毁他人的言论",
                  "过度负面或极端的情绪表达",
                  "商业广告和无关推广内容",
                  "涉及隐私泄露的个人信息",
                  "违法违规或有害的建议"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 隐私保护机制 */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-blue-50 p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-blue-800 mb-2">隐私保护机制</h3>
          <p className="text-blue-700">多层级隐私设置，保护用户的安全和隐私</p>
        </div>
        
        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                level: "公开",
                icon: <Users className="w-6 h-6" />,
                description: "所有社区成员可见",
                features: ["适合正能量分享", "获得更多互动", "提升社区影响力"]
              },
              {
                level: "好友可见",
                icon: <Heart className="w-6 h-6" />,
                description: "仅关注的用户可见",
                features: ["深度交流分享", "建立信任关系", "获得精准反馈"]
              },
              {
                level: "匿名发布",
                icon: <EyeOff className="w-6 h-6" />,
                description: "隐藏身份信息发布",
                features: ["敏感话题讨论", "保护个人隐私", "减少社交压力"]
              }
            ].map((privacy, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="text-blue-600 mr-3">{privacy.icon}</div>
                  <h4 className="font-semibold text-gray-900">{privacy.level}</h4>
                </div>
                <p className="text-sm text-gray-600 mb-4">{privacy.description}</p>
                <div className="space-y-2">
                  {privacy.features.map((feature, j) => (
                    <div key={j} className="text-xs text-gray-500 flex items-center">
                      <CheckCircle className="w-3 h-3 mr-2 text-blue-500" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 激励机制 */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
        <div className="bg-purple-50 p-6 border-b border-gray-200">
          <h3 className="text-xl font-bold text-purple-800 mb-2">激励机制设计</h3>
          <p className="text-purple-700">通过多元化激励，促进用户持续参与和贡献</p>
        </div>
        
        <div className="p-6">
          <div className="space-y-6">
            {[
              {
                type: "即时反馈",
                description: "用户行为获得即时的积分、徽章奖励",
                examples: ["发布内容+积分", "获得点赞+声望", "完成挑战+徽章"]
              },
              {
                type: "社会认可",
                description: "通过社区展示和排行榜获得认可",
                examples: ["优质内容推荐", "月度贡献者", "成长故事精选"]
              },
              {
                type: "实用价值",
                description: "提供实际的成长帮助和资源获取",
                examples: ["专属学习资源", "一对一指导机会", "线下活动邀请"]
              },
              {
                type: "情感连接",
                description: "建立深度的人际关系和归属感",
                examples: ["成长伙伴匹配", "互助小组", "社区大家庭"]
              }
            ].map((incentive, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-3">{incentive.type}</h4>
                <p className="text-gray-600 mb-4">{incentive.description}</p>
                <div className="flex flex-wrap gap-2">
                  {incentive.examples.map((example, j) => (
                    <span key={j} className="bg-white px-3 py-1 rounded-full text-sm text-gray-600 border border-gray-200">
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // 标签页切换组件
  const TabNav = () => (
    <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex space-x-8 overflow-x-auto">
          {[
            { id: 'overview', name: '社区概览', icon: <Users className="w-4 h-4" /> },
            { id: 'structure', name: '架构设计', icon: <BookOpen className="w-4 h-4" /> },
            { id: 'roles', name: '角色系统', icon: <Crown className="w-4 h-4" /> },
            { id: 'features', name: '核心功能', icon: <Zap className="w-4 h-4" /> },
            { id: 'ui-flow', name: 'UI流程', icon: <Settings className="w-4 h-4" /> },
            { id: 'guidelines', name: '管理指南', icon: <Shield className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-4 border-b-2 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${
                activeTab === tab.id
                  ? 'border-octopoda-coral text-octopoda-coral'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab.icon}
              <span className="ml-2">{tab.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Octopada.io 共创社区设计蓝图
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            构建一个温暖、安全、有价值的成长社区，让每个人都能在这里找到陪伴，
            分享成长，实现蜕变。用户与AI伙伴共同创造有意义的内容，建立深度连接。
          </p>
        </div>
      </div>

      {/* 标签页导航 */}
      <TabNav />

      {/* 内容区域 */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {activeTab === 'overview' && <CommunityOverview />}
        {activeTab === 'structure' && <CommunityStructure />}
        {activeTab === 'roles' && <UserRolesSystem />}
        {activeTab === 'features' && <CoreFeatures />}
        {activeTab === 'ui-flow' && <UIFlowDesign />}
        {activeTab === 'guidelines' && <CommunityGuidelines />}
      </div>
    </div>
  );
};

export default CommunityBlueprint;