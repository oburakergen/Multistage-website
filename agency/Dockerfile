FROM node:16.13.1-alpine

RUN mkdir -p /var/www/laraplay.com
WORKDIR /var/www/laraplay.com

COPY . /var/www/laraplay.com/
RUN npm install

RUN npm run build && npm run generate
COPY . .
EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=3000


CMD ["npm", "start"]
