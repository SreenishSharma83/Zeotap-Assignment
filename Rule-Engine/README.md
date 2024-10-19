# Rule Engine with AST

## Overview

This application is a simple rule engine built using the MERN stack (MongoDB, Express, React, Node.js). It allows users to define and evaluate eligibility rules based on various attributes such as age, department, income, and experience. The system utilizes an Abstract Syntax Tree (AST) to represent conditional rules, enabling dynamic creation, combination, and modification of these rules.

## Features

- **Create Rules**: Define rules using a simple string syntax.
- **Combine Rules**: Combine multiple rules into a single AST for efficient evaluation.
- **Evaluate Rules**: Check if user attributes meet the specified rules.
- **Robust Error Handling**: Validate rule strings and attribute formats.
- **User-Friendly UI**: A simple and intuitive user interface for creating and evaluating rules.
- **Responsive Design**: The application is optimized for different screen sizes.

## Technologies Used

- **Frontend**: React, Axios, Bootstrap
- **Backend**: Node.js, Express, Mongoose
- **Database**: MongoDB
- **Development Tools**: npm, nodemon

## File Structure

```
rule-engine/
│
├── client/                    # Frontend application
│   ├── public/                # Public files
│   ├── src/                   # Source files
│   │   ├── components/        # React components
│   │   ├── services/          # API service functions
│   │   ├── App.js             # Main application component
│   │   └── index.js           # Entry point for React app
│   └── package.json           # Client dependencies
│
├── server/                    # Backend application
│   ├── models/                # Mongoose models
│   ├── routes/                # Express routes
│   ├── controllers/           # Controller functions
│   ├── utils/                 # Utility functions
│   ├── config/                # Configuration files
│   ├── .env                   # Environment variables
│   ├── server.js              # Entry point for the server
│   └── package.json           # Server dependencies
│
├── README.md                  # Project documentation
└── .gitignore                 # Ignored files
```

## Installation

### Prerequisites

- Node.js and npm installed on your machine.
- MongoDB installed locally or a MongoDB Atlas account.

### Clone the Repository

```bash
git clone https://github.com/sreenishsharma83/Zeotap-Assignment.git
cd Zeotap-Assignment/rule-engine
```

### Setup the Backend

1. Navigate to the server directory:

    ```bash
    cd server
    ```

2. Install server dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `server` directory and configure the following:

    ```plaintext
    MONGODB_URI=mongodb://localhost:27017/ruleEngine
    PORT=5000
    ```

4. Start the server:

    ```bash
    npm start
    ```

### Setup the Frontend

1. Navigate to the client directory:

    ```bash
    cd ../client
    ```

2. Install client dependencies:

    ```bash
    npm install
    ```

3. Start the client application:

    ```bash
    npm start
    ```

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Use the UI to create rules using the defined syntax.
3. Evaluate rules against user attribute data.
4. Explore the combined rules and see results based on the data provided.

## Testing

- Ensure that all endpoints and functionalities are tested thoroughly.
- Add test cases as needed to validate the accuracy of the rule evaluations.

## Acknowledgments

- Special thanks to the contributors and resources that made this project possible.
