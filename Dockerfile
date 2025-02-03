# Use a Node.js base image (choose a suitable version)
FROM node:22.9.0 

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

RUN npx prisma generate

# Expose the port your application will run on
EXPOSE 8080 

# Define the command to start your application
CMD ["npm", "start"]