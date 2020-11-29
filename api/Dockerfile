FROM node:15.3.0-alpine3.10

WORKDIR /app
COPY index.js /app
COPY package.json /app
RUN npm install

EXPOSE 3000
ENTRYPOINT ["node", "index.js"]
