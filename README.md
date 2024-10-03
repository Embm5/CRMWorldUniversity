# CRMWORLDUNIVERSITY

## Description
 The Academic CRM is a web-based platform designed to enhance the relationship management between the university and its students, faculty, and administration. It streamlines academic processes, improving communication and tracking throughout students' educational journeys.

 ## Table of Contents

- [Description](#description)
- [Dates](#dates)
- [Purpose](#purpose)
- [Functionalities](#functionalities)
- [Instructions for Use](#instructions-for-use)
  - [Requirements](#requirements)
  - [Installing](#installing)
  - [Database Creation](#database-creation)
  - [Sequelize synchronization](#Sequelize-synchronization)
  - [Start Project](#start-project)
- [Construction details](#construction-details)
  - [Technologies Used](#technologies-used)
- [Resources used](#resources-used)
- [Contributors](#contributors)
- [Conctact](#conctact)


---


## Dates

- Analysis:august 22, 2024
- Design:august 24, 2024
- Construction: september 1, 2024

## Purpose

This project was developed in an academic context as a project for the software construction course at Politécnico Colombiano Jaime Isaza Cadavid University

## Functionalities

- Log in
- Create student
- Create teacher 
- Create staff
- Create assignment
- Create course 
- View schedule teacher 


# Instructions for Use

If you want to run this repository in your local machine, you must follow the next steps

## Requirements

- Version **18.20.1** or higher of [Node.Js](https://nodejs.org/en) version is required.
- This repository uses [PostgreSQL](https://www.postgresql.org/) as Database engine. for the installation we use the default DBMS of Postgres **PgAdmin4**
- The project is developed using Angular version 18.0.0, so it is necessary to have angular/cli installed.
  you can install it using npm by executing the following command in some terminal:
  `npm install @angular/cli@18.0.0 -g`

## Installing

In case you have git installed, to clone the repository you can run:

`git clone https://github.com/Embm5/CRMWorldUniversity`

otherwise, you can download the zip file of the project.

---

### Database Creation

First connect with postgres user or another user with superuser privileges, then in Login/Group roles, create new Login/Group

![Create User](https://i.imgur.com/tYgl4Im.png)

the user name is "CRMWU", in Definition put the password "1234" and configure the privileges.git

![Admin User Name](https://i.imgur.com/ROUO91u.png)
![Admin User Password](https://i.imgur.com/u8i1T20.png)

![User Privileges](https://i.imgur.com/CNa94tW.png)

once the user has been created, proceed to register a new server with the name "CRMWU_DB"

![New server](https://i.imgur.com/xKZDaws.png)

![Register - Server](https://i.imgur.com/iPyKX5H.png)

In connection configure the hostname, in username place the user previously created and the password

![connection](https://i.imgur.com/vIESJEM.png)

Finally, proceed to create a new database with the name "CRMWU_DB" in the newly created server instance

![Create DB](https://i.imgur.com/3XpmS4t.png)

![Create DB CRMWU_DB](https://i.imgur.com/PCDGluY.png)

---

### Sequelize synchronization

As the project is running in a local environment, it is required to manually synchronize the data used in the system, such as users, categories, products, etc.
This action only needs to be performed once!

1. First, in a terminal, located in the project's main folder, execute `npm install` to install all dependencies.

2. Located in the project's main folder, execute `npm run sync` to synchronize all models in the database and insert all used data

---

### Starting the project

If you have already performed the steps above, you can initialize the project by running `npm start` located in the root folder of the project. You can then view the project with any browser by visiting
http://localhost:4200/

# Construction details
The system follows a three-tier architecture (frontend, backend, database).

- Frontend: A web application that directly interacts with users (students, admin, staff and teacher).
- Backend: A REST API that processes requests and manages business logic.
- Database: A relational database to store information about students, admin, staff and teacher.

## Technologies Used
Frontend
- **Framework**: Angular  

Backend
- **Language**: Node.js with Express

Database
- **Relational database**: PostgreSQL

---

# Resources used

- **Icons**: We used [Boxicons](https://boxicons.com/) for all the icons across the application. Boxicons is an easy-to-use, open-source library of icons perfect for modern web apps.

- **Backend**: The server is built with [Node.js](https://nodejs.org/) and [Express](https://expressjs.com/), providing a robust REST API.

- **Database**: We used [PostgreSQL](https://www.postgresql.org/) as our relational database. You can download and install it from the following links:
  - [PostgreSQL Download](https://www.postgresql.org/download/)
  - [PostgreSQL Documentation](https://www.postgresql.org/docs/)
  
- **Framework for Building Web Apps**: The project also includes [Angular](https://angular.io/) for building dynamic web applications. You can install Angular by following these links:
  - [Angular CLI Installation Guide](https://angular.io/cli)
  - [Angular Documentation](https://angular.io/docs)


# Contributors

- Emmanuel Bolivar Marin
- Maria Jose Arcila Cano
- David Correa Posada
- Manuela Diaz Arboleda 

# Contact

If required. You can contact us by email at:

- [emmanuel_bolivar82212@elpoli.edu.co](mailto:emmanuel_bolivar82212@elpoli.edu.co).
- [david_correa82212@elpoli.edu.co](mailto:david_correa82212@elpoli.edu.co)
- [manuela_diaz82212@elpoli.edu.co](mailto:manuela_diaz82212@elpoli.edu.co)
- [maria_arcila82221@elpoli.edu.co](mailto:maria_arcila82221@elpoli.edu.co)

