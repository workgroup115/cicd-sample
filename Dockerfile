FROM node:20.11.0
EXPOSE 3000
WORKDIR /usr/src/app
COPY package.json package-lock.json* ./ 
RUN npm install && npm cache clean --force
COPY . .
CMD [ "node", "index.js" ]
