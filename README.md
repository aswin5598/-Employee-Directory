# 24h Project

Quick setup and run instructions for the project (backend + frontend).

Prerequisites
- Node.js (v16+ recommended)
- npm (bundled with Node)
- Git

Backend
1. Open a terminal and change to the backend folder:

   cd BACKEND

2. Install dependencies:

   npm install

3. Create a `.env` or set environment variables used by the app (example names):

- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — secret for signing JWTs
- `PORT` — optional port (defaults to 3000)

4. Start the backend:

   node server.js

Frontend
1. Open a second terminal and change to the frontend folder:

   cd frontend

2. Install dependencies:

   npm install

3. Start the dev server (Vite):

   npm run dev

Building for production
- Frontend build:

  cd frontend
  npm run build

- Serve the built frontend with any static server or integrate with backend as needed.

Git: commit & push README
1. Add and commit the README:

   git add README.md
   git commit -m "Add README with setup instructions"

2. Push to the current branch's remote:

   git push origin HEAD

Troubleshooting
- If `git push` fails due to authentication, set up your Git credentials (SSH key or PAT) or use a credential helper.
- If the backend fails to connect to MongoDB, verify `MONGO_URI` and network access.

Contact
If you want, I can also:
- Add more detailed env examples in `.env.example`
- Create a branch and open a pull request with this README
