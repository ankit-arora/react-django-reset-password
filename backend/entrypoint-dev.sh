#!/bin/sh

./wait-for-it.sh -t 40 postgres:5432 &&
cd /code/usersapi &&
python manage.py migrate &&
python manage.py create-ankit-user &&
python manage.py runserver 0.0.0.0:8000