"""
虚拟角色模型
支持个性化定制和多模态展示
"""
from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from datetime import datetime
import uuid

class CharacterGender(str, Enum):
    MALE = "male"
    FEMALE = "female"
    NON_BINARY = "non_binary"

class CharacterPersonality(BaseModel):
    """角色性格特征"""
    traits: List[str] = Field(default_factory=list)  # 性格标签
    communication_style: Optional[str] = None  # 交流风格
    interests: List[str] = Field(default_factory=list)  # 兴趣爱好
    background_story: Optional[str] = None  # 背景故事

class CharacterAppearance(BaseModel):
    """角色外观设置"""
    avatar_url: Optional[str] = None
    hair_color: Optional[str] = None
    eye_color: Optional[str] = None
    skin_tone: Optional[str] = None
    clothing_style: Optional[str] = None
    accessories: List[str] = Field(default_factory=list)

class CharacterVoice(BaseModel):
    """角色语音设置"""
    voice_id: Optional[str] = None
    voice_name: Optional[str] = None
    pitch: float = 1.0
    speed: float = 1.0
    tone: Optional[str] = None

class Character(BaseModel):
    """虚拟角色模型"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str  # 所属用户ID
    
    # 基础信息
    name: str
    gender: CharacterGender
    age: Optional[int] = None
    occupation: Optional[str] = None
    
    # 个性设置
    personality: CharacterPersonality = Field(default_factory=CharacterPersonality)
    appearance: CharacterAppearance = Field(default_factory=CharacterAppearance)
    voice_settings: CharacterVoice = Field(default_factory=CharacterVoice)
    
    # AI设置
    ai_model: str = "baidu_wenxin"  # 使用的AI模型
    system_prompt: Optional[str] = None  # 系统提示词
    temperature: float = 0.7  # AI创造性参数
    max_tokens: int = 1000  # 最大响应长度
    
    # 状态信息
    is_active: bool = True
    is_public: bool = False  # 是否公开（供其他用户使用）
    usage_count: int = 0  # 使用次数
    
    # 时间戳
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }

class CharacterCreate(BaseModel):
    """创建角色请求模型"""
    name: str
    gender: CharacterGender
    age: Optional[int] = None
    occupation: Optional[str] = None
    personality: Optional[CharacterPersonality] = None
    appearance: Optional[CharacterAppearance] = None
    voice_settings: Optional[CharacterVoice] = None

class CharacterUpdate(BaseModel):
    """更新角色模型"""
    name: Optional[str] = None
    age: Optional[int] = None
    occupation: Optional[str] = None
    personality: Optional[CharacterPersonality] = None
    appearance: Optional[CharacterAppearance] = None
    voice_settings: Optional[CharacterVoice] = None
    system_prompt: Optional[str] = None
    temperature: Optional[float] = None

class CharacterResponse(BaseModel):
    """角色响应模型"""
    id: str
    name: str
    gender: CharacterGender
    avatar_url: Optional[str]
    personality: CharacterPersonality
    voice_settings: CharacterVoice
    created_at: datetime
