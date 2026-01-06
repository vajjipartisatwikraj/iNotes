# iNoteBook Backend

This is the backend API for the iNoteBook application, a notes management system.

## Setup Instructions

1. Install dependencies:
   ```
   npm install
   ```

2. Create a `.env` file in the backend directory with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/inotebook
   JWT_SECRET=YourSecureJWTSecret123456
   ```
   
3. Start the server:
   - For development (with auto-reload):
     ```
     npm run dev
     ```
   - For production:
     ```
     npm start
     ```

## API Endpoints

### Authentication Endpoints
- `POST /api/auth/createuser` - Register a new user
- `POST /api/auth/login` - Login a user
- `POST /api/auth/getuser` - Get user details (Protected route)

### Notes Endpoints
- `GET /api/notes/fetchallnotes` - Get all notes (Protected route)
- `POST /api/notes/addnotes` - Add a new note (Protected route)
- `POST /api/notes/updatenote/:id` - Update a note (Protected route)
- `DELETE /api/notes/deletenote/:id` - Delete a note (Protected route)

## Environment Variables

- `PORT` - Port for the server (default: 5000)
- `MONGODB_URI` - MongoDB connection URI
- `JWT_SECRET` - Secret key for JWT token generation and verification 