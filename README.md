# My Blog Application

A full-stack blogging application built with React, Node.js, Express, and MongoDB. This application allows users to create, read, update, and delete blog posts with features like searching and tagging.

## Features

- **Create Blog Posts**: Write and publish blog posts with title, content, author, category, and tags
- **Read Blog Posts**: View all blogs on the home page with a clean card layout
- **Edit Blog Posts**: Update existing blog posts
- **Delete Blog Posts**: Remove blog posts
- **Search Functionality**: Search blogs by title, content, or tags
- **Responsive Design**: Fully responsive UI that works on desktop and mobile devices
- **Image Support**: Add featured images to blog posts
- **Categories**: Organize blogs by categories
- **Tagging System**: Add multiple tags to categorize content

## Tech Stack

### Frontend
- React 18.2.0
- React Router DOM 6.8.0
- Axios 1.3.2
- CSS3 for styling

### Backend
- Node.js
- Express.js 4.18.2
- MongoDB
- Mongoose 7.0.0
- CORS 2.8.5
- Dotenv 16.0.3

## Project Structure

```
myblogs/
├── backend/
│   ├── models/
│   │   └── Blog.js              # MongoDB Blog schema
│   ├── controllers/
│   │   └── blogController.js    # Business logic for blogs
│   ├── routes/
│   │   └── blogs.js             # API routes
│   ├── .env                      # Environment variables
│   ├── server.js                # Express server entry point
│   └── package.json             # Backend dependencies
│
└── frontend/
    ├── public/
    │   └── index.html           # HTML template
    ├── src/
    │   ├── components/
    │   │   ├── Header.js        # Header with navigation
    │   │   ├── BlogForm.js      # Form for creating/editing blogs
    │   │   └── BlogCard.js      # Blog card component
    │   ├── pages/
    │   │   ├── HomePage.js      # Home page with blog list
    │   │   ├── CreateBlogPage.js # Create blog page
    │   │   ├── EditBlogPage.js  # Edit blog page
    │   │   └── BlogDetailPage.js # Blog detail view
    │   ├── services/
    │   │   └── blogService.js   # API service calls
    │   ├── styles/
    │   │   ├── index.css        # Global styles
    │   │   ├── App.css          # App styles
    │   │   ├── Header.css       # Header styles
    │   │   ├── BlogForm.css     # Form styles
    │   │   ├── BlogCard.css     # Card styles
    │   │   ├── HomePage.css     # Home page styles
    │   │   ├── BlogDetailPage.css # Detail page styles
    │   │   ├── CreateBlogPage.css # Create page styles
    │   │   └── EditBlogPage.css # Edit page styles
    │   ├── App.js              # Main React component
    │   ├── index.js            # React entry point
    │   └── package.json        # Frontend dependencies
    
└── README.md                   # This file
```

## Prerequisites

Make sure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn
- MongoDB (locally or MongoDB Atlas cloud account)

## Installation

### 1. Clone or Download the Project

```bash
cd e:\myblogs
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create a `.env` file with your configuration:

```
MONGODB_URI=mongodb://localhost:27017/myblog
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

**Note:** If using MongoDB Atlas (cloud), update MONGODB_URI:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/myblog
```

### 3. Frontend Setup

Open a new terminal and navigate to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

## Running the Application

### Start MongoDB

**If using local MongoDB:**
```bash
mongod
```

**If using MongoDB Atlas, no action needed - just ensure your connection string is correct.**

### Start Backend Server

In the backend directory:

```bash
npm run dev
```

Or for production:

```bash
npm start
```

The backend server will run on `http://localhost:5000`

### Start Frontend Development Server

In a new terminal, in the frontend directory:

```bash
npm start
```

The frontend will open automatically at `http://localhost:3000`

## API Endpoints

### Blogs

- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/:id` - Get a specific blog
- `GET /api/blogs/search?query=keyword` - Search blogs
- `POST /api/blogs` - Create a new blog
- `PUT /api/blogs/:id` - Update a blog
- `DELETE /api/blogs/:id` - Delete a blog
- `GET /api/health` - Health check

## Usage

1. **View Blogs**: Visit the home page to see all published blogs
2. **Create Blog**: Click "Write Blog" button in the header
3. **Edit Blog**: Click "Edit" button on any blog card
4. **Delete Blog**: Click "Delete" button on any blog card
5. **Search**: Use the search bar in the header to find blogs by title, content, or tags
6. **View Details**: Click "Read More" to view the full blog post

## Blog Post Fields

- **Title**: The blog post title (required)
- **Content**: The main blog content (required)
- **Author**: Name of the author (defaults to "Anonymous")
- **Category**: Category of the blog (General, Technology, Travel, Food, Lifestyle, etc.)
- **Tags**: Comma-separated tags for organization
- **Image**: URL of a featured image

## Building for Production

### Frontend

```bash
cd frontend
npm run build
```

This creates an optimized production build in the `build` folder.

### Backend

No build step needed. Deploy the `backend` folder to your server.

## Environment Variables

### Backend (.env)

```
MONGODB_URI=mongodb://localhost:27017/myblog
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

## Common Issues and Solutions

### MongoDB Connection Error
- Make sure MongoDB is running locally or your connection string is correct for MongoDB Atlas
- Check your firewall settings

### CORS Error
- Ensure `CORS_ORIGIN` in `.env` matches your frontend URL
- Default is `http://localhost:3000`

### Port Already in Use
- Change the `PORT` in backend `.env` file
- Update the frontend proxy if needed

### Dependencies Installation Issues
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

## Development Tips

- Use browser DevTools (F12) for debugging
- Check browser console for error messages
- Use backend logs to debug API issues
- MongoDB Compass can be used to view database records

## Future Enhancements

- User authentication and authorization
- Comments on blog posts
- Like/favorite feature
- Social media sharing
- Rich text editor for blog content
- Image upload instead of URL
- Blog categories filtering
- Pagination for blog list
- Related posts suggestions
- Analytics dashboard

## License

This project is open source and available under the MIT License.

## Support

For issues or questions, please check the code comments or create an issue in the repository.
