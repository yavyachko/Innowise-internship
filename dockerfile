# Stage 1: Build the application
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application using nginx
FROM nginx:alpine

# Copy the built files from the previous stage to the nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port nginx is running on
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]