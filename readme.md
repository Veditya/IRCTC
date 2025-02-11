# IRCTC Backend

## Project Overview

Built using **Node.js, Express, and PostgreSQL**, this system supports user authentication, train management, and seat booking.

## Tech Stack

- **Node.js**
- **Express.js**
- **PostgreSQL**
- **Sequelite ORM**

## Key Features

- **User Authentication**: Secure login and registration.
- **Train Management**: Admins can add and update train details.
- **Seat Booking**: Users can check availability and book seats.

## Getting Started

### Prerequisites

- Install **Node.js** and **PostgreSQL**

### Installation

**1. Install Dependencies**

```bash
npm i
```

**3. Set Up Environment Variables**
Create a `.env` file with the following:

```bash
PORT=5000
DB_HOST=your_host
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=your_database
JWT_SECRET=your_secret_key
```

**4. Database Setup**

```bash
npm run setdb
```

**5. Start the Server**

```bash
npm start
```

Server runs at `http://localhost:5000`

## API Endpoints

### Public Endpoints

- **POST /signup** - Register a new user
- **POST /login** - User login

### User Endpoints

- **GET /trains/availability** - Fetch available trains
- **POST /book** - Book a train ticket
- **GET /booking/details** - Get booking details

### Admin Endpoints

- **POST /admin/train** - Add a new train
- **PATCH /admin/train/:trainId** - Update train seats
