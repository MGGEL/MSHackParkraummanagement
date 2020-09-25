FROM node:lts

WORKDIR /app
RUN mkdir /app/assets && mkdir /app/public  && mkdir /app/public/build

COPY ./package.json /app

RUN npm install

COPY ./webpack.config.js /app
VOLUME /app/assets
CMD ["npm", "run", "watch"]
