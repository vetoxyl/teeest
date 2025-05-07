# Stage 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Build the app
COPY . .
RUN npm run build

# Stage 2: Serve the app using nginx
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built React app from previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config if needed
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
