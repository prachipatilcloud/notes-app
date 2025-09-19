# Notes App

A simple note-taking web application built with React and Vite.
The app allows you to create, manage, and organize notes with useful features like pinning, restoring, and permanent deletion.

Features

Add new notes

Delete notes (moved to a deleted section first)

Save notes in local storage (persistent across sessions)

Mark important notes

Pin and unpin notes

Restore deleted notes

Permanently delete notes from the deleted section

Tech Stack

React

Vite

JavaScript, HTML, CSS

Prerequisites

Node.js (version 14 or later recommended)

npm (or yarn / pnpm)

Getting Started

Clone the repository

git clone https://github.com/prachipatilcloud/notes-app.git
cd notes-app


Install dependencies

npm install


Run the app in development mode

npm run dev


Then open http://localhost:3000
 in your browser.

Build for production

npm run build


Preview the production build

npm run preview

Project Structure
notes-app/
├── public/          # Static assets
├── src/
│   ├── components/  # Reusable React components
│   ├── reducers/    # State management (notesReducer)
│   ├── pages/       # Page-level components
│   └── main.jsx     # Entry point
├── .gitignore
├── package.json
├── vite.config.js
└── eslint.config.js

Future Improvements

Add search and filter functionality

Add user authentication

Add dark and light theme support

Cloud sync instead of only local storage

Tagging and categorization of notes
