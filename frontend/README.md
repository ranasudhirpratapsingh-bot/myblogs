# Blog Frontend

A React-based frontend for the My Blog application.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

## Configuration

The frontend is configured to proxy API requests to the backend server at `http://localhost:5000`. This is set in `package.json`:

```json
"proxy": "http://localhost:5000"
```

## Project Structure

- `public/` - Static files and HTML template
- `src/`
  - `components/` - Reusable React components
  - `pages/` - Page components for routes
  - `services/` - API service layer (blogService.js)
  - `styles/` - CSS stylesheets

## Features

- Browse all blog posts
- Create new blog posts
- Edit existing blog posts
- Delete blog posts
- Search blogs by title, content, or tags
- View detailed blog posts
- Responsive design

## Available Scripts

- `npm start` - Run development server
- `npm build` - Build for production
- `npm test` - Run tests

## Dependencies

- react: UI library
- react-router-dom: Client-side routing
- axios: HTTP client for API calls
- react-scripts: Build and dev server tools

## Development

The frontend uses Create React App for easy setup and development. Hot reload is enabled, so changes will reflect immediately.

## Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Routing

The application uses React Router with the following routes:
- `/` - Home page (list all blogs)
- `/create` - Create new blog
- `/blog/:id` - View blog details
- `/edit/:id` - Edit blog

## Deployment

Build the project and serve the `build` folder with a static file server or deploy to a hosting service like Vercel, Netlify, or GitHub Pages.
