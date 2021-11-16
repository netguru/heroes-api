FROM node:14-alpine AS development

WORKDIR /app

RUN npm install

EXPOSE 3000