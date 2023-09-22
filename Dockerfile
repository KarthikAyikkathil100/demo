FROM node:18 
WORKDIR /demo
COPY package.json ./
RUN npm install
COPY . ./
EXPOSE 4000
CMD ["node", "server.js"]
