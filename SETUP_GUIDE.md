# Setup Guide for My Blog Application

This guide will help you set up and run the complete blog application.

## System Requirements

- Node.js v14 or higher
- npm v6 or higher (or yarn)
- MongoDB (local or cloud)
- A text editor or IDE (VS Code recommended)

## Step-by-Step Installation

### Step 1: Check Prerequisites

Open PowerShell and verify installations:

```powershell
node --version
npm --version
```

### Step 2: Install MongoDB (if using local)

**Option A: Local MongoDB**
1. Download from https://www.mongodb.com/try/download/community
2. Run the installer and follow the installation wizard
3. MongoDB will be installed as a Windows service

**Option B: MongoDB Atlas (Cloud)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a cluster and get your connection string

### Step 3: Backend Setup

Open PowerShell and navigate to the backend directory:

```powershell
cd e:\myblogs\backend
```

Install dependencies:

```powershell
npm install
```

Create `.env` file with your configuration:

**For Local MongoDB:**
```
MONGODB_URI=mongodb://localhost:27017/myblog
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

**For MongoDB Atlas:**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/myblog
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

### Step 4: Frontend Setup

Open a **new** PowerShell window and navigate to frontend:

```powershell
cd e:\myblogs\frontend
```

Install dependencies:

```powershell
npm install
```

## Running the Application

### Terminal 1: Start MongoDB (if using local)

```powershell
# Start MongoDB service (already running if installed as service)
# Or start mongod manually if not set as service
mongod
```

### Terminal 2: Start Backend Server

```powershell
cd e:\myblogs\backend
npm run dev
```

Expected output:
```
Server running on port 5000
MongoDB connected
```

### Terminal 3: Start Frontend Server

```powershell
cd e:\myblogs\frontend
npm start
```

The application will automatically open at `http://localhost:3000`

## Using the Application

1. **Home Page**: View all blog posts
2. **Write Blog**: Click the "Write Blog" button to create a new post
3. **View Details**: Click "Read More" on any post
4. **Edit Post**: Click "Edit" button on a blog card
5. **Delete Post**: Click "Delete" button (with confirmation)
6. **Search**: Use the search bar to find posts

## Common Tasks

### Create a Blog Post

1. Click "Write Blog" button
2. Fill in the form:
   - Title (required)
   - Content (required)
   - Author (optional)
   - Category (optional)
   - Image URL (optional)
   - Tags (comma-separated, optional)
3. Click "Post Blog"

### Search for Blogs

1. Use the search bar at the top
2. Type any keyword, author name, or tag
3. Results will update automatically

### Edit a Blog Post

1. Click the "Edit" button on a blog card
2. Modify the content
3. Click "Update Blog"

### Delete a Blog Post

1. Click the "Delete" button on a blog card
2. Confirm the deletion

## Troubleshooting

### MongoDB Connection Error
- **Problem**: "MongoDB connection error"
- **Solution**: 
  - Ensure MongoDB is running (`mongod` in terminal)
  - Check your MONGODB_URI in `.env`
  - Verify firewall isn't blocking MongoDB port 27017

### Port Already in Use
- **Problem**: "Port 5000 is already in use" or "Port 3000 is already in use"
- **Solution**:
  - Change PORT in backend `.env` file
  - Kill the process using the port: `netstat -ano | findstr :5000`
  - Then: `taskkill /PID <PID> /F`

### CORS Error in Console
- **Problem**: "Access to XMLHttpRequest blocked by CORS policy"
- **Solution**:
  - Check CORS_ORIGIN in backend `.env`
  - Should match frontend URL (default: http://localhost:3000)

### npm install Issues
- **Problem**: "npm ERR! code ERESOLVE"
- **Solution**:
  ```powershell
  npm install --legacy-peer-deps
  ```

### React App Won't Start
- **Problem**: "Failed to compile"
- **Solution**:
  1. Delete `node_modules` and `package-lock.json`
  2. Run `npm install` again
  3. Run `npm start`

## Stopping the Servers

- Press `Ctrl + C` in each terminal to stop the servers
- MongoDB service will continue running until manually stopped

## Building for Production

### Build Frontend

```powershell
cd e:\myblogs\frontend
npm run build
```

This creates a `build` folder with optimized files.

### Backend Deployment

The backend is ready to deploy. Just ensure:
1. Node.js is installed on the server
2. Environment variables are set correctly
3. MongoDB connection is available
4. Run `npm install` and `npm start`

## Additional Notes

- All blog data is stored in MongoDB
- Search is case-insensitive and searches title, content, and tags
- Images are stored as URLs (not uploaded)
- The application is fully responsive and works on mobile devices

## Next Steps

- Explore the code structure
- Customize styles in the `src/styles` folder
- Modify the database schema in `backend/models/Blog.js`
- Add new features like user authentication, comments, or likes

## Support

For issues or questions, refer to:
- Backend README: `e:\myblogs\backend\README.md`
- Frontend README: `e:\myblogs\frontend\README.md`
- Main README: `e:\myblogs\README.md`
