FROM node:16.13.1-alpine

RUN mkdir -p /var/www/administrator.laraplay.com
WORKDIR /var/www/administrator.laraplay.com

COPY . /var/www/administrator.laraplay.com/
RUN npm install

RUN npm run build
COPY . .
EXPOSE 3001

ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=3001


CMD ["npm", "start"]
