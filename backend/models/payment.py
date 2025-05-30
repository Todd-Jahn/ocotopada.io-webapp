"""
支付和订阅模型
支持多种支付方式和订阅管理
"""
from pydantic import BaseModel, Field
from typing import Optional, Dict, Any
from datetime import datetime
from enum import Enum
import uuid

class SubscriptionType(str, Enum):
    FREE = "free"
    BASIC = "basic"
    PREMIUM = "premium"
    VIP = "vip"

class PaymentStatus(str, Enum):
    PENDING = "pending"
    COMPLETED = "completed"
    FAILED = "failed"
    REFUNDED = "refunded"
    CANCELLED = "cancelled"

class PaymentMethod(str, Enum):
    WECHAT = "wechat"
    ALIPAY = "alipay"
    CREDIT_CARD = "credit_card"
    BANK_TRANSFER = "bank_transfer"

class Subscription(BaseModel):
    """订阅模型"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str
    
    # 订阅信息
    subscription_type: SubscriptionType
    plan_name: str
    price: float
    currency: str = "CNY"
    
    # 时间信息
    start_date: datetime
    end_date: Optional[datetime] = None
    auto_renew: bool = True
    
    # 状态
    is_active: bool = True
    cancelled_at: Optional[datetime] = None
    
    # 功能限制
    features: Dict[str, Any] = Field(default_factory=dict)
    
    # 时间戳
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

class Payment(BaseModel):
    """支付记录模型"""
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str
    subscription_id: Optional[str] = None
    
    # 支付信息
    amount: float
    currency: str = "CNY"
    payment_method: PaymentMethod
    status: PaymentStatus = PaymentStatus.PENDING
    
    # 第三方支付信息
    external_payment_id: Optional[str] = None
    external_order_id: Optional[str] = None
    payment_url: Optional[str] = None
    
    # 商品信息
    item_type: str  # subscription, credits, etc.
    item_description: str
    
    # 时间戳
    created_at: datetime = Field(default_factory=datetime.utcnow)
    paid_at: Optional[datetime] = None
    
    class Config:
        json_encoders = {
            datetime: lambda v: v.isoformat()
        }

class PaymentCreate(BaseModel):
    """创建支付请求模型"""
    subscription_type: Optional[SubscriptionType] = None
    credits_amount: Optional[int] = None
    payment_method: PaymentMethod

class PaymentResponse(BaseModel):
    """支付响应模型"""
    payment_id: str
    amount: float
    currency: str
    payment_url: Optional[str] = None
    qr_code: Optional[str] = None
    status: PaymentStatus
