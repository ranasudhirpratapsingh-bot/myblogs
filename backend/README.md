# Blog Backend Configuration

This backend is built with Node.js, Express, and MongoDB.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Start production server
npm start
```

## Environment Configuration

Create a `.env` file in this directory:

```
MONGODB_URI=mongodb://localhost:27017/myblog
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

## Database

This application uses MongoDB. You can use:
- Local MongoDB installation
- MongoDB Atlas (cloud) - Update MONGODB_URI with your connection string

## API Routes

All routes are prefixed with `/api`:

- `GET /blogs` - Get all blogs
- `POST /blogs` - Create new blog
- `GET /blogs/:id` - Get blog by ID
- `PUT /blogs/:id` - Update blog
- `DELETE /blogs/:id` - Delete blog
- `GET /blogs/search?query=term` - Search blogs
- `GET /health` - Health check

## Dependencies

- express: Web framework
- mongoose: MongoDB ODM
- cors: Cross-Origin Resource Sharing
- dotenv: Environment variables
- multer: File upload handling

## Development

For development, use `npm run dev` which uses nodemon for auto-reload on file changes.

## Deployment

1. Build: No build step needed for backend
2. Set appropriate environment variables on your host
3. Ensure MongoDB connection is available
4. Run: `npm start`
