# Task Management API

A RESTful API for task management with user authentication, task categorization, and progress tracking.

## Features

- User authentication with JWT
- CRUD operations for tasks
- Task categorization
- Progress tracking
- Secure password hashing with bcryptjs
- Input validation
- Rate limiting
- CORS enabled

## Installation

1. Clone the repository
2. Run `npm install`
3. Set up MongoDB
4. Create a `.env` file with your configuration
5. Run `npm run dev` for development

## API Documentation

### Authentication Endpoints
- POST /api/auth/register - Register a new user
- POST /api/auth/login - Login user

### Task Endpoints
- GET /api/tasks - Get all tasks for authenticated user
- POST /api/tasks - Create a new task
- GET /api/tasks/:id - Get a specific task
- PUT /api/tasks/:id - Update a task
- DELETE /api/tasks/:id - Delete a task

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing