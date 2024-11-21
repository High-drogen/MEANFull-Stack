# create your custom drupal image here, based of official drupal

FROM node:12

RUN sed -i 's|http://deb.debian.org/debian|http://archive.debian.org/debian|g' /etc/apt/sources.list && \
    sed -i '/stretch-updates/d' /etc/apt/sources.list && \
    sed -i '/security.debian.org/d' /etc/apt/sources.list && \
    echo 'Acquire::Check-Valid-Until "false";' > /etc/apt/apt.conf.d/99no-check-valid-until && \
    apt-get update

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

#RUN npm cache verify

RUN npm install -g @angular/cli@8.3.29

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
