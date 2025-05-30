"""
用户模型
支持多种登录方式和权限管理
"""
from pydantic import BaseModel, Field, EmailStr
from typing import Optional, List, Dict, Any
from datetime import datetime
from enum import Enum
import uuid

class UserRole(str, Enum):
    USER = "user"
    ADMIN = "admin"
    MODERATOR = "moderator"
    VIP = "vip"

class UserStatus(str, Enum):
    ACTIVE = "active"
    INACTIVE = "inactive"
    SUSPENDED = "suspended"
    DELETED = "deleted"

class User(BaseModel):
    """用户基础信息模型"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    phone: Optional[str] = None
    email: Optional[EmailStr] = None
    wechat_openid: Optional[str] = None
    username: Optional[str] = None
    password_hash: Optional[str] = None
    
    # 个人信息
    nickname: Optional[str] = None
    avatar_url: Optional[str] = None
    gender: Optional[str] = None
    age: Optional[int] = None
    location: Optional[str] = None
    
    # 系统信息
    role: UserRole = UserRole.USER
    status: UserStatus = UserStatus.ACTIVE
    is_verified: bool = False
    
    # 订阅信息
    subscription_type: Optional[str] = None
    subscription_expires: Optional[datetime] = None
    credits: int = 0
    
    # 时间戳
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)
    last_login: Optional[datetime] = None
    
    # 成长数据
    growth_level: int = 1
    growth_points: int = 0
    completed_tasks: int = 0
    
    # 偏好设置
    preferences: Dict[str, Any] = Field(default_factory=dict)
    
    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }

class UserCreate(BaseModel):
    """创建用户请求模型"""
    phone: Optional[str] = None
    email: Optional[EmailStr] = None
    wechat_openid: Optional[str] = None
    password: Optional[str] = None
    nickname: Optional[str] = None

class UserUpdate(BaseModel):
    """更新用户信息模型"""
    nickname: Optional[str] = None
    avatar_url: Optional[str] = None
    gender: Optional[str] = None
    age: Optional[int] = None
    location: Optional[str] = None
    preferences: Optional[Dict[str, Any]] = None

class UserLogin(BaseModel):
    """用户登录模型"""
    phone: Optional[str] = None
    email: Optional[EmailStr] = None
    password: Optional[str] = None
    verification_code: Optional[str] = None
    wechat_code: Optional[str] = None

class UserResponse(BaseModel):
    """用户响应模型"""
    id: str
    nickname: Optional[str]
    avatar_url: Optional[str]
    role: UserRole
    subscription_type: Optional[str]
    credits: int
    growth_level: int
    created_at: datetime
