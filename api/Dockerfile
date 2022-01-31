FROM node:16.13.1-alpine

RUN mkdir -p /var/www/api.laraplay.com
WORKDIR /var/www/api.laraplay.com

COPY . /var/www/api.laraplay.com/
RUN npm install

COPY . .
EXPOSE 5000


CMD ["npm", "start"]
