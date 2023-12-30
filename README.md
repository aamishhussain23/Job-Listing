# Job Listing Platform

Welcome to the Job Listing Platform, a web application that allows users to post, view, and filter job listings.

## Getting Started

### Prerequisites
- Node.js installed on your machine
- MongoDB account with a database created on [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- Git installed on your machine

### Installation Steps

   1. **Clone the Repository:**
      ```bash
      git clone https://github.com/aamishhussain23/Job-Listing.git
      cd Job-Listing
   
   2. **Install Dependencies:**
   ### Navigate to the backend folder and install backend dependencies:
      ```bash
      cd backend
      npm install

### Navigate to the frontend folder and install frontend dependencies:
   ```bash
   cd ../frontend
   npm install

3. **Set Up Environment Variables:**
###Create a .env file in the backend folder and add the following variables:
   ```bash
   DB_URL=your_mongodb_connection_string
   FRONTEND_URL=your_frontend_url
   FRONTEND_URL_2=http://localhost:3000
   JWT_SECRET=your_jwt_secret
   NODE_ENV=Development
   PORT=your_preferred_port
