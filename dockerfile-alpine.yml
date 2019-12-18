FROM node:alpine
MAINTAINER diegotony
COPY . /app
WORKDIR ./app
RUN npm config set registry http://registry.npmjs.org  \
     && npm install 
ENV PORT=3001
EXPOSE 3001
CMD ["npm","run","start"]