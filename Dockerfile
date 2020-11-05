FROM node:14.15.0-alpine3.12

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package.json /src/app/package.json

RUN yarn

COPY . /src/app

EXPOSE 3333

CMD [ "yarn", "dev" ]

