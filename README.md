# Meltdown Tracker

#### [Deployed Application](https://solo-mvp-meltdown-trackers.onrender.com)
Note: As of July 16th, 2023 the free 90-day deployment on Render has expired; I am currently working on re-deploying on Heroku.

## Table of Contents
<details>
<summary>Click here to expand</summary>

1. [Project Description](#project-description)
2. [Tech Stack](#tech-stack)
3. [Getting Started](#getting-started) 
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Deployment](#deployment)
4. [License](#license)

</details>
<br/>

## Product Description

The Meltdown Tracker is a tool for parents of children with autism and is designed to help them keep track of the frequency of their child’s meltdowns along with any environmental factors that were present at the time. It can be difficult to pinpoint what exactly might cause a child with autism to suffer a meltdown since every child is different and will react differently to environmental stimuli. This is especially true when the child is non-verbal and can't easily communicate what is upsetting them. It will likely take a long time and many meltdowns before the parent is finally able to identify the trigger accurately. This application aims to make that process quicker by giving parents an easy way to keep track of incidents and notice patterns.

## Tech Stack

| Tech | Use |
| ---------- | ----------- |
| ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) | RESTful API |
| ![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase) | User Authentication |
| ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) | Runtime Environment |
| ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) | Database |
| ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) | Client-side Responsive Rendering |
| ![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white) | Continuous Deployment |

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
* [Node](https://nodejs.org/en)
* [PostgreSQL](https://www.postgresql.org/)

### Installation

#### 1. Clone Repo to your Local Machine and Install Dependencies
- Clone the repo to your local machine using the following command:
```bash
  git clone insert-your-SSH-URL-here
```
- Install the necessary dependencies by running the following command in the root repository:
```bash
  npm install && cd client && npm install
```

#### 2. Initialize a PostgreSQL Database
- Run PostgreSQL in the terminal and create a new database with the following command:
```bash
  CREATE DATABASE <database_name_here>;
```
#### 3. Create .env files and .gitignore
- Create a new .env file in the root repository and copy-paste the data from .env.example
  - LOCAL_HOST= the host number (127.0.0.1 for "local host")
  - LOCAL_PORT= your postgreSQL port number (default is 5432)
  - LOCAL_USER= your postgreSQL username goes here
  - LOCAL_PASSWORD= your postgreSQL password goes here
  - LOCAL_DATABASE= the name you gave your postgreSQL database
  - DATABASE_URL= (see [Deployment](#deployment))
  - NODE_ENV= (see [Deployment](#deployment))

#### 4. Setup a Firebase Project for User Authentication
- Create a new [Firebase Project](https://firebase.google.com/) and register a new Web App to the project
- Enable "Add Authentication with Email/Password sign-in."
- In the Firebase Project Settings, click on General and scroll down until you see "// Your web app's Firebase configuration" and an object called firebaseConfig. Copy-paste the values from that object into your .env file in the client repository.

### Deployment
Currently working on switching deployment from Render to Heroku.

## License
MIT License

Copyright © Meltdown Tracker 2023

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
