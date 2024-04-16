FROM python:3.10.12-alpine

WORKDIR /app/backend

COPY study/requirements.txt /app/backend/

RUN apk add --virtual .build-deps --no-cache gcc python3-dev musl-dev && \
        pip install --no-cache-dir -r requirements.txt && \
        apk --purge del .build-deps

COPY . /app/backend/

CMD python manage.py makemigrations; python manage.py migrate; python manage.py runserver 0.0.0.0:8000;
