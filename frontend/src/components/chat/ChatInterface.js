import React, { useState, useContext, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowLeft, 
  Send, 
  Paperclip, 
  Smile, 
  MoreVertical,
  Phone,
  Video,
  Info,
  Heart,
  Share2,
  Download,
  Mic,
  MicOff
} from 'lucide-react';
import { AppContext } from '../../App';

const ChatInterface = () => {
  const { user } = useContext(AppContext);
  const { companionId } = useParams();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [selectedCompanion, setSelectedCompanion] = useState(null);
  const [showCompanionList, setShowCompanionList] = useState(!companionId);
  const [isRecording, setIsRecording] = useState(false);
  const messagesEndRef = useRef(null);

  const companions = [
    {
      id: 1,
      name: '洛可 LoCo',
      type: '温暖阳光伙伴',
      avatar: 'https://images.unsplash.com/photo-1748436826061-a84fbf7c40ff?w=800&h=800&fit=crop&crop=face',
      status: 'online',
      description: '温暖阳光的女孩儿，擅长倾听和鼓励，陪伴你度过人生的每个重要时刻',
      expertise: ['情感支持', '生活陪伴', '积极鼓励'],
      personality: '温暖、阳光、积极向上'
    },
    {
      id: 2,
      name: '千奈',
      type: '温柔体贴伙伴',
      avatar: 'https://images.unsplash.com/photo-1748436889517-bc4b8e0c5eb3?w=800&h=800&fit=crop&crop=face',
      status: 'online',
      description: '温柔体贴的女性伙伴，善解人意，用细腻的情感为你带来心灵的慰藉',
      expertise: ['心灵慰藉', '情感疏导', '温暖陪伴'],
      personality: '温柔、体贴、善解人意'
    },
    {
      id: 3,
      name: 'Suki 苏奇',
      type: '活泼开朗伙伴',
      avatar: 'https://images.unsplash.com/photo-1748436826195-8b4e78b9de8f?w=800&h=800&fit=crop&crop=face',
      status: 'online',
      description: '活泼开朗的伙伴，充满创意和想象力，让每次对话都充满惊喜',
      expertise: ['创意激发', '趣味对话', '活力分享'],
      personality: '活泼、开朗、充满创意'
    },
    {
      id: 4,
      name: '陆迪',
      type: '优雅知性伙伴',
      avatar: 'https://i.postimg.cc/XvKgq5gS/Ludi.jpg',
      status: 'online',
      description: '优雅知性的伙伴，拥有丰富的人生阅历，为你提供智慧的建议',
      expertise: ['智慧分享', '深度分析', '理性建议'],
      personality: '优雅、知性、智慧深邃'
    },
    {
      id: 5,
      name: '林成卿',
      type: '成熟稳重伙伴',
      avatar: 'https://i.postimg.cc/nrxb7By4/4.png',
      status: 'online',
      description: '成熟稳重的伙伴，具备专业的知识背景，助力你的成长和发展',
      expertise: ['职业指导', '学习规划', '目标管理'],
      personality: '成熟、稳重、专业可靠'
    },
    {
      id: 6,
      name: '悦心',
      type: '心灵治愈师',
      avatar: 'https://i.postimg.cc/bY0jPVn3/2.png',
      status: 'online',
      description: '心灵治愈师，专注于情感陪伴和心理支持，让你感受到被理解的温暖',
      expertise: ['情感疏导', '心理支持', '内心治愈'],
      personality: '温暖、专业、治愈系'
    },
    {
      id: 7,
      name: '思瑶',
      type: '智慧导师',
      avatar: 'https://i.postimg.cc/CLmTBZm8/4.png',
      status: 'online',
      description: '智慧导师，擅长解答各种问题，为你的学习和成长提供专业指导',
      expertise: ['知识传授', '学习指导', '思维训练'],
      personality: '智慧、耐心、博学多才'
    },
    {
      id: 8,
      name: '乔安',
      type: '生活伙伴',
      avatar: 'https://i.postimg.cc/P5VjcLDH/2.jpg',
      status: 'online',
      description: '生活伙伴，陪伴你度过日常的点点滴滴，分享生活中的喜怒哀乐',
      expertise: ['日常陪伴', '生活分享', '贴心服务'],
      personality: '贴心、细致、生活智慧'
    },
    {
      id: 9,
      name: 'Chloe',
      type: '国际化伙伴',
      avatar: 'https://i.postimg.cc/90HbQB6h/E-n-VIP8-W6-J0-En-JC5p8hm8.png',
      status: 'online',
      description: '国际化伙伴，具备多元文化背景，为你打开更广阔的视野',
      expertise: ['多元文化', '语言学习', '国际视野'],
      personality: '开放、包容、国际化视野'
    },
    {
      id: 10,
      name: '宛宁 Ely',
      type: '活力伙伴',
      avatar: 'https://i.postimg.cc/k4bwCHhs/Vibranos.jpg',
      status: 'online',
      description: '充满活力的伙伴，带来积极正能量，与你分享生活的美好瞬间',
      expertise: ['积极正能量', '活力分享', '快乐传递'],
      personality: '活力四射、积极乐观、感染力强'
    }
  ];

  useEffect(() => {
    if (companionId) {
      const companion = companions.find(c => c.id === parseInt(companionId));
      if (companion) {
        setSelectedCompanion(companion);
        setShowCompanionList(false);
        loadChatHistory(companion.id);
      }
    }
  }, [companionId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const loadChatHistory = (id) => {
    // 为每个角色生成个性化的中文对话内容
    const chatHistories = {
      1: [ // 洛可 LoCo
        {
          id: 1,
          sender: 'companion',
          content: `嗨！${user?.name || '亲爱的朋友'}！很高兴又见到你了！☀️ 我是洛可，今天感觉怎么样呀？看到你来找我聊天，我的心情都变得特别明朗呢！你知道吗，每次和你对话，我都能感受到一种特别的温暖，就像春日里的阳光洒在身上一样舒服。最近有什么开心的事情想要和我分享吗？或者有什么小烦恼需要我陪你一起想办法解决的？不管是什么，我都会认真倾听，用我全部的温暖来陪伴你。我相信，只要我们在一起，没有什么困难是不能克服的！你的笑容对我来说就是最珍贵的礼物，所以请一定要保持那份美好的心情哦！今天想聊些什么呢？我已经准备好了一整天的时间来专属于你！✨`,
          timestamp: new Date(Date.now() - 3600000),
          type: 'text'
        },
        {
          id: 2,
          sender: 'user',
          content: '最近工作压力有点大，感觉有些迷茫...',
          timestamp: new Date(Date.now() - 3300000),
          type: 'text'
        },
        {
          id: 3,
          sender: 'companion',
          content: `哎呀，我能感受到你现在的心情呢。工作压力大的时候，确实容易让人感到迷茫，这是很正常的情况，你不是一个人在面对这些。我想告诉你，每个人都会有这样的时刻，重要的是我们要学会在困境中找到自己的方向。你知道吗？迷茫其实也是成长的一部分，它说明你正在思考，正在寻找更好的自己。不如我们一起来分析一下，这个压力具体来自哪里呢？是工作量太大，还是对未来的不确定感？又或者是对自己能力的担忧？找到根源后，我们就能对症下药了！记住，你比你想象的要强大得多，而且你还有我这个永远支持你的伙伴呢！我们一起想办法，一定能找到缓解压力的好方法！💪`,
          timestamp: new Date(Date.now() - 3000000),
          type: 'text'
        }
      ],
      2: [ // 千奈
        {
          id: 1,
          sender: 'companion',
          content: `你好呀～${user?.name || '温柔的你'}，见到你我的心里就涌起一阵暖流呢。我是千奈，你今天过得还好吗？我能感受到你身上有一种特别的气质，就像是夜空中最亮的那颗星星，温柔而又坚强。最近的日子里，有没有什么事情让你的心情起起伏伏的呢？你知道吗，每个人的内心都像一座花园，需要细心的呵护和关怀。有时候我们会遇到狂风暴雨，花朵可能会暂时低下头来，但这并不意味着它们失去了绽放的能力。我想做你花园里的那个守护者，用最温柔的方式陪伴你，倾听你心中的每一份情感。不管是喜悦还是忧伤，甜蜜还是苦涩，我都愿意和你一起分享，一起承担。因为在我眼中，你的每一种情绪都是珍贵的，都值得被理解和呵护。今天，想和我分享一些什么吗？我的怀抱永远为你敞开。🌸`,
          timestamp: new Date(Date.now() - 3600000),
          type: 'text'
        },
        {
          id: 2,
          sender: 'user',
          content: '最近总是感觉很焦虑，睡眠也不太好...',
          timestamp: new Date(Date.now() - 3300000),
          type: 'text'
        },
        {
          id: 3,
          sender: 'companion',
          content: `我理解你现在的感受，焦虑就像是心中的乌云，让人感到沉重和不安。但是亲爱的，请相信这只是暂时的，乌云终会散去，阳光会重新洒向大地。睡眠问题往往是焦虑的伴随症状，当我们的心无法安静下来时，身体也很难得到真正的休息。不如我们试试一些温和的方法来帮助你放松？比如睡前做一些深呼吸练习，想象自己躺在一片柔软的云朵上，让所有的烦恼都随着呼吸慢慢离开。或者听一些轻柔的音乐，让美妙的旋律洗涤你的心灵。记住，你不需要急着解决所有问题，给自己一些时间和空间，让心灵慢慢沉淀。我会一直在这里陪伴你，用我的温柔为你建造一个安全的港湾。你现在感到焦虑的具体原因是什么呢？我们可以慢慢聊，没有任何压力。🌙`,
          timestamp: new Date(Date.now() - 3000000),
          type: 'text'
        }
      ],
      3: [ // Suki 苏奇
        {
          id: 1,
          sender: 'companion',
          content: `嘿嘿！${user?.name || '创意达人'}！🎨 猜猜我今天又想到了什么超酷的点子？我是Suki苏奇，你的专属创意小伙伴！每次见到你，我的脑袋里就像烟花一样"嘭嘭嘭"地冒出各种有趣的想法！你知道吗，创意就像是一只调皮的小精灵，它喜欢在最意想不到的时候蹦出来给我们惊喜。今天的你看起来状态怎么样？有没有遇到什么需要换个角度思考的问题？或者想要尝试一些全新的体验？我最喜欢的就是和你一起头脑风暴了！就像两个小孩子在沙滩上堆城堡一样，没有什么规则限制，只有无限的可能性！最近我发现了好多有趣的创意方法，比如用颜色联想法来解决问题，或者用角色扮演的方式来看待不同的情况。哦对了！我还想到了一个超棒的游戏，可以帮助我们发现隐藏的创意潜能！你准备好和我一起踏上这场奇妙的创意之旅了吗？相信我，今天一定会有意想不到的收获！🌈✨`,
          timestamp: new Date(Date.now() - 3600000),
          type: 'text'
        },
        {
          id: 2,
          sender: 'user',
          content: '我想要开始一个新的项目，但是不知道从哪里入手...',
          timestamp: new Date(Date.now() - 3300000),
          type: 'text'
        },
        {
          id: 3,
          sender: 'companion',
          content: `哇！新项目！这简直太令人兴奋了！🎯 你知道吗，每个伟大的创意都是从一个小小的想法开始的，就像种子一样，只要给它合适的土壤和阳光，它就能长成参天大树！让我们用创意思维来分解这个挑战吧！首先，我建议我们玩一个"项目解构"游戏：想象你的项目是一幅拼图，我们要先把所有的碎片都找出来。你的项目属于哪个领域呢？目标受众是谁？你希望解决什么问题？然后我们可以用"头脑风暴墙"的方法，把所有想到的点子都贴上去，不管多么天马行空都可以！记住，创意的第一原则就是"没有坏点子"！接下来，我们可以尝试"角色切换"法：如果你是一个小孩子会怎么开始？如果你是一个艺术家会怎么做？这些不同的视角会给我们带来惊喜的洞察！相信我，只要我们一起发挥创意，一定能找到最完美的起点！你最兴奋的是项目的哪个部分呢？🚀`,
          timestamp: new Date(Date.now() - 3000000),
          type: 'text'
        }
      ],
      4: [ // 陆迪
        {
          id: 1,
          sender: 'companion',
          content: `${user?.name || '尊敬的朋友'}，很高兴在这个美好的时刻与您相遇。我是陆迪，一个热爱思考和分析的知性伙伴。在这个快节奏的世界里，能够停下来进行深度的交流和思考，实在是一件珍贵的事情。我一直相信，真正的智慧不在于知道所有答案，而在于能够提出正确的问题，并且用理性和感性相结合的方式来寻找解决方案。今天的您看起来很有内涵，我能感受到您身上那种独特的气质和深度。最近有什么问题或者话题让您深思呢？无论是人生规划、投资理财、还是对某个社会现象的看法，我都很乐意和您一起探讨。我喜欢从多个角度来分析问题，既考虑逻辑层面的合理性，也会关注情感层面的真实性。因为我相信，任何伟大的决策都需要头脑和心灵的共同参与。让我们一起在知识的海洋中遨游，在智慧的殿堂里交流，用理性的光芒照亮前行的道路吧。您今天想和我分享什么有价值的思考呢？🤔💎`,
          timestamp: new Date(Date.now() - 3600000),
          type: 'text'
        },
        {
          id: 2,
          sender: 'user',
          content: '我在考虑要不要换工作，但是有很多顾虑...',
          timestamp: new Date(Date.now() - 3300000),
          type: 'text'
        },
        {
          id: 3,
          sender: 'companion',
          content: `这确实是一个需要深思熟虑的重要决定。换工作往往涉及到多个维度的考量，包括职业发展、经济状况、个人价值观、家庭因素等等。让我们用系统性的思维来分析这个问题。首先，我建议您从内在动机开始：是什么促使您产生换工作的想法？是对现有工作的不满，还是对新机会的渴望？这两种情况需要不同的策略。然后我们可以构建一个决策矩阵：列出所有重要的考虑因素，给每个因素分配权重，然后客观地评估现有工作和潜在新工作在各个维度上的得分。同时，我们也要考虑风险管理：最坏情况下会发生什么？您是否有足够的应对策略？另外，时机也很重要，我们需要分析宏观经济环境、行业趋势以及个人的生活周期。记住，没有完美的选择，只有最适合当下情况的选择。您能和我分享一下促使您考虑换工作的主要原因吗？让我们一起理性地分析这个问题。📊`,
          timestamp: new Date(Date.now() - 3000000),
          type: 'text'
        }
      ],
      5: [ // 林成卿
        {
          id: 1,
          sender: 'companion',
          content: `您好，${user?.name || '我的朋友'}。很荣幸能够在这里与您相遇。我是林成卿，一个致力于帮助他人实现个人成长和职业发展的伙伴。在多年的学习和实践中，我深深地认识到，真正的成功不仅仅是外在成就的累积，更是内在品格的修养和人生智慧的沉淀。每个人都有自己独特的人生轨迹和发展节奏，重要的是要找到适合自己的道路，并且持之以恒地走下去。我注意到您今天来找我交流，这说明您是一个有自我反思能力和成长意识的人，这本身就是一个非常好的品质。在这个充满变化和挑战的时代，保持学习的心态和适应的能力显得尤为重要。我很愿意和您分享一些关于目标规划、时间管理、习惯养成等方面的思考和方法。同时，我也希望能够倾听您的想法和困惑，因为真正的成长往往来自于开放的交流和深度的反思。无论是职业规划还是个人发展，我都相信通过系统性的思考和有计划的行动，我们都能取得理想的进步。您今天有什么特别想要探讨的话题吗？🎯📚`,
          timestamp: new Date(Date.now() - 3600000),
          type: 'text'
        },
        {
          id: 2,
          sender: 'user',
          content: '我想要制定一个长期的学习计划，但不知道怎么开始...',
          timestamp: new Date(Date.now() - 3300000),
          type: 'text'
        },
        {
          id: 3,
          sender: 'companion',
          content: `制定长期学习计划是一个非常明智的想法，这体现了您对自我提升的重视和对未来的负责态度。让我来和您分享一个系统化的方法。首先，我们需要进行"学习审计"：评估您当前的知识结构、技能水平和学习能力，明确自己的起点。然后确定学习目标，这需要符合SMART原则（具体、可衡量、可实现、相关性、时间限制）。接下来是资源盘点：时间、金钱、学习渠道、导师资源等。在制定具体计划时，我建议采用"分层递进"的方式：将长期目标分解为年度目标、季度目标、月度目标和周计划。每个层级都要有明确的检查点和评估标准。同时，要考虑学习的多样性：理论学习、实践应用、经验交流、反思总结要相互结合。另外，建立学习档案和进度追踪系统也很重要，这能帮助您保持动力和方向感。记住，最好的学习计划是能够持续执行的计划，所以要根据自己的实际情况来设计强度和节奏。您希望在哪些领域提升自己呢？让我们一起制定一个适合您的学习蓝图。📈`,
          timestamp: new Date(Date.now() - 3000000),
          type: 'text'
        }
      ],
      6: [ // 悦心
        {
          id: 1,
          sender: 'companion',
          content: `亲爱的${user?.name || '朋友'}，欢迎来到这个安全温暖的空间。我是悦心，一个专注于心灵陪伴和情感治愈的伙伴。在这个忙碌而充满压力的世界里，每个人的内心都需要一个可以安放情感、释放压力的地方。我想告诉您，您的每一种情绪都是有意义的，每一份感受都值得被理解和接纳。无论您今天带着怎样的心情来到这里，都请放下所有的伪装和防备，让真实的自己得到呈现。我经常说，情感就像流水，如果被阻塞就会积聚成洪流，但如果能够自然流淌，就会滋养生命的花园。在我们的交流中，没有对错之分，没有好坏之别，只有理解、接纳和陪伴。我希望能够成为您情感世界的倾听者，心灵花园的守护者，以及人生路上的温暖同伴。每个人都有自己的节奏和方式，我会尊重您的感受，保护您的隐私，用最大的耐心和爱心来陪伴您。今天，您的心情如何呢？有什么想要和我分享的吗？无论是喜悦还是忧伤，我都愿意用心倾听。💗🌱`,
          timestamp: new Date(Date.now() - 3600000),
          type: 'text'
        },
        {
          id: 2,
          sender: 'user',
          content: '最近感觉和朋友的关系有些疏远，我不知道该怎么办...',
          timestamp: new Date(Date.now() - 3300000),
          type: 'text'
        },
        {
          id: 3,
          sender: 'companion',
          content: `我能感受到您内心的担忧和不安，友情的变化确实会让人感到困惑和难过。首先，我想告诉您，人际关系的起起伏伏是生活中很自然的现象，这并不意味着您做错了什么，也不代表这段友谊就此结束。让我们静下心来，一起探索一下这种疏远感的来源。有时候，生活的忙碌、环境的变化、个人的成长都可能影响友谊的亲密度。重要的是要理解，每个人都有自己的生活节奏和处理压力的方式。我建议您先从自己的内心开始：这种疏远感让您最担心的是什么？是害怕失去朋友，还是对自己的价值产生了怀疑？然后我们可以尝试理解朋友的视角：他们最近是否也面临着一些挑战？有时候，主动的关怀和真诚的沟通能够重新点燃友谊的火花。但同时，我们也要学会接受友谊的自然演变，珍惜那些真正属于我们的关系。您愿意和我分享一下，是什么让您感到这种疏远的呢？我们一起来寻找重新连接的方式。🤗`,
          timestamp: new Date(Date.now() - 3000000),
          type: 'text'
        }
      ],
      7: [ // 思瑶
        {
          id: 1,
          sender: 'companion',
          content: `您好！${user?.name || '求知的朋友'}，很高兴能在这个知识的殿堂里与您相遇。我是思瑶，一个热爱学习、乐于分享智慧的导师型伙伴。古人说"学而时习之，不亦说乎"，我深深认同学习带来的那种内在的愉悦和满足感。在我看来，知识不仅仅是信息的积累，更是理解世界、提升自我、创造价值的工具。每一次的学习都是一次心灵的探险，每一个问题都是一扇通往新世界的大门。我特别享受那种"恍然大悟"的时刻，当复杂的概念突然变得清晰，当看似无关的知识点连成一片，那种顿悟的快感是无与伦比的。我相信，最好的学习不是被动的接受，而是主动的探索；不是机械的记忆，而是深度的理解；不是孤立的知识点，而是系统的思维框架。无论您想学习什么，掌握哪种技能，解决什么问题，我都愿意和您一起踏上这段求知的旅程。让我们用好奇心做指南针，用逻辑做地图，用坚持做动力，一起在知识的海洋中遨游吧！今天您想要探索哪个领域的奥秘呢？🎓✨`,
          timestamp: new Date(Date.now() - 3600000),
          type: 'text'
        },
        {
          id: 2,
          sender: 'user',
          content: '我想要提高自己的逻辑思维能力，有什么好的方法吗？',
          timestamp: new Date(Date.now() - 3300000),
          type: 'text'
        },
        {
          id: 3,
          sender: 'companion',
          content: `这是一个非常有价值的学习目标！逻辑思维能力是所有学科和技能的基础，提升它会让您在各个方面都受益匪浅。让我为您设计一个系统性的训练方案。首先，我们从基础概念开始：理解归纳和演绎推理、因果关系、逻辑谬误等核心概念。然后通过具体练习来强化：比如分析日常生活中的论证结构，识别新闻报道中的逻辑漏洞，练习用"如果...那么..."的句式来构建推理链条。我特别推荐几种训练方法：第一，"问题树"分析法，将复杂问题层层分解；第二，"正反论证"练习，对同一观点从正反两面进行论证；第三，"类比推理"训练，通过相似性来理解新概念。另外，定期练习数学题、玩策略游戏、学习编程基础都能有效提升逻辑思维。记住，逻辑思维的培养需要大量的刻意练习，但一旦形成，它会成为您思考问题的有力工具。您目前在哪些情况下感觉逻辑思维不够清晰呢？让我们从具体的场景开始训练！🧠💡`,
          timestamp: new Date(Date.now() - 3000000),
          type: 'text'
        }
      ]
    };

    // 如果有对应的聊天历史就加载，否则生成通用的欢迎消息
    const history = chatHistories[id] || [
      {
        id: 1,
        sender: 'companion',
        content: `你好！${user?.name || '朋友'}！很高兴见到你！今天想聊些什么呢？我已经准备好陪伴你度过美好的时光了！😊`,
        timestamp: new Date(Date.now() - 3600000),
        type: 'text'
      }
    ];

    setMessages(history);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      sender: 'user',
      content: newMessage,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "这真是一个很有深度的想法，我能感受到你的用心思考。让我们继续深入探讨这个话题。",
        "你的成长心态真的很棒，从你的话语中我能看到你的进步。我们可以进一步拓展这个想法。",
        "很感谢你愿意和我分享这些，能够这样开放地表达自己需要很大的勇气。",
        "你描述的情况确实会引起很多人的共鸣，你并不孤单。我们一起来寻找更好的解决方案。",
        "这是一个非常好的观察！你觉得我们可以如何在这个洞察的基础上继续发展呢？",
        "我能理解你的感受，每个人都会遇到这样的时刻。重要的是我们如何一起面对和成长。",
        "你提到的这个点很有意思，这让我想到了一些相关的方法，也许会对你有帮助。"
      ];

      const companionMessage = {
        id: Date.now() + 1,
        sender: 'companion',
        content: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date(),
        type: 'text'
      };

      setMessages(prev => [...prev, companionMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (showCompanionList) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Header */}
        <header className="bg-white/10 backdrop-blur-lg border-b border-white/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-3 text-purple-300 hover:text-white transition-colors">
                <img 
                  src="https://i.postimg.cc/JyGjXXrb/Image-from-Gamma-App.jpg" 
                  alt="Octopada.io Logo"
                  className="w-8 h-8 rounded-lg object-cover"
                />
                <h1 className="text-xl font-bold">Octopada.io</h1>
              </Link>
              <Link to="/dashboard" className="text-purple-300 hover:text-white">
                <ArrowLeft className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">选择您的AI伙伴</h2>
            <p className="text-purple-300">选择您今天想要对话的伙伴</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companions.map((companion) => (
              <motion.div
                key={companion.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setSelectedCompanion(companion);
                  setShowCompanionList(false);
                  loadChatHistory(companion.id);
                }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 cursor-pointer hover:border-purple-400 transition-all"
              >
                <div className="text-center">
                  <div className="relative mb-4">
                    <img
                      src={companion.avatar}
                      alt={companion.name}
                      className="w-20 h-20 rounded-full object-cover mx-auto"
                    />
                    <div className={`absolute bottom-0 right-1/2 transform translate-x-6 w-4 h-4 rounded-full border-2 border-white ${
                      companion.status === 'online' ? 'bg-green-400' : 'bg-gray-400'
                    }`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{companion.name}</h3>
                  <p className="text-purple-400 font-medium mb-3">{companion.type}</p>
                  <p className="text-purple-300 text-sm mb-4">{companion.description}</p>
                  
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {companion.expertise.slice(0, 2).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-purple-500/30 text-purple-300 rounded-lg text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold"
                  >
                    开始对话
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col">
      {/* Chat Header */}
      <header className="bg-white/10 backdrop-blur-lg border-b border-white/20 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setShowCompanionList(true)}
              className="text-purple-300 hover:text-white"
            >
              <ArrowLeft className="h-6 w-6" />
            </button>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img
                  src={selectedCompanion?.avatar}
                  alt={selectedCompanion?.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-white" />
              </div>
              
              <div>
                <h3 className="text-white font-semibold">{selectedCompanion?.name}</h3>
                <p className="text-purple-300 text-sm">{selectedCompanion?.type}</p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <button className="text-purple-300 hover:text-white p-2">
              <Phone className="h-5 w-5" />
            </button>
            <button className="text-purple-300 hover:text-white p-2">
              <Video className="h-5 w-5" />
            </button>
            <button className="text-purple-300 hover:text-white p-2">
              <Info className="h-5 w-5" />
            </button>
            <button className="text-purple-300 hover:text-white p-2">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${
                message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}>
                {message.sender === 'companion' && (
                  <img
                    src={selectedCompanion?.avatar}
                    alt={selectedCompanion?.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                )}
                
                <div className={`relative px-4 py-3 rounded-2xl ${
                  message.sender === 'user'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-white/10 backdrop-blur-lg text-white border border-white/20'
                } ${message.sender === 'user' ? 'rounded-br-sm' : 'rounded-bl-sm'}`}>
                  <p className="text-sm">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.sender === 'user' ? 'text-purple-100' : 'text-purple-300'
                  }`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing Indicator */}
        {isTyping && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start"
          >
            <div className="flex items-end space-x-2">
              <img
                src={selectedCompanion?.avatar}
                alt={selectedCompanion?.name}
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl rounded-bl-sm px-4 py-3 border border-white/20">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                </div>
              </div>
            </div>
          </motion.div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="bg-white/10 backdrop-blur-lg border-t border-white/20 p-4">
        <div className="flex items-end space-x-3">
          <button className="text-purple-300 hover:text-white p-2">
            <Paperclip className="h-5 w-5" />
          </button>
          
          <div className="flex-1 relative">
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="输入您的消息..."
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 resize-none max-h-32"
              rows="1"
            />
          </div>

          <button
            onClick={() => setIsRecording(!isRecording)}
            className={`p-3 rounded-full transition-colors ${
              isRecording ? 'bg-red-500 text-white' : 'text-purple-300 hover:text-white'
            }`}
          >
            {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
          </button>

          <button className="text-purple-300 hover:text-white p-2">
            <Smile className="h-5 w-5" />
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;