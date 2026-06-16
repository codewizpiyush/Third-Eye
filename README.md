# 👁 ThirdEye – A Smart Examination Platform for College Campuses

*ThirdEye* is a secure, efficient, and user-friendly online *exam portal* designed for college environments. With a clean UI and LAN-restricted access, this platform empowers administrators to conduct MCQ-based exams and track student performance in real-time — ensuring fairness, speed, and control.

> ✅ Redesigned UI • 🔐 LAN-only deployment • 📊 Instant scoring • 🧑‍💼 Admin & Student modes

---

## ✨ Features

- 👤 *User Roles*: Admin (faculty) and Student
- 📝 *Create and Attempt Exams*: MCQ-based tests with real-time validation
- 🎨 *Custom UI/UX*: Redesigned login, registration, dashboard, and exam interfaces
- 🧠 *Performance Tracking*: Score display and exam history
- 🛡 *LAN-Restricted Deployment*: Platform accessible only within the college network
- 🖥 *Clean Code Structure*: Separated frontend/backend, reusable components

---

## 🔧 Technologies Used

### Frontend
- React.js
- Ant Design (UI components)
- Vanilla CSS (custom styles)
- Axios (API calls)

### Backend
- Node.js + Express.js
- MongoDB (local)
- JWT for authentication
- Bcrypt.js for password encryption

---

## 📂 Folder Structure
├── frontend/ 
│ ├── src/ 
│ │ ├── components/ → Reusable UI components 
│ │ ├── pages/ → Login, Register, Dashboard, etc. 
│ │ └── App.js 
│ └── public/ 
├── backend/ 
│ ├── controllers/ → Business logic 
│ ├── models/ → MongoDB models (User, Exam, Results) 
│ ├── routes/ → API endpoints 
│ └── server.js


# Install dependencies for server in the root directory
npm install
# and run the server
npm start

# open the another terminal and go to the client directory and install the dependencies for client
cd .\client\
npm install
# after installation run the client
npm start


# Server runs on  http://localhost:3000
```
"This project is based on Quiz Application by Kanishk Patel, originally licensed under the MIT License. Major enhancements have been made including role-based access, auto-quiz generation, and admin features."