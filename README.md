# 🏠 Wanderlust - Airbnb Clone

A full-stack learning project built to understand backend development with Node.js, Express, and EJS templating. This application mimics core Airbnb functionality with property listings, user authentication, and CRUD operations.

⚠️ **Note**: This is a learning project and not affiliated with Airbnb Inc.

![Wanderlust Demo](https://img.shields.io/badge/Demo-Live-brightgreen) 
![Node.js](https://img.shields.io/badge/Node.js-16.x-green)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![EJS](https://img.shields.io/badge/Templating-EJS-orange)

## ✨ Features

### 🔐 Authentication
- User registration and login
- Secure password hashing
- Session management

### 🏠 Property Listings
- Browse all property listings
- View detailed property pages
- Create new property listings
- Edit existing listings (owners only)
- Delete listings (owners/admin)

### 🎨 User Experience
- Responsive design optimized for all devices
- Airbnb-inspired UI with smooth animations
- Intuitive navigation and clean interface

## 🛠 Tech Stack

### Backend
- **Node.js** - JavaScript runtime environment
- **Express.js** - Web application framework
- **EJS** - Embedded JavaScript templating

### Frontend
- **Bootstrap 5** - Responsive CSS framework
- **Custom CSS** - Airbnb-inspired styling
- **Font Awesome** - Icons

### Database
- **MongoDB** (or specify your database)
- **Mongoose** (if using MongoDB)

### Additional Tools
- **Environment variables** with dotenv
- **Session management** with express-session
- **File uploads** with Multer (if implemented)

## 📁 Project Structure

wanderlust/
├── 📂 models/
│ ├── user.js
│ └── listing.js
├── 📂 views/
│ ├── partials/
│ │ ├── header.ejs
│ │ └── footer.ejs
│ ├── pages/
│ │ ├── index.ejs
│ │ ├── listing.ejs
│ │ ├── new.ejs
│ │ └── edit.ejs
│ └── auth/
│ ├── login.ejs
│ └── register.ejs
├── 📂 routes/
│ ├── index.js
│ ├── auth.js
│ └── listings.js
├── 📂 public/
│ ├── css/
│ │ └── style.css
│ ├── js/
│ │ └── script.js
│ └── images/
├── 📂 middleware/
│ ├── auth.js
│ └── validation.js
├── app.js
├── package.json
└── .env


## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/AbhirajDhiman/Airbnb.git
   cd Airbnb
2. **Install Dependencies**
   npm install
3. **Environment Configuration**
   PORT=3000
   DB_URI=your_database_connection_string
   SESSION_SECRET=your_secret_key
   NODE_ENV=development
4. **Database Mangement**
   Database Setup
   
   For MongoDB: Ensure MongoDB is running
   
   For other databases: Run appropriate migration scripts
5. **Start Application**
   # Development mode
   npm run dev
   
   # Production mode
   npm start
6. **Access the App**
7. Open your browser and navigate to http://localhost:8080

## 🧠 Learning Outcomes

Through building this project, you will gain practical experience with:

- **RESTful routing design and implementation** - Creating logical API endpoints following REST principles
- **Middleware configuration and custom middleware creation** - Understanding the Express middleware pipeline
- **Database modeling with Mongoose (or your chosen ORM/ODM)** - Designing schemas and data relationships
- **Authentication strategies and session management** - Implementing secure user authentication
- **Server-side rendering with EJS templates** - Dynamic content rendering on the server
- **Form validation and error handling** - Ensuring data integrity and user-friendly error messages
- **File uploads and storage management** - Handling multipart form data and asset storage
- **Responsive frontend design principles** - Creating mobile-first, adaptive layouts

## 🔮 Future Enhancements

### ⚡ Short Term
- **Advanced search and filtering functionality** - Add filters for price range, location, amenities
- **Image upload and cloud storage integration** - Implement Cloudinary or AWS S3 for image management
- **User reviews and rating system** - Allow users to leave feedback on listings
- **Booking and reservation system** - Add calendar functionality and booking management

### 🚀 Long Term
- **Real-time messaging between users** - Implement WebSockets for host-guest communication
- **Payment integration with Stripe/PayPal** - Secure payment processing for bookings
- **Mobile application with React Native** - Cross-platform mobile app development
- **Recommendation engine** - Algorithmic suggestions based on user preferences
- **Admin dashboard for analytics** - Data visualization and management tools

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- Inspired by Airbnb's design and functionality
- Built as part of a learning journey in full-stack development
- Thanks to the open-source community for invaluable resources and tools

---

<div align="center">

**Happy Coding!** 🎉

</div>
