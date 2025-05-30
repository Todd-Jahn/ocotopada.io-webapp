"""
数据库连接和管理
支持MongoDB连接池管理
"""
from motor.motor_asyncio import AsyncIOMotorClient
from pymongo import MongoClient
import logging
from ..config.settings import settings

logger = logging.getLogger(__name__)

class Database:
    client: AsyncIOMotorClient = None
    database = None

database = Database()

async def get_database():
    """获取数据库实例"""
    return database.database

async def connect_to_mongo():
    """连接到MongoDB"""
    try:
        database.client = AsyncIOMotorClient(settings.MONGO_URL)
        database.database = database.client[settings.DATABASE_NAME]
        
        # 测试连接
        await database.client.admin.command('ping')
        logger.info("Successfully connected to MongoDB")
        
    except Exception as e:
        logger.error(f"Could not connect to MongoDB: {e}")
        raise

async def close_mongo_connection():
    """关闭MongoDB连接"""
    try:
        if database.client:
            database.client.close()
            logger.info("Disconnected from MongoDB")
    except Exception as e:
        logger.error(f"Error closing MongoDB connection: {e}")

# 数据库集合名称常量
class Collections:
    USERS = "users"
    CHARACTERS = "characters"
    CHAT_SESSIONS = "chat_sessions"
    CHAT_MESSAGES = "chat_messages"
    SUBSCRIPTIONS = "subscriptions"
    PAYMENTS = "payments"
    GROWTH_TASKS = "growth_tasks"
    GROWTH_LOGS = "growth_logs"
    STORIES = "stories"
    STORY_PROGRESS = "story_progress"
    VOICE_RECORDS = "voice_records"
    CONTENT_AUDIT = "content_audit"
    API_KEYS = "api_keys"
    USER_ANALYTICS = "user_analytics"
