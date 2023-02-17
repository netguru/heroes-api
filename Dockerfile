FROM node:14-alpine3.16 AS development

WORKDIR /app

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

RUN npm install

EXPOSE 3000