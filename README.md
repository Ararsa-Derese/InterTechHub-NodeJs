# Simple Node.js Web Server

This project is a basic Node.js web server built using the Express framework. It provides three routes: `/name`, `/hobby`, and `/dream`, each responding with static data.

## Features

- **GET /name**: Returns your full name as a plain text message.
- **GET /hobby**: Returns your favorite hobby as a JSON object.
- **GET /dream**: Returns a motivational message about your dream as plain text.

## Setup Instructions

1. **Clone the Repository**
    ```bash
    git clone git@github.com:Ararsa-Derese/InterTechHub-NodeJs.git
    ```

2. **Navigate to the Project Directory**
    ```bash
    cd InterTechHub-NodeJs
    ```

3. **Install Dependencies**
    ```bash
    npm install
    ```

4. **Configure Environment Variables**
    Create a `.env` file in the root directory and add the following:
    ```env
    PORT=3000
    ```

5. **Start the Server**
    ```bash
    npm start
    ```
    The server will be running on [http://localhost:3000](http://localhost:3000).

## Project Structure

```bash
/project-root
│
├── /src
│   ├── /config          # Configuration settings
│   ├── /controllers     # Request handlers for each route
│   ├── /routes          # Route definitions
│   ├── app.js           # Main application setup
│   └── server.js        # Server setup and listening
│
├── .env                 # Environment variables
├── .gitignore           # Files and folders to ignore in Git
├── package.json         # Project dependencies and scripts
└── README.md            # Project documentation
```

## Routes Overview

- **GET /name**: Returns your full name (e.g., "John Doe").
- **GET /hobby**: Returns your favorite hobby as JSON (e.g., `{ "hobby": "Playing guitar" }`).
- **GET /dream**: Returns a motivational message (e.g., "Never give up on your dreams!").
