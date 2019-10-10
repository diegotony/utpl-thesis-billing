FROM node:carbon-alpine 
MAINTAINER diegotony
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
ENTRYPOINT [ "npm" ]
CMD ["run","start"]