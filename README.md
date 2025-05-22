API Documentation (Current)

GET /tasks/login
Body: { "username": "username",
"password": "password" }

These are fixed credentials to verify whether user is authorised or not and
I used JWT token and middleware and generated bearer token.With this token-based 
authentication , user is granted access to perform actions 
such as getting, creating, updating, or deleting tasks through
the corresponding API endpoints in Postman.
GET /tasks
Returns all tasks 

GET /tasks/:id
Returns task by ID.

POST /tasks
Body: { "title": "Task title",
"description": "...", "completed": false }
Creates a new task with its deafult as false.

PUT /tasks/:id
Update a task by  finding ID.

DELETE /tasks/:id
Deletes a task by  finding its ID and use slice methd to delete it.

Project Report
 Approach:
I developed a Task Manager API using Node.js and Express.

Implemented JWT-based authentication to protect task routes.

Tasks are stored in an in-memory array for simplicity (no database).

Basic CRUD operations implemented for tasks:

Create, Read (all and by ID), Update, Delete.

Authentication middleware verifies token on every protected route.


request and responses of all endpoints
POST /login

{
  "username": "username",
  "password": "password"
}
res {
  "message": "Login successful",
  "token": "<token>"
}
 error {
  "message": "Invalid credentials"
}
now token is written at the requisite site.... Authorization: Bearer <token>

now POST /tasks
{
  "title": "Second Task",
  "description": "This is the second task",
  "completed": true
}
{
    "id": 2,
    "title": "Second Task",
    "description": "This is the second task",
    "completed": true
  }
 now GET /tasks
[
  {
    "id": 1,
    "title": "First Task",
    "description": "This is the first task",
    "completed": false
  },
  {
    "id": 2,
    "title": "Second Task",
    "description": "This is the second task",
    "completed": true
  }
]
GET /tasks/1
{
  "id": 1,
  "title": "First Task",
  "description": "This is the first task",
  "completed": false
}

if not found
{
  "message": "Task not found"
}

PUT /tasks/1

{
  "title": "Updated Task",
  "description": "Updated task description",
  "completed": true
}
res
{
  "id": 1,
  "title": "Updated Task",
  "description": "Updated task description",
  "completed": true
}
if not found 
{
  "message": "Task not found"
}
DELETE /tasks/1
{
  "message": "Task deleted successfully"
}


