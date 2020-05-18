FROM node:lts-alpine
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY wait-for.sh ./
COPY index.js ./
COPY public ./public
EXPOSE 8080
CMD [ "./wait-for.sh", "db:3306", "-t", "600", "--",  "npm", "start" ]