"""
聊天会话和消息模型
支持多轮对话和上下文管理
"""
from pydantic import BaseModel, Field
from typing import Optional, List, Dict, Any
from datetime import datetime
from enum import Enum
import uuid

class MessageType(str, Enum):
    TEXT = "text"
    VOICE = "voice"
    IMAGE = "image"
    SYSTEM = "system"

class MessageRole(str, Enum):
    USER = "user"
    ASSISTANT = "assistant"
    SYSTEM = "system"

class ChatSession(BaseModel):
    """聊天会话模型"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str
    character_id: str
    
    # 会话信息
    title: Optional[str] = None
    summary: Optional[str] = None
    context_window: int = 20  # 上下文窗口大小
    
    # 状态信息
    is_active: bool = True
    message_count: int = 0
    last_message_at: Optional[datetime] = None
    
    # AI设置
    ai_model: str = "baidu_wenxin"
    temperature: float = 0.7
    
    # 时间戳
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    
    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }

class ChatMessage(BaseModel):
    """聊天消息模型"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    session_id: str
    
    # 消息内容
    role: MessageRole
    message_type: MessageType = MessageType.TEXT
    content: str
    metadata: Dict[str, Any] = Field(default_factory=dict)
    
    # 语音消息相关
    voice_url: Optional[str] = None
    voice_duration: Optional[float] = None
    
    # AI相关
    prompt_tokens: Optional[int] = None
    completion_tokens: Optional[int] = None
    model_used: Optional[str] = None
    
    # 情感分析
    emotion_score: Optional[Dict[str, float]] = None
    sentiment: Optional[str] = None
    
    # 时间戳
    created_at: datetime = Field(default_factory=datetime.utcnow)
    
    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }

class ChatCreate(BaseModel):
    """创建聊天请求模型"""
    character_id: str
    message: str
    message_type: MessageType = MessageType.TEXT
    voice_url: Optional[str] = None

class ChatResponse(BaseModel):
    """聊天响应模型"""
    session_id: str
    message_id: str
    content: str
    voice_url: Optional[str] = None
    emotion_analysis: Optional[Dict[str, Any]] = None
    created_at: datetime
