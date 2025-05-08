# 📁 Project Structure for VC App (Stream + MERN)

## Backend (Express + MongoDB)

- server/
  - controllers/
    - authController.js
    - callController.js
  - models/
    - User.js
    - Call.js
  - routes/
    - authRoutes.js
    - callRoutes.js
  - utils/
    - streamClient.js # For initializing Stream
    - authMiddleware.js
  - config/
    - db.js
    - streamConfig.js
  - server.js
  - .env

## Frontend (React)

- client/
  - src/
    - assets/
    - components/
      - Auth/
        - Login.jsx
        - Signup.jsx
      - Call/
        - VideoCall.jsx
        - CallControls.jsx
      - Layout/
        - Navbar
