FROM node:14

WORKDIR /flog/
COPY . /flog

RUN yarn install
RUN yarn build:ssr
CMD yarn start