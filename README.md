# 🎬 Movie Ticket Booking System

A full-stack web-based application for browsing movies, selecting seats, and booking tickets. Built using **Angular 16**, **Node.js (TypeScript)**, **Express**, and **MySQL**.

---

## 📌 Objective

To create a seamless movie booking experience where users can:
- Browse available movies
- Select seats
- Book tickets
- View booking confirmations

---

## 🚀 Features

### 👤 User Roles
- No authentication required
- Browse movies & details
- Select seats
- Book tickets
- View booking confirmation

### 🎥 Movie & Showtime Management
- View movie listings and details
- Includes showtime, genre, duration, rating, and poster

### 🎟️ Ticket Booking
- Choose available seats
- Confirm bookings
- View booking details

---

## 🖥️ Frontend (Angular 16 + Angular Material)

### Components
| Component                  | Description                         |
|---------------------------|-------------------------------------|
| `MovieListComponent`      | Displays all movies                 |
| `MovieDetailsComponent`   | Shows movie details and showtimes   |
| `SeatSelectionComponent`  | Seat selection interface            |
| `BookingConfirmationComponent` | Shows booking confirmation    |

### Routes
| Path                   | Component                  | Purpose                    |
|------------------------|----------------------------|----------------------------|
| `/movies`              | MovieListComponent         | View all movies            |
| `/movies/:id`          | MovieDetailsComponent      | Movie details & showtimes  |
| `/movies/:id/book`     | SeatSelectionComponent     | Select seats for booking   |
| `/booking/:id`         | BookingConfirmationComponent | View booking details     |

---

## 🔧 Backend (Node.js + Express + TypeScript)

### ✅ REST API Endpoints

#### 🎬 Movies
| Method | Endpoint           | Description            |
|--------|--------------------|------------------------|
| GET    | `/api/movies`      | Fetch all movies       |
| GET    | `/api/movies/:id`  | Fetch movie by ID      |

#### 🎟️ Bookings
| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| POST   | `/api/bookings`      | Create a new booking     |
| GET    | `/api/bookings/:id`  | Get booking by ID        |
| GET    | `/api/bookings`      | Get all bookings         |

#### 💺 Seats
| Method | Endpoint           | Description                   |
|--------|--------------------|-------------------------------|
| GET    | `/api/seats/:id`   | Get seat availability by movie ID |

✅ **Total API Endpoints: 6**

---

## 🗃️ Database Schema (MySQL)

### 🎬 Movies Table
| Field      | Type         | Constraints                          |
|------------|--------------|--------------------------------------|
| id         | INT          | PRIMARY KEY, AUTO_INCREMENT          |
| title      | VARCHAR(255) | NOT NULL                             |
| genre      | VARCHAR(100) | NOT NULL                             |
| duration   | INT          | NOT NULL                             |
| rating     | DECIMAL(3,1) | NOT NULL                             |
| poster     | VARCHAR(255) | NOT NULL                             |
| showtime   | DATETIME     | NOT NULL                             |
| created_at | DATETIME     | DEFAULT CURRENT_TIMESTAMP            |

---

### 🎟️ Bookings Table
| Field          | Type          | Constraints                       |
|----------------|---------------|-----------------------------------|
| id             | INT           | PRIMARY KEY, AUTO_INCREMENT       |
| movie_id       | INT           | FOREIGN KEY (movies.id)           |
| selected_seats | JSON          | NOT NULL                          |
| total_price    | DECIMAL(10,2) | NOT NULL                          |
| booking_time   | DATETIME      | NOT NULL                          |
| showtime       | DATETIME      |                                   |

---

### 💺 Seats Table
| Field       | Type                       | Constraints                       |
|-------------|----------------------------|-----------------------------------|
| id          | INT                        | PRIMARY KEY, AUTO_INCREMENT       |
| movie_id    | INT                        | FOREIGN KEY (movies.id)           |
| seat_number | VARCHAR(10)                | NOT NULL                          |
| is_booked   | TINYINT(1)                 | DEFAULT 0                         |
| price       | DECIMAL(10,2)              | NOT NULL                          |
| booked_at   | TIMESTAMP                  | NULL                              |
| status      | ENUM('available','booked') | DEFAULT 'available'               |

---

## ⚙️ Validation Rules

- At least one seat must be selected.
- Total price must be greater than 0.
- Appropriate HTTP status codes and meaningful error messages.
- Real-time seat selection status.
- Booking success notifications.

---

## 🧪 Sample API Request & Response

### POST `/api/bookings`
```json
Request:
{
  "movie_id": 1,
  "selected_seats": ["A1", "A2"],
  "total_price": 500.00
}

Response:
{
  "id": 10,
  "movie_id": 1,
  "selected_seats": ["A1", "A2"],
  "total_price": 500.00,
  "booking_time": "2025-04-21T14:00:00"
}
