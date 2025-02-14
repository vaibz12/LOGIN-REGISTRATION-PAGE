# Login & Registration Page (MERN Auth App)

## Overview
This project is a simple authentication system built using the MERN (MongoDB, Express, React, Node.js) stack. It includes user registration, login, and a protected dashboard.

## Features
- User Registration
- User Login
- Protected Dashboard
- Dark Mode Toggle

## Technologies Used
- **Frontend:** React, React Router
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Styling:** CSS

## Setup Instructions

### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/mern-auth-app.git
cd mern-auth-app
```

### 2. Install Dependencies
#### Frontend
```sh
cd frontend
npm install
```
#### Backend
```sh
cd backend
npm install
```

### 3. Start the Application
#### Start Backend Server
```sh
cd backend
npm start
```
#### Start Frontend
```sh
cd frontend
npm start
```

### 4. API Endpoints
- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Authenticate a user
- **GET** `/api/auth/user` - Fetch user details

## Folder Structure
```
mern-auth-app/
  ├── frontend/        # React Frontend
  ├── backend/        # Express Backend
  ├── README.md      # Documentation
```

## Environment Variables
Create a `.env` file in the `backend` directory and add:
```sh
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
```



