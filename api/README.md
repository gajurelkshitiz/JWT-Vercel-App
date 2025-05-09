# JSON Web Token (JWT) Project

This project demonstrates the implementation of JSON Web Tokens (JWT) for secure communication between a client and a server. It includes user authentication, token generation, and protected routes.

## Features

1. **User Authentication**:
   - Users can log in by providing a username and password.
   - A JWT is generated upon successful login.

2. **Protected Routes**:
   - Certain routes are protected and require a valid JWT for access.

3. **Error Handling**:
   - Custom error handling middleware is implemented to handle various errors gracefully.

4. **Environment Variables**:
   - Sensitive information like the JWT secret and database URI are stored in a `.env` file.

## Project Structure

```
JSON Web Token/
├── app.js                # Main application file
├── controllers/          # Contains route handler logic
│   └── main.js           # Login and dashboard logic
├── db/                   # Database connection logic
│   └── connect.js
├── errors/               # Custom error classes
│   └── custom-error.js
├── middleware/           # Middleware for authentication and error handling
│   ├── auth.js           # JWT authentication middleware
│   ├── error-handler.js  # Custom error handler middleware
│   └── not-found.js      # Middleware for handling 404 errors
├── public/               # Static files (HTML, CSS, JS)
│   ├── browser-app.js    # Frontend logic for interacting with the API
│   ├── index.html        # Main HTML file
│   └── styles.css        # Styling for the application
├── routes/               # Route definitions
│   └── main.js           # Routes for login and dashboard
├── .env                  # Environment variables
├── .gitignore            # Ignored files and folders
└── package.json          # Project dependencies and scripts
```

## How It Works

1. **Login**:
   - The `/api/v1/login` route accepts a username and password.
   - A JWT is generated using the `jsonwebtoken` library and sent back to the client.

2. **Dashboard**:
   - The `/api/v1/dashboard` route is protected by the `auth.js` middleware.
   - The middleware verifies the JWT and allows access to the route if the token is valid.

3. **Error Handling**:
   - Custom errors are thrown using the `CustomAPIError` class.
   - The `error-handler.js` middleware handles these errors and sends appropriate responses to the client.

## Setup Instructions

1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory with the following variables:
   ```env
   MONGO_URI = 'mongodb://localhost:27017/WEB_TOKEN'
   PORT = 5000
   JWT_SECRET = "custom_JwT_secret_here"
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Access the application at `http://localhost:5000`.

## Dependencies

- `express`: Web framework for Node.js
- `dotenv`: Loads environment variables from a `.env` file
- `jsonwebtoken`: Library for generating and verifying JWTs
- `mongoose`: MongoDB object modeling tool
- `express-async-errors`: Simplifies error handling in async functions
- `nodemon`: Development tool for automatically restarting the server

## Key Files

- **`app.js`**: Entry point of the application.
- **`controllers/main.js`**: Contains the logic for login and dashboard routes.
- **`middleware/auth.js`**: Middleware for authenticating JWTs.
- **`errors/custom-error.js`**: Custom error class for handling application-specific errors.
- **`public/browser-app.js`**: Frontend logic for interacting with the API.

## Notes

- Ensure MongoDB is running locally or update the `MONGO_URI` in the `.env` file to point to a remote database.
- Use a strong secret for `JWT_SECRET` to enhance security.

This project serves as a reference for implementing JWT-based authentication in Node.js applications.