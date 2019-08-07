# create your custom drupal image here, based of official drupal
FROM node:latest

RUN apt-get update 
#&& apt-get install -y sudo \
#    && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

#RUN npm cache verify

RUN npm install -g @angular/cli

#COPY . .
#RUN pwd

#COPY ./../testAngPrj/testAngularDockerProject/package*.json ./
COPY package*.json ./
#COPY . /usr/src/app

RUN npm install

COPY . .

EXPOSE 4200

#CMD ng serve --host 0.0.0.0

CMD ["npm", "start"]
