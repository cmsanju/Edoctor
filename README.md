# Outpatient Doctor Appointment System

## Project Overview
The **Outpatient Doctor Appointment System** is a web application designed to streamline the process of booking outpatient appointments with doctors. It allows patients to schedule appointments and manage healthcare tasks efficiently while providing doctors with tools to manage their availability and appointments.

## Features
- **User Authentication & Registration**
  - Secure registration and login.
  - Email verification and password reset.
  - Profile management.

- **Doctor Availability Management**
  - Set and manage doctor's available time slots.
  - Backend support for availability and patient requests.

- **Appointment Scheduling**
  - Select doctors, preferred time slots, and appointment reasons.
  - AI-based doctor suggestion for patients.
  - Backend integration for appointment data management.

- **Appointment Management**
  - Schedule, manage, and prevent conflicts in appointments.
  - Notification system via email/SMS.
  - Online payment for consultations.

- **Patient Information Management**
  - Secure storage of patient details.
  - Medicine details and recovery tracking with graphical reports.

- **Notification System**
  - Automated email/SMS notifications for appointment reminders and updates.

- **Admin Dashboard**
  - Manage users, doctors, and appointments.
  - Generate reports for daily/weekly/monthly admits and discharges.

## Technology Stack
- **Frontend**: Angular/ReactJS
- **Backend**: Spring Boot (Java)
- **Database**: MySQL
- **Testing**: JUnit, Mockito
- **Notifications**: Email/SMS integration
- **Payment**: Payment Gateway

## System Architecture

### Module 1: User Authentication & Registration
- Implement user registration and login.
- Form validation and Spring Boot security.
- Test cases using JUnit and Mockito.

### Module 2: Doctor Availability Management
- Design database schema for doctor availability.
- Interface for doctors to manage availability.
- Test cases for all services using JUnit and Mockito.

### Module 3: Appointment Scheduling
- Interface to schedule appointments.
- AI integration to suggest doctors to patients.
- Backend for storing appointment details.

### Module 4: Appointment Management
- Schedule appointments and avoid conflicts.
- Appointment status displayed in the dashboard with notifications.
- Payment gateway integration.

### Module 5: Patient Information Management
- Secure storage of patient data.
- Medicine details and graphical recovery reports.
- Online bill downloading and payment.

### Module 6: Notification System
- Email/SMS notification services for appointments.
- Backend functionality for managing notifications.

### Module 7: Admin Dashboard
- Manage doctors, patients, and appointments.
- Real-time reports on admits and discharges with graphs.

## Installation and Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/your-repo/outpatient-appointment-system.git
    ```
2. Install dependencies for the backend (Spring Boot):
    ```bash
    mvn install
    ```
3. Set up MySQL and configure database connection in `application.properties`.
4. Start the backend server:
    ```bash
    mvn spring-boot:run
    ```
5. Navigate to the frontend directory and install dependencies:
    ```bash
    npm install
    ```
6. Start the frontend server:
    ```bash
    npm start
    ```

## Screenshots

### Dashboard
![Screenshot 2024-10-12 170556](https://github.com/user-attachments/assets/7dafc8a6-f2f6-488c-84b3-e109492ebb3b)


### Admin Dashboard
![Screenshot 2024-10-12 170617](https://github.com/user-attachments/assets/fde49ce5-69e2-4d7f-b5ab-6741d87d81b0)



## Testing
- JUnit and Mockito are used for backend unit testing.
- Test cases cover services and integration with at least 80% code coverage.

## License
This project is licensed under the MIT License.

