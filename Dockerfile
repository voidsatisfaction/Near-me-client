FROM node:8.9.1

ADD . /go/src/near_me_client
WORKDIR /go/src/near_me_client
RUN npm i

CMD npm start

EXPOSE 13000
