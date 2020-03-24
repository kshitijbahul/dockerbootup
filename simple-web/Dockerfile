#specify base image
FROM node:alpine

#setup working dir and copy files 
WORKDIR /sampleweb
#Remove this to have better files COPY ./ ./

COPY ./package.json ./
#specify commands for dependencies
RUN npm install

COPY ./ ./
#specify commands for startup - default command
CMD ["npm","start"]

