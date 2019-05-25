# Use starter image
FROM node:11

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json /usr/src/app/
RUN yarn

# Bundle app source
COPY . /usr/src/app

# Expose port
EXPOSE 8081

# Default command to run
CMD ["yarn", "start"]