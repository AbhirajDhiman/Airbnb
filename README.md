# Airbnb Clone (Backend with Node, Express, EJS)

A learning project built to understand backend development: routing, views (EJS), database models, authentication & CRUD operations.  
⚠️ This is **not** the official Airbnb, but a simplified clone for practice.

---

## 🚀 Features

- User registration & login
- Browse/list properties (rooms/houses)
- Create new property listings
- View details of a property
- Edit / Delete listings (for owners/admin)
- EJS views for rendering front-end pages
- Express routes to handle HTTP requests
- Database models for users & listings

---

## 🛠️ Technologies Used

- **Node.js** – JavaScript runtime  
- **Express.js** – Web framework for backend routing  
- **EJS** – Templating engine to render views from server  
- **CSS / public static files** – for styling & static assets  
- **Database** – (MongoDB / MySQL / PostgreSQL → specify what you used)  
- **Models** – Represent entities like Users, Properties/Listings  

---

## 📁 Project Structure

Airbnb/
├── app.js # Main server file
├── models/ # Database models (User, Listing etc.)
├── views/ # EJS templates
├── public/ # Static assets: CSS, images, client JS
├── node_modules/
├── package.json
└── package-lock.json

yaml
Copy code

---

## ⚙ Setup Instructions

1. Clone the repo  
   ```bash
   git clone https://github.com/AbhirajDhiman/Airbnb.git
Install dependencies

bash
Copy code
cd Airbnb
npm install
Set up the database

(Specify DB: MongoDB / MySQL etc.)

Create a .env file with configs like:

ini
Copy code
DB_URI=your_database_uri
SESSION_SECRET=your_secret
PORT=3000
Run migrations / sync models (if using ORM) or ensure schema setup

Start the server

bash
Copy code
npm start
Open in browser: http://localhost:3000

✅ Learning Outcomes
Defining routes for GET / POST requests

Middleware setup (express.json(), express.urlencoded(), static assets, session/auth if used)

Rendering server-side pages with EJS

Database schema / models & CRUD operations

Basic authentication & authorization

Structuring backend code (models / routes / views)

✍ Future Improvements
Add search & filtering (location, price, etc.)

Image uploads for listings

User profiles & reviews

Role-based access (admin vs user)

REST API version with JSON endpoints

Validation, Error handling, Logging

Deployment (Heroku / AWS / DigitalOcean)
