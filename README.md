# Task Manager

A full-stack task management application that allows users to create, view, edit, complete, and delete tasks.

The application uses MongoDB for persistent data storage, so tasks remain saved even after refreshing or reopening the application.

## Live Demo

[View Task Manager](https://task-manager-9ftt.onrender.com)

> The application is hosted on Render, so the first load may take a few moments if the server has been inactive.

## Features

- Create new tasks
- View saved tasks
- Edit existing tasks
- Mark tasks as completed
- Delete tasks
- Persistent MongoDB database storage
- Responsive user interface
- REST API for managing tasks

## Technologies Used

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- MongoDB
- Mongoose

### Deployment
- Render
- MongoDB Atlas

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/tasks` | Retrieve all tasks |
| POST | `/api/tasks` | Create a new task |
| PUT | `/api/tasks/:id` | Update a task |
| DELETE | `/api/tasks/:id` | Delete a task |

## Project Structure

```text
task-manager/
└── backend/
    ├── frontend/
    │   ├── index.html
    │   ├── style.css
    │   └── script.js
    ├── models/
    │   └── Task.js
    ├── server.js
    ├── package.json
    └── package-lock.json
