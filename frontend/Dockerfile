FROM node:lts-stretch-slim

# Optionally set a maintainer name to let people know who made this image.
MAINTAINER Ankit Arora <ankit.j.arora@gmail.com>

ENV INSTALL_PATH /frontend
RUN mkdir -p $INSTALL_PATH

WORKDIR $INSTALL_PATH

COPY package.json package.json

RUN npm install

COPY . /frontend/

CMD npm start

EXPOSE 3000