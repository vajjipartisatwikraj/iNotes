# iNotebook - Frontend

## React + Vite Application

This is the frontend application for iNotebook, built with React and Vite.

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

The application will run on `http://localhost:3000`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Running Both Frontend and Backend

To run both frontend and backend concurrently:

```bash
npm run both
```

This will start:
- Frontend on `http://localhost:3000`
- Backend on `http://localhost:5000`

### Technologies Used

- React 18.3.1
- Vite 6.0.5
- React Router DOM 6.26.0
- Axios 1.9.0
- Bootstrap 5.3.3

### Project Structure

```
frontend/
├── src/
│   ├── components/     # React components
│   ├── contexts/       # React contexts
│   ├── App.jsx         # Main App component
│   ├── index.jsx       # Entry point
│   ├── App.css         # App styles
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML template
├── vite.config.js      # Vite configuration
└── package.json        # Dependencies and scripts
```
