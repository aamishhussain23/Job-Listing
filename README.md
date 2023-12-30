# Job Listing Platform

Welcome to the Job Listing Platform, a web application that allows users to post, view, and filter job listings. This README will guide you through the setup process to run the project locally.

## Getting Started

### Prerequisites
- Node.js installed on your machine
- MongoDB account and a database created on [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- Git installed on your machine

### Installation Steps

1. **Clone the Repository:**
   ```bash
     git clone https://github.com/aamishhussain23/Job-Listing.git
     cd Job-Listing
   
2. **Install Dependencies:**
   ### Navigate to the backend folder
     cd backend
     npm install

   ### Navigate to the frontend folder
     cd ../frontend
     npm install

3. **Set Up Environment Variables:**
   Create a .env file in the backend folder and add the following variables:
   
     DB_URL=your_mongodb_connection_string
     FRONTEND_URL=your_frontend_url
     FRONTEND_URL_2=http://localhost:3000
     JWT_SECRET=your_jwt_secret
     NODE_ENV=Development
     PORT=your_preferred_port
