# create your custom drupal image here, based of official drupal
FROM node:latest

RUN apt-get update
#RUN apt-get update && apt-get install sudo \
#    && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

RUN npm install express --save
RUN npm install -g nodemon

COPY . .

EXPOSE 8080

CMD ["npm", "start"]
