# Qualitea
A simple full-stack CRUD eCommerce application built with **MongoDB, React (Vite), Node.js, Express, and Redux** for secure user authentication and efficient state management.
Integrated user authentication for secure access and implemented features to manage products and users.

## Features
* **User Authentication:** Secure login and signup functionality.
* **Product Management:** Create, read, update, and delete (CRUD) products.
* **User Management:** Manage user details for the application.
* **State Management:** Redux for seamless authentication and data flow.
* **Responsive Design:** Optimized UI for both desktop and mobile devices.
* **RESTful APIs:** Backend endpoints for data management.

## Tech Stack
* **Frontend:** React (Vite), Redux
* **Backend:** Node.js, Express
* **Database:** MongoDB

## Installation

### Prerequisites:
- Node.js installed on your system
- MongoDB server running locally or in the cloud

### Steps:
1. Clone the Repository:
   
```bash
  git clone https://github.com/Nishayne/qualitea.git
  cd qualitea
  ```

2. Install Dependencies:

For the backend:
```bash
cd backend
npm install
```
For the frontend:
```bash
cd frontend
npm install
```

3. Set Up Environment Variables:

Create a .env file in the backend directory with the following keys:
```bash
PORT=8000
MONGODB_URL=your-mongodb-connection-string
```

4. Run the Application:

Start the backend:
```bash
cd backend
npm run dev
```
Start the frontend:
```bash
cd frontend
npm run dev
```
5. Access the Application:
   Open your browser and navigate to http://localhost:5173.

## Usage
* Sign up or log in to access the application.
* Add, update, delete, or view products.
* View and manage user data.
