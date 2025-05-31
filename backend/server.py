from fastapi import FastAPI, HTTPException, Depends, Security
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from fastapi.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, Field
from typing import List, Optional, Dict, Any
from datetime import datetime, timedelta
from enum import Enum
import os
import uuid
import hashlib
import jwt
from passlib.context import CryptContext
import asyncio
import json

# FastAPI app instance
app = FastAPI(title="Octopoda.io AI Companion Platform", version="2.0.0")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database connection
client = AsyncIOMotorClient(os.environ.get('MONGO_URL', 'mongodb://localhost:27017'))
db = client.octopoda_db

# Security
security = HTTPBearer()
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
SECRET_KEY = os.environ.get('SECRET_KEY', 'your-secret-key-here')
ALGORITHM = "HS256"

# Enums for system constants
class UserSubscription(str, Enum):
    FREE = "free"
    BASIC = "basic"
    PREMIUM = "premium"
    VIP = "vip"

class RelationshipType(str, Enum):
    LOVER = "lover"
    FRIEND = "friend"
    FAMILY = "family"
    PET = "pet"
    MENTOR = "mentor"
    COMPANION = "companion"

class RelationshipStage(str, Enum):
    STRANGER = "stranger"        # 初识
    FRIEND = "friend"           # 朋友
    AMBIGUOUS = "ambiguous"     # 暧昧
    LOVER = "lover"            # 恋人
    MARRIED = "married"        # 结婚

class ChatMode(str, Enum):
    SIMPLE = "simple"          # 简单模式
    STORY = "story"           # 长文模式
    MATURE = "mature"         # 刺激模式 (18+)

class CharacterGender(str, Enum):
    MALE = "male"
    FEMALE = "female"
    NON_BINARY = "non_binary"
    CUSTOM = "custom"

class EmotionType(str, Enum):
    HAPPY = "happy"
    SAD = "sad"
    ANGRY = "angry"
    EXCITED = "excited"
    CALM = "calm"
    ANXIOUS = "anxious"
    LOVING = "loving"
    CONFUSED = "confused"

# Pydantic Models
class UserProfile(BaseModel):
    user_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    username: str
    email: str
    password_hash: str
    age: Optional[int] = None
    gender: Optional[str] = None
    subscription: UserSubscription = UserSubscription.FREE
    is_age_verified: bool = False
    is_identity_verified: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)
    last_active: datetime = Field(default_factory=datetime.utcnow)
    total_chat_count: int = 0
    subscription_expires: Optional[datetime] = None
    privacy_settings: Dict[str, Any] = Field(default_factory=dict)

class CharacterPersonality(BaseModel):
    traits: List[str] = []
    speaking_style: str = "friendly"
    language_preference: str = "zh-CN"
    formality_level: int = 5  # 1-10 scale
    humor_level: int = 5
    emotional_intensity: int = 5
    topics_of_interest: List[str] = []
    background_story: str = ""
    quirks: List[str] = []

class CharacterAppearance(BaseModel):
    avatar_url: str
    hair_color: str = ""
    eye_color: str = ""
    height: str = ""
    build: str = ""
    clothing_style: str = ""
    distinctive_features: List[str] = []

class AICharacter(BaseModel):
    character_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    gender: CharacterGender
    age: Optional[int] = None
    appearance: CharacterAppearance
    personality: CharacterPersonality
    creator_id: Optional[str] = None  # If user-created
    is_public: bool = True
    is_premium: bool = False
    created_at: datetime = Field(default_factory=datetime.utcnow)
    popularity_score: float = 0.0
    total_interactions: int = 0
    tags: List[str] = []
    voice_settings: Dict[str, Any] = Field(default_factory=dict)

class UserCharacterRelationship(BaseModel):
    relationship_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str
    character_id: str
    relationship_type: RelationshipType
    relationship_stage: RelationshipStage = RelationshipStage.STRANGER
    intimacy_score: float = 0.0
    total_messages: int = 0
    total_interaction_time: int = 0  # in minutes
    created_at: datetime = Field(default_factory=datetime.utcnow)
    last_interaction: datetime = Field(default_factory=datetime.utcnow)
    unlocked_scenarios: List[str] = []
    custom_nickname: Optional[str] = None
    relationship_milestones: List[Dict[str, Any]] = []
    emotional_history: List[Dict[str, Any]] = []

class ChatMessage(BaseModel):
    message_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    relationship_id: str
    sender: str  # "user" or "character"
    content: str
    message_type: str = "text"  # text, image, gift, etc.
    chat_mode: ChatMode = ChatMode.SIMPLE
    emotion_detected: Optional[EmotionType] = None
    intimacy_points_gained: float = 0.0
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    is_encrypted: bool = True
    metadata: Dict[str, Any] = Field(default_factory=dict)

class EmotionalState(BaseModel):
    state_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str
    detected_emotion: EmotionType
    intensity: float  # 0-1 scale
    context: str = ""
    triggers: List[str] = []
    timestamp: datetime = Field(default_factory=datetime.utcnow)
    ai_response_type: str = ""
    improvement_suggestions: List[str] = []

class GrowthMilestone(BaseModel):
    milestone_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str
    character_id: Optional[str] = None
    milestone_type: str
    title: str
    description: str
    achieved_at: datetime = Field(default_factory=datetime.utcnow)
    intimacy_bonus: float = 0.0
    unlock_rewards: List[str] = []

class VirtualGift(BaseModel):
    gift_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    description: str
    price: float
    rarity: str = "common"  # common, rare, epic, legendary
    effect_type: str = "intimacy_boost"
    effect_value: float = 0.0
    image_url: str = ""
    is_premium: bool = False

class UserSubscriptionDetails(BaseModel):
    subscription_id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    user_id: str
    subscription_type: UserSubscription
    start_date: datetime = Field(default_factory=datetime.utcnow)
    end_date: Optional[datetime] = None
    auto_renew: bool = True
    payment_method: str = ""
    features_unlocked: List[str] = []
    concurrent_characters_limit: int = 1

# Helper Functions
def hash_password(password: str) -> str:
    return pwd_context.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)

def create_access_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

async def get_current_user(credentials: HTTPAuthorizationCredentials = Security(security)):
    try:
        payload = jwt.decode(credentials.credentials, SECRET_KEY, algorithms=[ALGORITHM])
        user_id: str = payload.get("sub")
        if user_id is None:
            raise HTTPException(status_code=401, detail="Invalid authentication credentials")
        user = await db.users.find_one({"user_id": user_id})
        if user is None:
            raise HTTPException(status_code=401, detail="User not found")
        return UserProfile(**user)
    except jwt.PyJWTError:
        raise HTTPException(status_code=401, detail="Invalid authentication credentials")

def calculate_intimacy_gain(interaction_type: str, chat_mode: ChatMode, message_length: int) -> float:
    """Calculate intimacy points based on interaction"""
    base_points = {
        "message": 1.0,
        "long_conversation": 3.0,
        "gift": 5.0,
        "milestone": 10.0
    }
    
    mode_multiplier = {
        ChatMode.SIMPLE: 1.0,
        ChatMode.STORY: 1.5,
        ChatMode.MATURE: 2.0
    }
    
    length_bonus = min(message_length / 100, 2.0)  # Max 2x bonus for long messages
    
    return base_points.get(interaction_type, 1.0) * mode_multiplier.get(chat_mode, 1.0) * (1 + length_bonus)

def determine_relationship_stage(intimacy_score: float) -> RelationshipStage:
    """Determine relationship stage based on intimacy score"""
    if intimacy_score < 50:
        return RelationshipStage.STRANGER
    elif intimacy_score < 150:
        return RelationshipStage.FRIEND
    elif intimacy_score < 300:
        return RelationshipStage.AMBIGUOUS
    elif intimacy_score < 500:
        return RelationshipStage.LOVER
    else:
        return RelationshipStage.MARRIED

# Status Check
@app.get("/api/health")
async def health_check():
    return {"status": "healthy", "timestamp": datetime.utcnow()}

# User Management APIs
@app.post("/api/auth/register")
async def register_user(username: str, email: str, password: str, age: Optional[int] = None):
    # Check if user exists
    existing_user = await db.users.find_one({"$or": [{"email": email}, {"username": username}]})
    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")
    
    # Create user
    user = UserProfile(
        username=username,
        email=email,
        password_hash=hash_password(password),
        age=age,
        is_age_verified=age >= 18 if age else False
    )
    
    await db.users.insert_one(user.dict())
    
    # Create access token
    access_token = create_access_token(
        data={"sub": user.user_id},
        expires_delta=timedelta(days=30)
    )
    
    return {"access_token": access_token, "token_type": "bearer", "user": user.dict()}

@app.post("/api/auth/login")
async def login_user(email: str, password: str):
    user = await db.users.find_one({"email": email})
    if not user or not verify_password(password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    
    access_token = create_access_token(
        data={"sub": user["user_id"]},
        expires_delta=timedelta(days=30)
    )
    
    # Update last active
    await db.users.update_one(
        {"user_id": user["user_id"]},
        {"$set": {"last_active": datetime.utcnow()}}
    )
    
    return {"access_token": access_token, "token_type": "bearer", "user": user}

# Character Management APIs
@app.get("/api/characters")
async def get_public_characters(skip: int = 0, limit: int = 20):
    characters = await db.characters.find({"is_public": True}).skip(skip).limit(limit).to_list(limit)
    return characters

@app.post("/api/characters")
async def create_character(character_data: AICharacter, current_user: UserProfile = Depends(get_current_user)):
    character_data.creator_id = current_user.user_id
    await db.characters.insert_one(character_data.dict())
    return character_data

@app.get("/api/characters/{character_id}")
async def get_character(character_id: str):
    character = await db.characters.find_one({"character_id": character_id})
    if not character:
        raise HTTPException(status_code=404, detail="Character not found")
    return character

# Relationship Management APIs
@app.post("/api/relationships")
async def create_relationship(
    character_id: str,
    relationship_type: RelationshipType,
    current_user: UserProfile = Depends(get_current_user)
):
    # Check if relationship already exists
    existing = await db.relationships.find_one({
        "user_id": current_user.user_id,
        "character_id": character_id
    })
    if existing:
        raise HTTPException(status_code=400, detail="Relationship already exists")
    
    # Check character limit based on subscription
    user_relationships = await db.relationships.count_documents({"user_id": current_user.user_id})
    limits = {
        UserSubscription.FREE: 1,
        UserSubscription.BASIC: 3,
        UserSubscription.PREMIUM: 10,
        UserSubscription.VIP: 50
    }
    
    if user_relationships >= limits.get(current_user.subscription, 1):
        raise HTTPException(status_code=403, detail="Character limit reached for your subscription")
    
    relationship = UserCharacterRelationship(
        user_id=current_user.user_id,
        character_id=character_id,
        relationship_type=relationship_type
    )
    
    await db.relationships.insert_one(relationship.dict())
    return relationship

@app.get("/api/relationships")
async def get_user_relationships(current_user: UserProfile = Depends(get_current_user)):
    relationships = await db.relationships.find({"user_id": current_user.user_id}).to_list(None)
    
    # Populate character data
    for rel in relationships:
        character = await db.characters.find_one({"character_id": rel["character_id"]})
        if character:
            rel["character"] = character
    
    return relationships

@app.patch("/api/relationships/{relationship_id}")
async def update_relationship(
    relationship_id: str,
    updates: Dict[str, Any],
    current_user: UserProfile = Depends(get_current_user)
):
    relationship = await db.relationships.find_one({
        "relationship_id": relationship_id,
        "user_id": current_user.user_id
    })
    if not relationship:
        raise HTTPException(status_code=404, detail="Relationship not found")
    
    await db.relationships.update_one(
        {"relationship_id": relationship_id},
        {"$set": updates}
    )
    
    return {"message": "Relationship updated successfully"}

# Chat APIs will be implemented in the next phase
@app.post("/api/chat/{relationship_id}/message")
async def send_message(
    relationship_id: str,
    content: str,
    chat_mode: ChatMode = ChatMode.SIMPLE,
    current_user: UserProfile = Depends(get_current_user)
):
    # Verify relationship
    relationship = await db.relationships.find_one({
        "relationship_id": relationship_id,
        "user_id": current_user.user_id
    })
    if not relationship:
        raise HTTPException(status_code=404, detail="Relationship not found")
    
    # Age verification for mature mode
    if chat_mode == ChatMode.MATURE and not current_user.is_age_verified:
        raise HTTPException(status_code=403, detail="Age verification required for mature mode")
    
    # Create user message
    user_message = ChatMessage(
        relationship_id=relationship_id,
        sender="user",
        content=content,
        chat_mode=chat_mode
    )
    
    # Calculate intimacy gain
    intimacy_gain = calculate_intimacy_gain("message", chat_mode, len(content))
    
    # Update relationship intimacy
    new_intimacy = relationship["intimacy_score"] + intimacy_gain
    new_stage = determine_relationship_stage(new_intimacy)
    
    await db.relationships.update_one(
        {"relationship_id": relationship_id},
        {
            "$set": {
                "intimacy_score": new_intimacy,
                "relationship_stage": new_stage,
                "last_interaction": datetime.utcnow()
            },
            "$inc": {"total_messages": 1}
        }
    )
    
    # Save user message
    await db.messages.insert_one(user_message.dict())
    
    # Generate AI response (simplified for now)
    ai_content = f"Thank you for your message! Our intimacy score is now {new_intimacy:.1f}"
    ai_message = ChatMessage(
        relationship_id=relationship_id,
        sender="character",
        content=ai_content,
        chat_mode=chat_mode
    )
    
    await db.messages.insert_one(ai_message.dict())
    
    return {
        "user_message": user_message,
        "ai_response": ai_message,
        "intimacy_score": new_intimacy,
        "relationship_stage": new_stage,
        "intimacy_gained": intimacy_gain
    }

@app.get("/api/chat/{relationship_id}/history")
async def get_chat_history(
    relationship_id: str,
    skip: int = 0,
    limit: int = 50,
    current_user: UserProfile = Depends(get_current_user)
):
    # Verify relationship
    relationship = await db.relationships.find_one({
        "relationship_id": relationship_id,
        "user_id": current_user.user_id
    })
    if not relationship:
        raise HTTPException(status_code=404, detail="Relationship not found")
    
    messages = await db.messages.find({"relationship_id": relationship_id}).sort("timestamp", -1).skip(skip).limit(limit).to_list(limit)
    return list(reversed(messages))

# User Stats API
@app.get("/api/user/stats")
async def get_user_stats(current_user: UserProfile = Depends(get_current_user)):
    # Get user relationships count
    relationships_count = await db.relationships.count_documents({"user_id": current_user.user_id})
    
    # Get total messages count
    total_messages = await db.messages.count_documents({
        "relationship_id": {"$in": [
            rel["relationship_id"] for rel in 
            await db.relationships.find({"user_id": current_user.user_id}).to_list(None)
        ]},
        "sender": "user"
    })
    
    return {
        "charactersUsed": relationships_count,
        "totalChats": total_messages,
        "subscriptionExpires": current_user.subscription_expires.isoformat() if current_user.subscription_expires else None
    }

# Age Verification API
@app.post("/api/user/verify-age")
async def verify_age(
    birth_date: str,
    identity_document: Optional[str] = None,
    current_user: UserProfile = Depends(get_current_user)
):
    from datetime import datetime
    
    try:
        birth_date_obj = datetime.strptime(birth_date, "%Y-%m-%d")
        age = (datetime.now() - birth_date_obj).days // 365
        
        if age >= 18:
            await db.users.update_one(
                {"user_id": current_user.user_id},
                {"$set": {"is_age_verified": True, "age": age}}
            )
            return {"verified": True, "age": age}
        else:
            raise HTTPException(status_code=400, detail="Must be 18 or older")
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid date format")

# Emotional Analysis API
@app.post("/api/emotions/analyze")
async def analyze_emotion(
    text: str,
    relationship_id: str,
    current_user: UserProfile = Depends(get_current_user)
):
    # Simple emotion detection (in real app, use NLP models)
    emotion_keywords = {
        EmotionType.HAPPY: ["开心", "快乐", "高兴", "兴奋", "愉快", "喜悦"],
        EmotionType.SAD: ["难过", "伤心", "沮丧", "失落", "痛苦", "哭"],
        EmotionType.ANGRY: ["生气", "愤怒", "恼火", "烦躁", "气愤"],
        EmotionType.ANXIOUS: ["焦虑", "担心", "紧张", "不安", "忧虑"],
        EmotionType.LOVING: ["爱", "喜欢", "想念", "思念", "在乎", "关心"],
        EmotionType.CALM: ["平静", "安静", "放松", "舒适", "安心"]
    }
    
    detected_emotion = EmotionType.CALM
    max_matches = 0
    
    for emotion, keywords in emotion_keywords.items():
        matches = sum(1 for keyword in keywords if keyword in text)
        if matches > max_matches:
            max_matches = matches
            detected_emotion = emotion
    
    # Save emotional state
    emotional_state = EmotionalState(
        user_id=current_user.user_id,
        detected_emotion=detected_emotion,
        intensity=min(max_matches / 3.0, 1.0),  # Normalize to 0-1
        context=text[:100]  # First 100 chars
    )
    
    await db.emotional_states.insert_one(emotional_state.dict())
    
    return {
        "emotion": detected_emotion,
        "intensity": emotional_state.intensity,
        "suggestions": get_emotion_suggestions(detected_emotion)
    }

def get_emotion_suggestions(emotion: EmotionType) -> List[str]:
    suggestions = {
        EmotionType.HAPPY: ["继续保持好心情！", "分享你的快乐给朋友们"],
        EmotionType.SAD: ["需要聊聊吗？我在这里倾听", "深呼吸，一切都会好起来的"],
        EmotionType.ANGRY: ["试试深呼吸放松一下", "要不要说说是什么让你生气了？"],
        EmotionType.ANXIOUS: ["别担心，我们一起面对", "尝试做一些你喜欢的事情"],
        EmotionType.LOVING: ["爱让世界更美好", "表达爱意是很棒的事"],
        EmotionType.CALM: ["保持这份宁静", "享受当下的平静时光"]
    }
    return suggestions.get(emotion, ["保持积极的心态"])

# Virtual Gifts API
@app.get("/api/gifts")
async def get_virtual_gifts():
    gifts = [
        VirtualGift(
            name="爱心礼物",
            description="表达你的关爱",
            price=5.0,
            effect_type="intimacy_boost",
            effect_value=10.0,
            image_url="💝"
        ),
        VirtualGift(
            name="玫瑰花束",
            description="浪漫的表达",
            price=15.0,
            effect_type="intimacy_boost",
            effect_value=25.0,
            image_url="🌹"
        ),
        VirtualGift(
            name="钻石戒指",
            description="永恒的承诺",
            price=99.0,
            rarity="legendary",
            effect_type="intimacy_boost",
            effect_value=100.0,
            image_url="💍",
            is_premium=True
        )
    ]
    return [gift.dict() for gift in gifts]

@app.post("/api/gifts/send")
async def send_gift(
    relationship_id: str,
    gift_id: str,
    current_user: UserProfile = Depends(get_current_user)
):
    # Verify relationship
    relationship = await db.relationships.find_one({
        "relationship_id": relationship_id,
        "user_id": current_user.user_id
    })
    if not relationship:
        raise HTTPException(status_code=404, detail="Relationship not found")
    
    # Get gift data (in real app, from database)
    gifts = await get_virtual_gifts()
    gift = next((g for g in gifts if g["gift_id"] == gift_id), None)
    if not gift:
        raise HTTPException(status_code=404, detail="Gift not found")
    
    # Process payment (simplified)
    # In real app, integrate with payment processor
    
    # Apply gift effect
    intimacy_gain = gift["effect_value"]
    new_intimacy = relationship["intimacy_score"] + intimacy_gain
    new_stage = determine_relationship_stage(new_intimacy)
    
    await db.relationships.update_one(
        {"relationship_id": relationship_id},
        {
            "$set": {
                "intimacy_score": new_intimacy,
                "relationship_stage": new_stage,
                "last_interaction": datetime.utcnow()
            }
        }
    )
    
    # Create gift message
    gift_message = ChatMessage(
        relationship_id=relationship_id,
        sender="system",
        content=f"收到了{gift['name']}！亲密度+{intimacy_gain}",
        message_type="gift",
        intimacy_points_gained=intimacy_gain
    )
    
    await db.messages.insert_one(gift_message.dict())
    
    return {
        "gift_sent": True,
        "intimacy_gained": intimacy_gain,
        "new_intimacy": new_intimacy,
        "new_stage": new_stage
    }

# Subscription Management APIs
@app.post("/api/subscription/upgrade")
async def upgrade_subscription(
    plan: UserSubscription,
    payment_method: str,
    current_user: UserProfile = Depends(get_current_user)
):
    if plan == UserSubscription.FREE:
        raise HTTPException(status_code=400, detail="Cannot upgrade to free plan")
    
    # In real app, integrate with Stripe or other payment processor
    # For now, just simulate successful payment
    
    expiry_date = datetime.utcnow() + timedelta(days=30)  # 30 days from now
    
    await db.users.update_one(
        {"user_id": current_user.user_id},
        {
            "$set": {
                "subscription": plan,
                "subscription_expires": expiry_date
            }
        }
    )
    
    # Create subscription record
    subscription = UserSubscriptionDetails(
        user_id=current_user.user_id,
        subscription_type=plan,
        end_date=expiry_date,
        payment_method=payment_method
    )
    
    await db.subscriptions.insert_one(subscription.dict())
    
    return {
        "success": True,
        "plan": plan,
        "expires": expiry_date.isoformat(),
        "payment_url": f"https://payment.example.com/checkout/{subscription.subscription_id}"
    }

# Character Scenarios API
@app.get("/api/scenarios")
async def get_available_scenarios(current_user: UserProfile = Depends(get_current_user)):
    # Base scenarios available to all users
    scenarios = [
        {
            "id": "morning_chat",
            "name": "晨间问候",
            "description": "温暖的早安对话",
            "required_intimacy": 0,
            "is_premium": False
        },
        {
            "id": "movie_night",
            "name": "电影之夜",
            "description": "一起看电影聊天",
            "required_intimacy": 100,
            "is_premium": False
        },
        {
            "id": "romantic_dinner",
            "name": "浪漫晚餐",
            "description": "烛光晚餐的浪漫时光",
            "required_intimacy": 200,
            "is_premium": True
        },
        {
            "id": "wedding_ceremony",
            "name": "婚礼典礼",
            "description": "神圣的结婚仪式",
            "required_intimacy": 500,
            "is_premium": True
        }
    ]
    
    # Filter based on user subscription
    if current_user.subscription == UserSubscription.FREE:
        scenarios = [s for s in scenarios if not s["is_premium"]]
    
    return scenarios

@app.post("/api/scenarios/{scenario_id}/trigger")
async def trigger_scenario(
    scenario_id: str,
    relationship_id: str,
    current_user: UserProfile = Depends(get_current_user)
):
    # Verify relationship and intimacy level
    relationship = await db.relationships.find_one({
        "relationship_id": relationship_id,
        "user_id": current_user.user_id
    })
    if not relationship:
        raise HTTPException(status_code=404, detail="Relationship not found")
    
    scenarios = await get_available_scenarios(current_user)
    scenario = next((s for s in scenarios if s["id"] == scenario_id), None)
    if not scenario:
        raise HTTPException(status_code=404, detail="Scenario not available")
    
    if relationship["intimacy_score"] < scenario["required_intimacy"]:
        raise HTTPException(status_code=403, detail="Insufficient intimacy level")
    
    # Generate scenario content
    scenario_content = generate_scenario_content(scenario_id, relationship)
    
    # Create scenario message
    scenario_message = ChatMessage(
        relationship_id=relationship_id,
        sender="character",
        content=scenario_content,
        message_type="scenario"
    )
    
    await db.messages.insert_one(scenario_message.dict())
    
    # Add to unlocked scenarios
    await db.relationships.update_one(
        {"relationship_id": relationship_id},
        {"$addToSet": {"unlocked_scenarios": scenario_id}}
    )
    
    return {
        "scenario_triggered": True,
        "content": scenario_content
    }

def generate_scenario_content(scenario_id: str, relationship: dict) -> str:
    """Generate dynamic scenario content based on relationship context"""
    templates = {
        "morning_chat": "早上好！今天有什么计划吗？我想和你一起度过美好的一天。",
        "movie_night": "今晚想看什么电影呢？我准备了爆米花，让我们一起享受电影时光吧！",
        "romantic_dinner": "为你准备了特别的晚餐，烛光摇曳，音乐轻柔，就像我们第一次约会那样...",
        "wedding_ceremony": "在众人的见证下，我愿意与你携手走过人生的每一个阶段，无论贫穷还是富有..."
    }
    
    return templates.get(scenario_id, "让我们开始这个特别的时刻吧！")

# Initialize database indexes for new collections
@app.on_event("startup")
async def startup_db_client():
    # Create indexes for better performance
    await db.users.create_index("email", unique=True)
    await db.users.create_index("username", unique=True)
    await db.characters.create_index("creator_id")
    await db.relationships.create_index([("user_id", 1), ("character_id", 1)], unique=True)
    await db.messages.create_index("relationship_id")
    await db.messages.create_index("timestamp")
    await db.emotional_states.create_index("user_id")
    await db.emotional_states.create_index("timestamp")
    await db.subscriptions.create_index("user_id")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
