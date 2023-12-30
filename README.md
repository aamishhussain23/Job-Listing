#!/bin/bash

# Job Listing Platform

## Getting Started

### Prerequisites
- Node.js installed on your machine
- MongoDB account with a database created on [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- Git installed on your machine

### Installation Steps

# Clone the Repository
git clone https://github.com/aamishhussain23/Job-Listing.git
cd Job-Listing

# Install Dependencies
cd backend
npm install

cd ../frontend
npm install

# Set Up Environment Variables
echo "DB_URL=your_mongodb_connection_string" >> backend/.env
echo "FRONTEND_URL=your_frontend_url" >> backend/.env
echo "FRONTEND_URL_2=http://localhost:3000" >> backend/.env
echo "JWT_SECRET=your_jwt_secret" >> backend/.env
echo "NODE_ENV=Development" >> backend/.env
echo "PORT=your_preferred_port" >> backend/.env

# Run the Backend Server
cd ../backend
npm start &

# Run the Frontend Application
cd ../frontend
npm start &
# Wait for the Backend and Frontend to Start
echo "Waiting for the backend and frontend to start..."
sleep 20 # Adjust the sleep time based on your system's speed

# Access the Application
echo "Open your web browser and visit http://localhost:3000 to access the Job Listing Platform."

# Display Additional Information
echo ""
echo "## Project Structure"
echo "- **backend:** Server-side code."
echo "- **frontend:** Client-side code."
echo "- **server.js:** Main file for running the server."
echo ""
echo "## API Endpoints"
echo "- `/api/v1/health`: Check if the server is up."
echo "- `/api/v1/register`: Register a new user."
echo "- `/api/v1/login`: Log in and get a JWT token."
echo "- `/api/v1/jobs`: Get all job listings with filters."
echo "- `/api/v1/job/:id`: Get details of a specific job."
echo "- `/api/v1/create-job`: Create a new job listing (protected route, requires authentication)."
echo "- `/api/v1/edit-job/:id`: Edit an existing job listing (protected route, requires authentication)."
echo ""
echo "## Important Notes"
echo "- Ensure MongoDB is set up in the `.env` file."
echo "- Frontend and backend should run simultaneously."
echo "- Update the frontend URL in the `.env` file based on your development environment."
echo ""
echo "For any issues or questions, feel free to raise an [issue](https://github.com/aamishhussain23/Job-Listing/issues) on the GitHub repository."
