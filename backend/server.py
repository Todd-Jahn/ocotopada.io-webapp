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

# Initialize database indexes
@app.on_event("startup")
async def startup_db_client():
    # Create indexes for better performance
    await db.users.create_index("email", unique=True)
    await db.users.create_index("username", unique=True)
    await db.characters.create_index("creator_id")
    await db.relationships.create_index([("user_id", 1), ("character_id", 1)], unique=True)
    await db.messages.create_index("relationship_id")
    await db.messages.create_index("timestamp")

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
