# Tekarsh API Automation

**This project focuses on validating the functionality of two APIs provided by the Automation Exercise platform: Brand List and User Login Verification. These APIs are tested to ensure their behavior aligns with expected outcomes, contributing to the platform's reliability and user experience.**


## Technology Used:

- Axios
- Java Script
- Visual Studio Code
- Mochawesome

## How to run this project:

- Clone this project
- hit the following command: ```npm run test```
- for Mochawesome Report: ```--reporter mochawesome --reporter-options reportDir=Reports,reportFilename=report.html```

## Test Scenarios

### **Test 1: Validate Brand List**
- **Endpoint**: `https://automationexercise.com/api/brandsList`
- **Method**: `GET`
- **Tests**:
  1. Verify that the response contains the brands:
     - Polo
     - Babyhug
     - Biba
  2. Verify that the response does **not** contain the brands:
     - Heineken
     - BMW
     - Razor

---

### **Test 2: Verify User Login**
- **Endpoint**: `https://automationexercise.com/api/verifyLogin`
- **Method**: `POST`
- **Request Parameters** (in form-data format):
  1. `email`
  2. `password`
- **Tests**:
  1. Use the email and password (as used in the UI Testing section).
  2. Verify that the response message is: **“User exists!”**
 

 ## Mochawesome Report:
 
![Tekarsh_API_Report](https://github.com/user-attachments/assets/41eb3eac-0010-42a8-a73b-1c0f450569f9)


## Video Output:

https://github.com/user-attachments/assets/af3508e6-db48-4f34-a13c-db1625c65b87





