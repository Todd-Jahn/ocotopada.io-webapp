"""
支付订阅API路由
支持多种支付方式
"""
from fastapi import APIRouter, HTTPException
from models.payment import PaymentCreate, PaymentResponse

router = APIRouter()

@router.post("/create", response_model=PaymentResponse)
async def create_payment(payment_data: PaymentCreate):
    """创建支付订单"""
    # TODO: 实现支付创建逻辑
    return {
        "payment_id": "temp_payment_id",
        "amount": 29.0,
        "currency": "CNY",
        "payment_url": None,
        "qr_code": None,
        "status": "pending"
    }

@router.get("/orders")
async def get_payment_orders():
    """获取支付订单列表"""
    return {"message": "获取支付订单功能开发中"}

@router.post("/webhook")
async def payment_webhook():
    """支付回调处理"""
    return {"message": "支付回调处理功能开发中"}
