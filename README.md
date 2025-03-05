# Innowise Internship Calculator

This project is a simple calculator application built using JavaScript, HTML, and CSS. It allows users to perform basic arithmetic operations and change the theme of the calculator interface.

## Project Structure

```
innowise-internship-calculator
  dist                # Compiled and bundled files
  src                 # Source files
    scripts           # JavaScript files
      calculator.js   # Contains the Calculator class
      index.js        # Initializes the Calculator
      theme-change.js # Handles theme change functionality
    index.html        # Main HTML document for the application
  .gitignore          # Specifies files to ignore in Git
  .prettierrc         # Prettier configuration file
  eslint.config.mjs   # ESLint configuration file
  package.json        # npm configuration file
  README.md           # Project documentation
  webpack.config.js   # Webpack configuration file
  Dockerfile          # Docker configuration file
  docker-compose.yml  # Docker Compose configuration file
```

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```
   git clone https://github.com/yavyachko/Innowise-internship
   cd innowise-internship-calculator
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Build the project:**
   ```
   npm run build
   ```

4. **Open the application:**
   Open `dist/index.html` in your web browser to view the calculator.

## Running the Development Server

To run the development server, follow these steps:

1. **Start the development server:**
   ```
   npm run dev
   ```

2. **Open the application:**
   Open `http://localhost:3000` in your web browser to view the calculator.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division.
- Ability to change the theme colors of the calculator.
- Responsive design for better usability on different devices.

## Running with Docker

To run the application using Docker, follow these steps:

1. **Build the Docker image:**
   ```
   docker-compose build
   ```

2. **Run the Docker container:**
   ```
   docker-compose up
   ```

3. **Open the application:**
   Open `http://localhost` in your web browser to view the calculator.

## License

This project is licensed under the ISC License.