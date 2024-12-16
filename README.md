# Tekarsh API Automation

**This project focuses on validating the functionality of two APIs provided by the Automation Exercise platform: Brand List and User Login Verification. These APIs are tested to ensure their behavior aligns with expected outcomes, contributing to the platform's reliability and user experience.**


## Technology Used:

- Axios
- Java Script
- Visual Studio Code
- Mochawesome

## How to run this project:

- Clone this project
- Launch Visual Studio Code (VS Code) and open the cloned project folder.
- Install dependencies using `npm install`
- In the VS Code project explorer, right-click on the folder named `Tekarsh_Automation_API`.
- Click on `Open in Integrated Terminal`.
- Hit the command `npm run test`.
- Navigate to the `reports` folder in the project directory.
- Locate the file `report.html`.
- Right-click on `report.html` and select `Open with Live Server` to view the test results in your browser.

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
 
![Screenshot (46)](https://user-images.githubusercontent.com/123433625/228039868-767c8209-279e-4078-910f-c4ec993b51ed.png)


## Video Output:



https://user-images.githubusercontent.com/123433625/228039972-764fe3e5-e7d3-4877-b430-7859607bf2a6.mp4


