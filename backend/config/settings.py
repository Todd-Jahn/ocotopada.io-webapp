"""
应用配置设置
基于产品规划的配置管理
"""
import os
from typing import Optional

class Settings:
    """应用设置配置类"""
    
    # 基础配置
    APP_NAME: str = "Octopoda AI Platform"
    VERSION: str = "1.0.0"
    DEBUG: bool = os.getenv("DEBUG", "False").lower() == "true"
    
    # 数据库配置
    MONGO_URL: str = os.getenv("MONGO_URL", "mongodb://localhost:27017")
    DATABASE_NAME: str = os.getenv("DATABASE_NAME", "octopoda")
    
    # AI服务配置
    BAIDU_API_KEY: Optional[str] = os.getenv("BAIDU_API_KEY")
    BAIDU_SECRET_KEY: Optional[str] = os.getenv("BAIDU_SECRET_KEY")
    XUNFEI_APP_ID: Optional[str] = os.getenv("XUNFEI_APP_ID")
    XUNFEI_API_KEY: Optional[str] = os.getenv("XUNFEI_API_KEY")
    XUNFEI_API_SECRET: Optional[str] = os.getenv("XUNFEI_API_SECRET")
    
    # 语音服务配置
    TTS_SERVICE_URL: Optional[str] = os.getenv("TTS_SERVICE_URL")
    ASR_SERVICE_URL: Optional[str] = os.getenv("ASR_SERVICE_URL")
    
    # 支付配置
    WECHAT_PAY_APP_ID: Optional[str] = os.getenv("WECHAT_PAY_APP_ID")
    WECHAT_PAY_MCH_ID: Optional[str] = os.getenv("WECHAT_PAY_MCH_ID")
    ALIPAY_APP_ID: Optional[str] = os.getenv("ALIPAY_APP_ID")
    
    # 安全配置
    SECRET_KEY: str = os.getenv("SECRET_KEY", "your-secret-key-here")
    JWT_ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30
    
    # Redis配置
    REDIS_URL: str = os.getenv("REDIS_URL", "redis://localhost:6379")
    
    # 文件存储配置
    OSS_ACCESS_KEY_ID: Optional[str] = os.getenv("OSS_ACCESS_KEY_ID")
    OSS_ACCESS_KEY_SECRET: Optional[str] = os.getenv("OSS_ACCESS_KEY_SECRET")
    OSS_BUCKET_NAME: Optional[str] = os.getenv("OSS_BUCKET_NAME")
    OSS_ENDPOINT: Optional[str] = os.getenv("OSS_ENDPOINT")

settings = Settings()
