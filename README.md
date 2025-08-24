# Task Management API

A robust RESTful API for task management built with Node.js, Express, and MongoDB. This API provides user authentication, task categorization, progress tracking, and secure data handling with industry best practices.

## 🚀 Features

### Authentication & Security
- **JWT-based Authentication** - Secure user login and registration
- **Password Hashing** - bcryptjs for secure password storage
- **Protected Routes** - Middleware for authentication verification
- **Rate Limiting** - Protection against brute force attacks
- **Helmet.js** - Security headers protection
- **CORS Enabled** - Cross-origin resource sharing

### Task Management
- **CRUD Operations** - Create, read, update, and delete tasks
- **Task Categorization** - Organize tasks with custom categories
- **Progress Tracking** - Track task status (pending, in-progress, completed)
- **Priority System** - Set task priorities (low, medium, high)
- **Due Dates** - Set and track task deadlines
- **Tags System** - Add custom tags to tasks
- **Pagination** - Efficient data retrieval with pagination
- **Filtering & Sorting** - Filter by status, priority, category, and sort by date

### User Management
- **User Registration & Login** - Secure account creation and authentication
- **Profile Management** - Update user information
- **Personalized Data** - Users only access their own tasks

## 🛠️ Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JSON Web Tokens (JWT)
- **Password Hashing**: bcryptjs
- **Validation**: Joi
- **Security**: Helmet.js, express-rate-limit
- **File Structure**: ES6 Modules

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/shehzab/Task-Management-API.git
   cd task-management-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   - Create a `.env` file in the root directory
   - Add the following environment variables:
     ```
     PORT=5000
     MONGODB_URI=mongodb://localhost:27017/taskmanager
     JWT_SECRET=your_super_secret_jwt_key_here
     JWT_EXPIRE=7d
     NODE_ENV=development
     ```

4. **Start MongoDB**
   ```bash
   # On Ubuntu/Debian
   sudo systemctl start mongod
   
   # On macOS with Homebrew
   brew services start mongodb-community
   ```

5. **Run the application**
   ```bash
   # Development mode with auto-restart
   npm run dev
   
   # Production mode
   npm start
   ```

## 🚀 API Endpoints

### Authentication Routes
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/api/auth/register` | Register a new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/auth/me` | Get current user | Yes |

### Task Routes
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/tasks` | Get all user tasks | Yes |
| POST | `/api/tasks` | Create a new task | Yes |
| GET | `/api/tasks/:id` | Get a specific task | Yes |
| PUT | `/api/tasks/:id` | Update a task | Yes |
| DELETE | `/api/tasks/:id` | Delete a task | Yes |

### User Routes
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/users/profile` | Get user profile | Yes |
| PUT | `/api/users/profile` | Update user profile | Yes |

### Health Check
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/health` | API health status |

## 📋 API Usage Examples

### Register a User
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "username": "john_doe",
    "email": "john@example.com",
    "password": "securepassword123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "securepassword123"
  }'
```

### Create a Task (with JWT)
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "title": "Complete API Documentation",
    "description": "Write comprehensive documentation for the Task Management API",
    "status": "in-progress",
    "priority": "high",
    "category": "Documentation",
    "tags": ["api", "docs", "important"]
  }'
```

### Get All Tasks with Filtering
```bash
curl -X GET "http://localhost:5000/api/tasks?status=completed&priority=high&page=1&limit=10" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

## 🗃️ Database Models

### User Model
```javascript
{
  username: String (required, unique),
  email: String (required, unique),
  password: String (required, hashed),
  timestamps: true
}
```

### Task Model
```javascript
{
  title: String (required),
  description: String,
  status: String (enum: ['pending', 'in-progress', 'completed']),
  priority: String (enum: ['low', 'medium', 'high']),
  dueDate: Date,
  category: String,
  tags: [String],
  user: ObjectId (ref: 'User', required),
  timestamps: true
}
```

## 🔒 Security Features

- **JWT Authentication** - Stateless token-based authentication
- **Password Hashing** - bcryptjs with salt rounds
- **Input Validation** - Joi validation for all endpoints
- **Rate Limiting** - 100 requests per 15 minutes per IP
- **CORS Configuration** - Controlled cross-origin requests
- **Helmet.js** - Security headers protection
- **No SQL Injection** - Mongoose built-in protection
- **Error Handling** - Proper error messages without sensitive data exposure

## 🧪 Testing

Run tests with:
```bash
npm test
```

The project includes:
- Unit tests for controllers and middleware
- Integration tests for API endpoints
- Validation testing



### Local Deployment
1. Install MongoDB locally
2. Set up environment variables
3. Run `npm start`




## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - [GitHub Profile](https://github.com/shehzab)

## 🙏 Acknowledgments

- Express.js team for the wonderful framework
- MongoDB for the flexible database solution
- JWT for authentication standard
- All contributors and users of this API

## 📞 Support

If you have any questions or issues, please create an issue in the GitHub repository or contact the development team.

---

