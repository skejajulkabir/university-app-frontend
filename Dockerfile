#? direct dist file marbo ebaR!

# # Stage 1: Create an empty stage (this stage is not used)
# FROM nginx:alpine AS empty

# Stage 2: Create the production image
FROM nginx:alpine

# Copy the dist folder from your local machine to the Nginx image
COPY ./dist /usr/share/nginx/html

# Expose the port that Nginx will listen on
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]











# Stage 1: Build the application
# FROM node:14 AS build

# # Set the working directory
# WORKDIR /app

# # Copy package.json and package-lock.json to the container
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Specify the latest version of Vite
# RUN npm install vite --save-dev

# # Copy the application source code to the container
# COPY . .

# # Build the application
# RUN npm run build

# # Stage 2: Create the production image
# FROM nginx:alpine

# # Copy the build artifacts from the previous stage
# COPY --from=build /app/dist /usr/share/nginx/html

# # Expose the port that Nginx will listen on
# EXPOSE 80

# # Start Nginx in the foreground
# CMD ["nginx", "-g", "daemon off;"]
























# FROM node:alpine

# WORKDIR /usr/src/app

# COPY package.json package-lock.json . 

# RUN npm install

# COPY . .

# EXPOSE 5173

# CMD ["npm" , "run" , "dev"]


#  docker build -t univ-app-frontend .


# docker run --name frntnd -p 5173:5173 2c59ae5c5bd71dbd08d8a0333b1de5be3e15925096c57d5e57e3bc448bc00bb3