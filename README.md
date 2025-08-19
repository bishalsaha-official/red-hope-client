# RED HOPE - A Blood Donation Application

A **user-friendly platform** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js) to facilitate **blood donation activities**. The application connects **donors** with those in need of blood, promoting a **seamless, efficient, and organized donation process**.

It includes **role-based access**, **donation request management**, **content management**, and a **searchable public directory** of donors.

---

## 🌟 Features

### General Features
- User-friendly interface with **responsive design** (Tailwind CSS & DaisyUI)
- **Home page** highlighting key features
- **Blog page** to read published articles
- **JWT authentication** for secure access
- **Role-based dashboards** for Admin, Donor, and Volunteer
- **Profile management** for users to update their details
- Integration with **Firebase authentication**
- **Searchable donor directory** based on blood group, district, and upazila

### Role-Based Features

#### Admin
- Access to **all features** including user, donation, and blog management
- Manage users: **block, delete, promote to Admin or Volunteer**
- Manage donation requests: **view, delete**
- Manage blog content: **create, publish**

#### Donor
- Register as a donor
- View and respond to **blood donation requests**
- Create, **update, or delete their own donation requests**
- Update **profile information**

#### Volunteer
- Create **donation requests**
- Post blog content (cannot publish)
- Limited dashboard access (cannot delete requests or publish blogs)

### Public Pages
- **Search Page**: Filter donors by blood group, district, and upazila
- **Donation Requests Page**: View all pending requests with details (recipient name, location, blood group, date, time)
- **Blog Page**: Read all published blogs

---

## 🛠 Technology Stack

**Frontend**
- React.js
- Tailwind CSS & DaisyUI (UI components)
- React Router DOM (routing)
- React Hook Form (form handling)
- React Icons
- React Sweet Alert (alerts)
- React Helmet
- Typewriter.js (dynamic text)
- TanStack Query (data fetching & caching)

**Backend**
- Node.js
- Express.js
- MongoDB

**Authentication & Security**
- Firebase Authentication
- JWT (JSON Web Tokens)

**Other Libraries & Tools**
- Axios (API calls)
- Moment.js (date & time formatting)
