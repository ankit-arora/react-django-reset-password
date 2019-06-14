FROM python:3.6.8-jessie
MAINTAINER Ankit Arora <ankit.j.arora@gmail.com>
RUN mkdir /code
WORKDIR /code
COPY requirements.txt /code
RUN pip install -r requirements.txt
COPY . /code/
ENTRYPOINT ./entrypoint-dev.sh
EXPOSE 8000