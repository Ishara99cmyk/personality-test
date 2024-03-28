# Stage 1: Build the React frontend
FROM node:latest as frontend-builder

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Build the frontend
RUN npm run build

# Stage 2: Serve the frontend with a lightweight server
FROM node:alpine as server

WORKDIR /app

# Install a lightweight HTTP server
RUN npm install -g serve

# Copy the built frontend from the previous stage
COPY --from=frontend-builder /app/build ./build

# Expose the port that the server will run on
EXPOSE 3000

# Serve the frontend
CMD ["serve", "-s", "build"]

# Stage 3: Setup the backend
FROM node:latest as backend-builder

WORKDIR /app/backend

# Copy the backend package.json and package-lock.json
COPY backend/package.json backend/package-lock.json ./

# Install backend dependencies
RUN npm install

# Copy the rest of the backend code
COPY backend .

# Expose the port that the backend runs on
EXPOSE 5000

# Start the backend server
CMD ["npm", "start"]
