FROM node:19-alpine3.16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD node app.js

EXPOSE 3000