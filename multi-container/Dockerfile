FROM node:alpine

WORKDIR /visistsapp

COPY package.json .

RUN npm install

COPY . .

CMD ["npm","start"]

