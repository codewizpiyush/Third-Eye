# 👁 Third-Eye – AI-Powered Online Examination Platform

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Backend-green?logo=node.js)
![Express](https://img.shields.io/badge/Express.js-API-black?logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![Render](https://img.shields.io/badge/Render-Deployed-46E3B7?logo=render)
![License](https://img.shields.io/badge/License-MIT-yellow)

## Overview

Third-Eye is a full-stack AI-powered online examination and assessment platform developed using the MERN Stack (MongoDB, Express.js, React.js, and Node.js).

The platform enables teachers to create and manage examinations, students to attempt tests and view results, and administrators to monitor platform activities. It also integrates Generative AI to automatically generate quizzes on any topic, reducing manual effort and improving assessment creation efficiency.

---

## Features

### AI Quiz Generation

* Generate quizzes automatically using Google Gemini AI.
* Topic-based MCQ generation.
* Automatic answer key generation.
* Instant quiz creation for educators.

### Student Module

* Secure student registration and login.
* Browse available examinations.
* Attempt online tests.
* Automatic score calculation.
* View examination history and results.
* Real-time exam experience.

### Teacher Module

* Create and manage examinations.
* Add and edit questions manually.
* Generate quizzes using AI.
* Publish examinations for students.
* Review examination submissions.

### Admin Module

* Verify or block users.
* Manage teachers and students.
* Approve, verify, or delete examinations.
* Monitor examination activities.
* View student performance and reports.
* Platform-wide management dashboard.

### Authentication & Security

* JWT-based authentication.
* Protected routes.
* Role-based access control.
* User verification workflow.

---

## Technology Stack

### Frontend

* React.js
* Redux
* Ant Design
* Axios
* React Router

### Backend

* Node.js
* Express.js

### Database

* MongoDB

### AI Integration

* Google Gemini API

### Authentication

* JSON Web Token (JWT)

---

## Project Structure

```text
Third-Eye/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── apicalls/
│   │   └── App.js
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## Installation

### Clone Repository

```bash
git clone https://github.com/codewizpiyush/Third-Eye.git
```

### Backend Setup

```bash
cd server
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URL=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Run backend:

```bash
npm start
```

### Frontend Setup

```bash
cd client
npm install
```

Create a `.env` file:

```env
REACT_APP_BASE_URL=http://localhost:5000
```

Run frontend:

```bash
npm start
```

---

## Future Enhancements

* AI-powered exam difficulty adjustment.
* Detailed performance analytics.
* Proctoring and anti-cheating features.
* Certificate generation.
* Question bank management.
* Cloud deployment and scalability improvements.

---

## Team Members

### Piyush Gupta

* Full Stack Development
* Backend Development
* Database Design
* Authentication & Authorization
* AI Integration
* System Architecture
* Project Management

### Anuj Singh Gurjar

* Frontend Development
* UI Components
* User Interface Design

### Kunal Dhote

* Frontend Development
* UI Implementation
* User Experience Enhancements

---

## Author

**Piyush Gupta**

MERN Stack Developer

---

## License

```
"This project is based on Quiz Application by Kanishk Patel, originally licensed under the MIT License. Major enhancements have been made including role-based access, auto-quiz generation, and admin features."

## Acknowledgement

This project is based on Quiz Application by Kanishk Patel, originally licensed under the MIT License.

The project has been substantially extended and modified with:

- AI-powered quiz generation using Google Gemini
- Role-based authentication and authorization
- Admin verification and user management
- Examination management workflows
- Student performance tracking
- UI/UX improvements
- Backend enhancements and API integrations

Development and customization:
- Piyush Gupta
- Anuj Singh Gurjar
- Kunal Dhote
