FROM node:lts-alpine3.12

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package*.json /usr/src/app/
RUN yarn install

# Copying source files
COPY . /usr/src/app

# Building app
ENV NODE_ENV=production
RUN yarn run build
EXPOSE 3000

# Running the app
CMD ["yarn", "start"]