# Command Pattern Calculator

This project is a simple calculator application built using JavaScript, HTML, and CSS. It allows users to perform basic arithmetic operations, manage memory, and change the theme of the calculator interface.

## Task

[Technical specifications](https://drive.google.com/file/d/15jVnBPXaZrjs99KOUxp4TGq6Inau6xq_/view?usp=share_link)

## Project Structure

```
innowise-internship-calculator
   dist                     # Compiled and bundled files
   src                      # Source files
      scripts               # JavaScript files
         calculator.js      # Contains the Calculator class
         index.js           # Initializes the Calculator
         utils              # Utility scripts
            theme-change.js # Handles theme change functionality
         commands           # Command pattern implementation
            invoker.js      # Invoker class
            commands        # Command classes
               append-number-command.js  # Appends a number
               append-point-command.js   # Appends a decimal point
               change-sign-command.js # Changes the sign of a number
               clear-command.js          # Clears the calculator
               compute-command.js        # Performs a computation
               memory-add-command.js     # Adds to memory
               memory-clear-command.js   # Clears memory
               memory-minus-command.js   # Subtracts from memory
               memory-read-command.js    # Reads from memory
               operation-command.js      # Handles operations
               index.js                  # Exports all commands
      index.html        # Main HTML document for the application
      index.css         # Global styles
   .dockerignore        # Specifies files to ignore in Docker
   .gitignore           # Specifies files to ignore in Git
   .prettierrc          # Prettier configuration file
   eslint.config.mjs    # ESLint configuration file
   package.json         # npm configuration file
   README.md            # Project documentation
   webpack.config.js    # Webpack configuration file
   Dockerfile           # Docker configuration file
   docker-compose.yml   # Docker Compose configuration file
   Makefile             # Makefile for project tasks
```

## How to Run This Calculator App

### Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
    ```
    git clone https://github.com/yavyachko/Innowise-internship
    cd innowise-internship-calculator
    ```

2. **Install dependencies:**
    ```
    make install
    ```

3. **Build the project:**
    ```
    make build
    ```

4. **Open the application:**
    Open `dist/index.html` in your web browser to view the calculator.

### Running the Development Server

To run the development server, follow these steps:

1. **Start the development server:**
    ```
    make dev
    ```

2. **Open the application:**
    Open `http://localhost:3000` in your web browser to view the calculator.

### Running with Docker

To run the application using Docker, follow these steps:

1. **Build the Docker image:**
    ```
    make docker-build
    ```

2. **Run the Docker container:**
    ```
    make docker-up
    ```

3. **Open the application:**
    Open `http://localhost` in your web browser to view the calculator.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Advanced operations: square, cube, nth root, factorial, and more.
- Memory management: add, subtract, clear, and read memory.
- Ability to change the theme colors of the calculator.
- Responsive design for better usability on different devices.

## License

This project is licensed under the ISC License.
