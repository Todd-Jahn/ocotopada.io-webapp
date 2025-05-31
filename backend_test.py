#!/usr/bin/env python3
import requests
import json
import time
import uuid
import os
from datetime import datetime
from typing import Dict, Any, Optional, List

# Backend URL from environment
BACKEND_URL = "https://bb47478b-f159-41fe-9a89-897ed222be24.preview.emergentagent.com"
API_BASE_URL = f"{BACKEND_URL}/api"

# Test user credentials
TEST_USER = {
    "username": f"testuser_{uuid.uuid4().hex[:8]}",
    "email": f"testuser_{uuid.uuid4().hex[:8]}@example.com",
    "password": "Test@123456",
    "age": 25
}

# Test results tracking
test_results = {
    "total_tests": 0,
    "passed_tests": 0,
    "failed_tests": 0,
    "test_details": []
}

# Test data storage
test_data = {
    "access_token": None,
    "user_id": None,
    "character_id": None,
    "relationship_id": None,
    "gift_id": None,
    "scenario_id": None
}

def log_test_result(test_name: str, passed: bool, response: Optional[requests.Response] = None, error: Optional[str] = None):
    """Log test result with details"""
    test_results["total_tests"] += 1
    
    if passed:
        test_results["passed_tests"] += 1
        status = "PASSED"
    else:
        test_results["failed_tests"] += 1
        status = "FAILED"
    
    result = {
        "test_name": test_name,
        "status": status,
        "timestamp": datetime.now().isoformat()
    }
    
    if response:
        try:
            result["response_status"] = response.status_code
            result["response_body"] = response.json() if response.text else None
        except:
            result["response_body"] = response.text[:500]  # Truncate long responses
    
    if error:
        result["error"] = error
    
    test_results["test_details"].append(result)
    
    # Print result to console
    print(f"[{status}] {test_name}")
    if not passed and error:
        print(f"  Error: {error}")
    if response and not passed:
        print(f"  Status: {response.status_code}")
        try:
            print(f"  Response: {json.dumps(response.json(), indent=2)[:500]}...")
        except:
            print(f"  Response: {response.text[:500]}...")
    print()

def make_request(method: str, endpoint: str, data: Optional[Dict[str, Any]] = None, 
                 params: Optional[Dict[str, Any]] = None, auth: bool = False) -> requests.Response:
    """Make HTTP request to API with proper error handling"""
    url = f"{API_BASE_URL}{endpoint}"
    headers = {}
    
    if auth and test_data["access_token"]:
        headers["Authorization"] = f"Bearer {test_data['access_token']}"
    
    try:
        if method.lower() == "get":
            response = requests.get(url, params=params, headers=headers)
        elif method.lower() == "post":
            response = requests.post(url, json=data, params=params, headers=headers)
        elif method.lower() == "patch":
            response = requests.patch(url, json=data, params=params, headers=headers)
        elif method.lower() == "delete":
            response = requests.delete(url, params=params, headers=headers)
        else:
            raise ValueError(f"Unsupported HTTP method: {method}")
        
        return response
    except requests.RequestException as e:
        print(f"Request error: {e}")
        # Create a mock response for error cases
        mock_response = requests.Response()
        mock_response.status_code = 500
        mock_response._content = str(e).encode('utf-8')
        return mock_response

def test_health_check():
    """Test API health check endpoint"""
    response = make_request("get", "/health")
    
    if response.status_code == 200 and response.json().get("status") == "healthy":
        log_test_result("Health Check", True, response)
    else:
        log_test_result("Health Check", False, response, "Health check failed")

def test_user_registration():
    """Test user registration API"""
    # Try with params first (query parameters)
    response = make_request("post", "/auth/register", params=TEST_USER)
    
    # If that fails, try with JSON body
    if response.status_code != 200:
        response = make_request("post", "/auth/register", data=TEST_USER)
    
    if response.status_code == 200 and "access_token" in response.json():
        test_data["access_token"] = response.json()["access_token"]
        test_data["user_id"] = response.json()["user"]["user_id"]
        log_test_result("User Registration", True, response)
    else:
        log_test_result("User Registration", False, response, "Failed to register user")

def test_user_login():
    """Test user login API"""
    # Try with params first (query parameters)
    response = make_request("post", "/auth/login", params={
        "email": TEST_USER["email"],
        "password": TEST_USER["password"]
    })
    
    # If that fails, try with JSON body
    if response.status_code != 200:
        response = make_request("post", "/auth/login", data={
            "email": TEST_USER["email"],
            "password": TEST_USER["password"]
        })
    
    if response.status_code == 200 and "access_token" in response.json():
        test_data["access_token"] = response.json()["access_token"]
        log_test_result("User Login", True, response)
    else:
        log_test_result("User Login", False, response, "Failed to login")

def test_get_public_characters():
    """Test getting public characters"""
    response = make_request("get", "/characters")
    
    if response.status_code == 200:
        characters = response.json()
        if isinstance(characters, list):
            if characters:
                # Save first character ID for later tests
                test_data["character_id"] = characters[0]["character_id"]
            log_test_result("Get Public Characters", True, response)
        else:
            log_test_result("Get Public Characters", False, response, "Response is not a list")
    else:
        log_test_result("Get Public Characters", False, response, "Failed to get characters")

def test_create_character():
    """Test creating a custom character"""
    character_data = {
        "name": "Test Character",
        "gender": "female",
        "age": 25,
        "appearance": {
            "avatar_url": "https://example.com/avatar.jpg",
            "hair_color": "brown",
            "eye_color": "blue",
            "height": "165cm",
            "build": "slim",
            "clothing_style": "casual",
            "distinctive_features": ["dimples", "freckles"]
        },
        "personality": {
            "traits": ["kind", "intelligent", "funny"],
            "speaking_style": "friendly",
            "language_preference": "zh-CN",
            "formality_level": 5,
            "humor_level": 7,
            "emotional_intensity": 6,
            "topics_of_interest": ["technology", "art", "travel"],
            "background_story": "A tech enthusiast who loves to travel and explore new cultures.",
            "quirks": ["always says 'actually' when explaining things"]
        },
        "is_public": True,
        "is_premium": False,
        "tags": ["friendly", "tech", "travel"]
    }
    
    response = make_request("post", "/characters", data=character_data, auth=True)
    
    if response.status_code == 200 and "character_id" in response.json():
        test_data["character_id"] = response.json()["character_id"]
        log_test_result("Create Character", True, response)
    else:
        log_test_result("Create Character", False, response, "Failed to create character")

def test_get_character_details():
    """Test getting character details"""
    if not test_data["character_id"]:
        log_test_result("Get Character Details", False, None, "No character ID available")
        return
    
    response = make_request("get", f"/characters/{test_data['character_id']}")
    
    if response.status_code == 200 and "character_id" in response.json():
        log_test_result("Get Character Details", True, response)
    else:
        log_test_result("Get Character Details", False, response, "Failed to get character details")

def test_create_relationship():
    """Test creating a relationship with a character"""
    if not test_data["character_id"]:
        log_test_result("Create Relationship", False, None, "No character ID available")
        return
    
    params = {
        "character_id": test_data["character_id"],
        "relationship_type": "lover"
    }
    
    # Try with params first (query parameters)
    response = make_request("post", "/relationships", params=params, auth=True)
    
    # If that fails, try with JSON body
    if response.status_code != 200:
        response = make_request("post", "/relationships", data=params, auth=True)
    
    if response.status_code == 200 and "relationship_id" in response.json():
        test_data["relationship_id"] = response.json()["relationship_id"]
        log_test_result("Create Relationship", True, response)
    else:
        log_test_result("Create Relationship", False, response, "Failed to create relationship")

def test_get_relationships():
    """Test getting user relationships"""
    response = make_request("get", "/relationships", auth=True)
    
    if response.status_code == 200 and isinstance(response.json(), list):
        if not test_data["relationship_id"] and response.json():
            test_data["relationship_id"] = response.json()[0]["relationship_id"]
        log_test_result("Get Relationships", True, response)
    else:
        log_test_result("Get Relationships", False, response, "Failed to get relationships")

def test_update_relationship():
    """Test updating a relationship"""
    if not test_data["relationship_id"]:
        log_test_result("Update Relationship", False, None, "No relationship ID available")
        return
    
    updates = {
        "custom_nickname": "My Test Companion"
    }
    
    response = make_request("patch", f"/relationships/{test_data['relationship_id']}", data=updates, auth=True)
    
    if response.status_code == 200:
        log_test_result("Update Relationship", True, response)
    else:
        log_test_result("Update Relationship", False, response, "Failed to update relationship")

def test_send_message():
    """Test sending a message in a chat"""
    if not test_data["relationship_id"]:
        log_test_result("Send Message", False, None, "No relationship ID available")
        return
    
    params = {
        "content": "Hello, this is a test message!",
        "chat_mode": "simple"
    }
    
    # Try with params first (query parameters)
    response = make_request("post", f"/chat/{test_data['relationship_id']}/message", params=params, auth=True)
    
    # If that fails, try with JSON body
    if response.status_code != 200:
        response = make_request("post", f"/chat/{test_data['relationship_id']}/message", data=params, auth=True)
    
    if response.status_code == 200 and "ai_response" in response.json():
        log_test_result("Send Message", True, response)
    else:
        log_test_result("Send Message", False, response, "Failed to send message")

def test_get_chat_history():
    """Test getting chat history"""
    if not test_data["relationship_id"]:
        log_test_result("Get Chat History", False, None, "No relationship ID available")
        return
    
    response = make_request("get", f"/chat/{test_data['relationship_id']}/history", auth=True)
    
    if response.status_code == 200 and isinstance(response.json(), list):
        log_test_result("Get Chat History", True, response)
    else:
        log_test_result("Get Chat History", False, response, "Failed to get chat history")

def test_get_virtual_gifts():
    """Test getting virtual gifts"""
    response = make_request("get", "/gifts")
    
    if response.status_code == 200 and isinstance(response.json(), list):
        if response.json():
            test_data["gift_id"] = response.json()[0]["gift_id"]
        log_test_result("Get Virtual Gifts", True, response)
    else:
        log_test_result("Get Virtual Gifts", False, response, "Failed to get virtual gifts")

def test_send_gift():
    """Test sending a gift"""
    if not test_data["relationship_id"] or not test_data["gift_id"]:
        log_test_result("Send Gift", False, None, "No relationship ID or gift ID available")
        return
    
    params = {
        "gift_id": test_data["gift_id"]
    }
    
    response = make_request("post", f"/gifts/send", params=params, auth=True)
    
    if response.status_code == 200 and response.json().get("gift_sent"):
        log_test_result("Send Gift", True, response)
    else:
        log_test_result("Send Gift", False, response, "Failed to send gift")

def test_analyze_emotion():
    """Test emotion analysis"""
    if not test_data["relationship_id"]:
        log_test_result("Analyze Emotion", False, None, "No relationship ID available")
        return
    
    params = {
        "text": "我今天很开心，因为我收到了一份特别的礼物！",
        "relationship_id": test_data["relationship_id"]
    }
    
    response = make_request("post", "/emotions/analyze", params=params, auth=True)
    
    if response.status_code == 200 and "emotion" in response.json():
        log_test_result("Analyze Emotion", True, response)
    else:
        log_test_result("Analyze Emotion", False, response, "Failed to analyze emotion")

def test_upgrade_subscription():
    """Test subscription upgrade"""
    params = {
        "plan": "premium",
        "payment_method": "credit_card"
    }
    
    response = make_request("post", "/subscription/upgrade", params=params, auth=True)
    
    if response.status_code == 200 and response.json().get("success"):
        log_test_result("Upgrade Subscription", True, response)
    else:
        log_test_result("Upgrade Subscription", False, response, "Failed to upgrade subscription")

def test_get_scenarios():
    """Test getting available scenarios"""
    response = make_request("get", "/scenarios", auth=True)
    
    if response.status_code == 200 and isinstance(response.json(), list):
        if response.json():
            test_data["scenario_id"] = response.json()[0]["id"]
        log_test_result("Get Scenarios", True, response)
    else:
        log_test_result("Get Scenarios", False, response, "Failed to get scenarios")

def test_trigger_scenario():
    """Test triggering a scenario"""
    if not test_data["relationship_id"] or not test_data["scenario_id"]:
        log_test_result("Trigger Scenario", False, None, "No relationship ID or scenario ID available")
        return
    
    params = {
        "relationship_id": test_data["relationship_id"]
    }
    
    response = make_request("post", f"/scenarios/{test_data['scenario_id']}/trigger", params=params, auth=True)
    
    if response.status_code == 200 and response.json().get("scenario_triggered"):
        log_test_result("Trigger Scenario", True, response)
    else:
        log_test_result("Trigger Scenario", False, response, "Failed to trigger scenario")

def test_user_stats():
    """Test getting user stats"""
    response = make_request("get", "/user/stats", auth=True)
    
    if response.status_code == 200 and "charactersUsed" in response.json():
        log_test_result("Get User Stats", True, response)
    else:
        log_test_result("Get User Stats", False, response, "Failed to get user stats")

def test_verify_age():
    """Test age verification"""
    params = {
        "birth_date": "1995-01-01"
    }
    
    response = make_request("post", "/user/verify-age", params=params, auth=True)
    
    if response.status_code == 200 and response.json().get("verified"):
        log_test_result("Verify Age", True, response)
    else:
        log_test_result("Verify Age", False, response, "Failed to verify age")

def print_summary():
    """Print test summary"""
    print("\n" + "="*80)
    print(f"TEST SUMMARY")
    print("="*80)
    print(f"Total Tests: {test_results['total_tests']}")
    print(f"Passed: {test_results['passed_tests']}")
    print(f"Failed: {test_results['failed_tests']}")
    print(f"Success Rate: {(test_results['passed_tests'] / test_results['total_tests'] * 100):.2f}%")
    print("="*80)
    
    if test_results['failed_tests'] > 0:
        print("\nFAILED TESTS:")
        for test in test_results['test_details']:
            if test['status'] == 'FAILED':
                print(f"- {test['test_name']}: {test.get('error', 'Unknown error')}")
    print("="*80)

def run_all_tests():
    """Run all API tests in sequence"""
    print(f"Starting API tests against {API_BASE_URL}")
    print("="*80)
    
    # Basic health check
    test_health_check()
    
    # User authentication tests
    test_user_registration()
    test_user_login()
    
    # Character management tests
    test_get_public_characters()
    test_create_character()
    test_get_character_details()
    
    # Relationship management tests
    test_create_relationship()
    test_get_relationships()
    test_update_relationship()
    
    # Chat system tests
    test_send_message()
    test_get_chat_history()
    
    # Virtual gift tests
    test_get_virtual_gifts()
    test_send_gift()
    
    # Emotion analysis test
    test_analyze_emotion()
    
    # Subscription test
    test_upgrade_subscription()
    
    # Scenario tests
    test_get_scenarios()
    test_trigger_scenario()
    
    # User stats and verification tests
    test_user_stats()
    test_verify_age()
    
    # Print summary
    print_summary()
    
    return test_results

if __name__ == "__main__":
    run_all_tests()