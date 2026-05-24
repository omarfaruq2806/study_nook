# 📚 StudyNook – Library Study Room Booking System

Live Site : https://studynook-three.vercel.app <br>
Client Repo : [https://github.com/omarfaruq2806/study_nook](https://github.com/omarfaruq2806/study_nook)<br>
Server Repo : [https://github.com/omarfaruq2806/studynook_server](https://github.com/omarfaruq2806/studynook_server)<br>

## 🚀 Project Overview

StudyNook is a full-stack web application designed for students and library users to easily find, list, and book study rooms in libraries or private study spaces.

### Users can:

Browse available study rooms<br>
Filter and search rooms<br>
Book rooms for specific date & time slots<br>
Manage their own listings<br>
View and cancel bookings<br>

The system includes secure authentication using JWT stored in HTTP-only cookies, ensuring safety and session protection.

## 🎯 Project Purpose

The main goal of StudyNook is to solve a real-world problem:

Students often struggle to find quiet study spaces. StudyNook makes booking study rooms fast, simple, and organized.

## ✨ Key Features

🔐 Secure Authentication (JWT + HTTP-only cookies)<br>
👤 User Registration & Login (Email + Google OAuth)<br>
🏠 Add, Edit, Delete Study Rooms (Owner-only control)<br>
🔎 Search & Filter Rooms (name, amenities)<br>
📅 Advanced Booking System with time-slot conflict detection<br>
📊 My Listings dashboard for room owners<br>
📋 My Bookings dashboard for users<br>
❌ Booking cancellation system<br>
⚡ Responsive UI (Mobile, Tablet, Desktop)<br>
🎨 Modern recruiter-friendly UI design<br>
🚫 No alert() used — all notifications via toast system<br>

### 🧑‍💻 Tech Stack

#### Frontend: <br>

Next.js (App Router)<br>
React.js<br>
Tailwind CSS<br>
React Hot Toast<br>
Better Auth (client integration)<br>

#### Backend:

Node.js<br>
Express.js<br>
MongoDB<br>
JWT (jose library)<br>
CORS & Cookie-based authentication<br>
