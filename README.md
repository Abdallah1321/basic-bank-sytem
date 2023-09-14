# MERN Stack Basic Bank System

Welcome to the MERN Stack Basic Bank System repository! This project was created as part of The Sparks Foundation internship, and it allows users to manage bank accounts, make transactions, and view transaction history. You can access the website from this link: https://mazebanksystem.netlify.app/

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

1. **Home Page:**
   - Provides an overview of the application.
   - Access to navigate to the Users page and Transaction History page.

2. **Users Page:**
   - Displays a list of all users with their name, email, and balance.
   - Allows users to make transactions by selecting a sender and receiver, and specifying the transaction amount.
   - Supports user deletion functionality.

3. **Transaction History Page:**
   - Shows a history of all transactions, including sender, receiver, and transaction amount.

## Technologies Used

- **MERN Stack:**
  - MongoDB for database
  - Express.js for the server
  - React for the frontend
  - Node.js for server-side scripting

- **Additional Technologies:**
  - Axios for API requests
  - React Bootstrap for styling
  - React Router for client-side routing

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/Abdallah1321/basic-bank-system.git
    ```

2. Navigate to the project directory:

```shell
cd basic-bank-system
```

3. Install the dependencies for both the server and client:

```shell
cd client && npm install
cd ../api && npm install
```

4. Set up your MongoDB database. Update the .env with your MongoDB connection string.

5. Start the server and client:

```shell
cd client && npm start
cd ../api && npm start
```

6. Access the application in your browser at http://localhost:3000.

## Project Structure
The project structure is organized as follows:

- client: React frontend application.
- server: Express.js backend server.

## Usage

Visit the home page to get an overview of the application.
Navigate to the Users page to view user information, make transactions, and delete users.
Go to the Transaction History page to view the transaction history.

## Screenshots

![image](https://github.com/Abdallah1321/basic-bank-sytem/assets/78796081/911f3631-d272-4b72-bd9a-714f40e3fca9)
![image](https://github.com/Abdallah1321/basic-bank-sytem/assets/78796081/24101038-5ed9-4882-921c-b3a187fbae60)
![image](https://github.com/Abdallah1321/basic-bank-sytem/assets/78796081/426c3575-2256-46fb-a207-22caa4e89bb3)
![image](https://github.com/Abdallah1321/basic-bank-sytem/assets/78796081/e98be4c5-cc1e-42cb-87b5-847fece73893)

## Contributing

Feel free to contribute to this project by opening issues or creating pull requests. We welcome your suggestions and improvements.
