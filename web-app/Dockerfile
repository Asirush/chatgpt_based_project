FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Bundle app source
COPY . .

# Install app dependencies
RUN npm install

EXPOSE 3000

ENTRYPOINT ["node", "app.js"]
