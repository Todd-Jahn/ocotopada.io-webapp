import React from "react";
import { Users, Heart, Calendar, MessageSquare, Star, Trophy, Mail } from "lucide-react";

// 共创社区页面
export const CommunityPage = () => {
  const [activeTab, setActiveTab] = React.useState('stories');

  const tabs = [
    { id: 'stories', label: '用户故事', icon: <Heart size={18} /> },
    { id: 'creation', label: '内容共创', icon: <MessageSquare size={18} /> },
    { id: 'events', label: '活动专区', icon: <Calendar size={18} /> }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-octopoda-primary mb-6">
            共创社区
            <span className="block text-octopoda-coral">一起成长，共同创造</span>
          </h1>
          
          {/* 选项卡 */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 shadow-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id ? 'bg-octopoda-coral text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 用户故事 */}
        {activeTab === 'stories' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "职场突破之路",
                author: "林小雨",
                content: "在AI导师林溪的陪伴下，我从迷茫的职场新人成长为团队负责人，每一步都充满收获...",
                avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
                tags: ["职场成长", "领导力"],
                likes: 156
              },
              {
                title: "育儿路上不孤单",
                author: "张妈妈",
                content: "感谢AI伙伴李晓婧，帮我度过了育儿的焦虑期，孩子的成长和我的心态都变得更好...",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
                tags: ["亲子教育", "心理成长"],
                likes: 203
              },
              {
                title: "心理调节的力量",
                author: "小程",
                content: "程野陪伴我走过了人生低谷，学会了情绪管理，现在的我更加自信和阳光...",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                tags: ["心理健康", "自我提升"],
                likes: 124
              }
            ].map((story, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  <img src={story.avatar} alt={story.author} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h3 className="font-bold text-octopoda-primary">{story.title}</h3>
                    <p className="text-gray-600 text-sm">by {story.author}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-4 line-clamp-3">{story.content}</p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {story.tags.map((tag, j) => (
                      <span key={j} className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Heart size={16} className="mr-1" />
                    {story.likes}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 内容共创 */}
        {activeTab === 'creation' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-2xl font-bold text-octopoda-primary mb-6">参与AI伙伴故事创作</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-octopoda-coral transition-colors duration-300">
                  <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">故事创意提交</h3>
                  <p className="text-gray-600 text-sm">分享你希望AI伙伴经历的故事情节</p>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-octopoda-coral transition-colors duration-300">
                  <Star className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">角色设计参与</h3>
                  <p className="text-gray-600 text-sm">参与新AI伙伴的性格和背景设计</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "本周热门创意", count: "128个", color: "bg-blue-100 text-blue-700" },
                { title: "参与用户", count: "2,456人", color: "bg-green-100 text-green-700" },
                { title: "已实现创意", count: "45个", color: "bg-purple-100 text-purple-700" }
              ].map((stat, i) => (
                <div key={i} className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-bold mb-2 ${stat.color}`}>
                    {stat.count}
                  </div>
                  <p className="font-semibold text-gray-900">{stat.title}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 活动专区 */}
        {activeTab === 'events' && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">每月成长挑战</h3>
                <p className="mb-6">与AI伙伴一起完成30天成长挑战，获得专属徽章和奖励</p>
                <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
                  参与挑战
                </button>
              </div>
              <div className="bg-gradient-to-r from-pink-500 to-rose-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">线上分享会</h3>
                <p className="mb-6">每周六晚8点，用户分享成长故事，AI伙伴在线互动</p>
                <button className="bg-white text-pink-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100">
                  预约参加
                </button>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-octopoda-primary mb-6">近期活动</h3>
              <div className="space-y-4">
                {[
                  { date: "12月15日", title: "AI伙伴生日庆典", description: "庆祝林溪上线一周年", status: "即将开始" },
                  { date: "12月20日", title: "年度成长总结", description: "回顾2024年成长足迹", status: "报名中" },
                  { date: "12月25日", title: "新年愿望许愿", description: "与AI伙伴一起许下新年愿望", status: "敬请期待" }
                ].map((event, i) => (
                  <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-octopoda-coral mr-3" />
                      <div>
                        <h4 className="font-semibold">{event.title}</h4>
                        <p className="text-gray-600 text-sm">{event.date} - {event.description}</p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                      {event.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// 企业同行页面
export const EnterprisePage = () => {
  const [activeTab, setActiveTab] = React.useState('mcn');

  const tabs = [
    { id: 'mcn', label: 'MCN合作' },
    { id: 'influencer', label: '达人合作' },
    { id: 'pgc', label: 'PGC团队' }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-octopoda-primary mb-6">
            企业同行
            <span className="block text-octopoda-sage">携手共创AI陪伴未来</span>
          </h1>
          
          {/* 选项卡 */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full p-1 shadow-lg">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === tab.id ? 'bg-octopoda-primary text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {activeTab === 'mcn' && (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-octopoda-primary mb-6">MCN机构合作</h2>
              <p className="text-xl text-gray-600">与优秀MCN机构深度合作，共同打造AI+内容生态</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "内容共创", description: "AI伙伴与真人主播联动，创造独特内容形式", icon: "🎭" },
                { title: "技术赋能", description: "提供AI技术支持，提升内容制作效率", icon: "⚡" },
                { title: "数据共享", description: "用户行为数据分析，优化内容策略", icon: "📊" }
              ].map((item, i) => (
                <div key={i} className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-octopoda-primary mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'influencer' && (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-octopoda-primary mb-6">达人合作计划</h2>
              <p className="text-xl text-gray-600">邀请优秀内容创作者加入，共同探索AI陪伴新形态</p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-octopoda-primary mb-4">合作模式</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center"><Trophy className="w-5 h-5 text-yellow-500 mr-3" />AI形象授权合作</li>
                    <li className="flex items-center"><Trophy className="w-5 h-5 text-yellow-500 mr-3" />内容共创分成</li>
                    <li className="flex items-center"><Trophy className="w-5 h-5 text-yellow-500 mr-3" />专属AI助手定制</li>
                    <li className="flex items-center"><Trophy className="w-5 h-5 text-yellow-500 mr-3" />粉丝互动增强</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-octopoda-primary mb-4">申请条件</h3>
                  <ul className="space-y-3 text-gray-600">
                    <li>• 粉丝数量 10万+</li>
                    <li>• 内容垂直度高</li>
                    <li>• 粉丝互动活跃</li>
                    <li>• 认同AI陪伴理念</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pgc' && (
          <div className="space-y-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-octopoda-primary mb-6">PGC专业团队</h2>
              <p className="text-xl text-gray-600">汇聚专业内容制作团队，打造高质量AI陪伴内容</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { role: "心理咨询师", count: "15+", description: "专业心理学背景" },
                { role: "编剧团队", count: "8+", description: "丰富剧本创作经验" },
                { role: "AI训练师", count: "12+", description: "AI对话优化专家" },
                { role: "用户研究员", count: "6+", description: "深度用户需求洞察" }
              ].map((team, i) => (
                <div key={i} className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-octopoda-coral mb-2">{team.count}</div>
                  <h3 className="font-bold text-octopoda-primary mb-2">{team.role}</h3>
                  <p className="text-gray-600 text-sm">{team.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="text-center mt-16">
          <button className="bg-octopoda-coral text-white px-12 py-4 rounded-full text-xl font-semibold shadow-xl hover:bg-coral-600 transition-all duration-300">
            申请合作
          </button>
        </div>
      </div>
    </div>
  );
};

// 团队故事页面
export const TeamStoryPage = () => {
  const teamMembers = [
    {
      name: "张飞",
      role: "CEO",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      description: "连续创业者，专注于AI+情感陪伴领域，致力于让AI真正理解和陪伴人类成长。",
      background: "前阿里巴巴高级技术专家，10年AI产品经验"
    },
    {
      name: "崎本涵涵",
      role: "COO",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
      description: "运营管理专家，擅长用户体验设计和社区运营，推动产品与用户深度连接。",
      background: "前腾讯产品总监，8年互联网运营经验"
    },
    {
      name: "韩哲",
      role: "CTO",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      description: "AI技术专家，深度学习和自然语言处理领域资深研究者，构建情感AI技术架构。",
      background: "前百度AI实验室首席科学家，AI领域15年经验"
    },
    {
      name: "廖文轩",
      role: "CPO",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      description: "产品设计专家，专注于情感化产品设计，让AI陪伴更加自然和温暖。",
      background: "前字节跳动产品设计总监，UX设计12年经验"
    },
    {
      name: "蒋征",
      role: "CCO",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      description: "内容创作专家，负责AI伙伴人设设计和内容策略，打造有温度的AI陪伴体验。",
      background: "前网易云音乐内容总监，内容策划10年经验"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-octopoda-ivory to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-octopoda-primary mb-6">
            团队故事
            <span className="block text-octopoda-coral">用心打造有温度的AI陪伴</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            我们是一群相信AI能够真正理解和陪伴人类的梦想家，致力于创造有温度的虚拟成长伙伴
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <img 
                src={member.avatar} 
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="text-xl font-bold text-octopoda-primary mb-2">{member.name}</h3>
              <div className="bg-octopoda-coral text-white px-4 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                {member.role}
              </div>
              <p className="text-gray-600 mb-4 leading-relaxed">{member.description}</p>
              <p className="text-octopoda-sage text-sm font-medium">{member.background}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-octopoda-primary to-octopoda-sage rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">我们的使命</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto leading-relaxed">
            "让每个人都能拥有懂你的AI成长伙伴" - 我们相信技术的温度来自于对人性的理解，
            致力于创造真正能够陪伴人类成长、提供情感支持的AI伙伴，让孤独的人不再孤独，让成长的路不再孤单。
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-3xl font-bold text-octopoda-coral mb-2">2022</div>
              <p>公司成立，开始AI陪伴技术研发</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-octopoda-coral mb-2">10万+</div>
              <p>已服务用户数量</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-octopoda-coral mb-2">95%</div>
              <p>用户满意度</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// 加入我们页面
export const JoinUsPage = () => {
  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-octopoda-primary mb-6">
            加入我们
            <span className="block text-octopoda-coral">一起创造AI陪伴的未来</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            我们在寻找志同道合的伙伴，一起打造有温度的AI陪伴产品
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-octopoda-primary mb-6">我们需要你</h2>
            <div className="space-y-4">
              {[
                "AI算法工程师 - 自然语言处理方向",
                "产品设计师 - 情感化设计专家", 
                "内容策划师 - AI人设与剧本创作",
                "心理学专家 - AI陪伴心理学指导",
                "前端工程师 - React/Vue技术栈",
                "运营专员 - 社区运营与用户增长"
              ].map((position, i) => (
                <div key={i} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <Users className="w-5 h-5 text-octopoda-coral mr-3" />
                  <span className="font-medium">{position}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold text-octopoda-primary mb-6">我们能给你</h2>
            <div className="space-y-4">
              {[
                "💰 有竞争力的薪资待遇",
                "🚀 股权激励计划", 
                "🏖️ 灵活的工作时间",
                "📚 学习成长支持",
                "🎉 年轻活力的团队氛围",
                "🌍 改变世界的机会"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-lg mr-3">{benefit.split(' ')[0]}</span>
                  <span className="font-medium">{benefit.split(' ').slice(1).join(' ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-octopoda-primary to-octopoda-coral rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-6">简历投递</h2>
          <p className="text-xl mb-8">
            请将简历发送至我们的邮箱，我们会尽快与你联系
          </p>
          
          <div className="bg-white/20 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-center gap-4">
              <Mail className="w-8 h-8" />
              <span className="text-2xl font-bold">toddjahn@octopada.io</span>
            </div>
          </div>
          
          <p className="text-lg opacity-90">
            邮件主题格式：【应聘岗位】姓名-期望薪资
          </p>
          
          <div className="mt-8 text-center">
            <button 
              onClick={() => window.location.href = 'mailto:toddjahn@octopada.io?subject=【应聘岗位】姓名-期望薪资'}
              className="bg-white text-octopoda-primary px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors duration-300"
            >
              立即发送简历
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            我们期待与你一起创造AI陪伴的美好未来 ❤️
          </p>
        </div>
      </div>
    </div>
  );
};