FROM python:3.9-alpine3.13
LABEL maintainer="Mahmoud Gamal"

# recommended to allow python to send the logs to the terminal instantly
ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /tmp/requirements.txt
COPY ./scripts /scripts
COPY ./elwedad /elwedad
WORKDIR /elwedad
EXPOSE 8000

ARG DEV=false
RUN python -m venv /py && \
    /py/bin/pip install --upgrade pip && \
    apk add --update --no-cache postgresql-client && \
    apk add --update --no-cache --virtual .tmp-build-deps \
    build-base postgresql-dev musl-dev zlib zlib-dev linux-headers && \
    /py/bin/pip install -r /tmp/requirements.txt && \
    rm -rf /tmp && \
    apk del .tmp-build-deps && \
    apk add --no-cache shadow && \
    adduser -u 1000 \
    --disabled-password \
    --no-create-home \
    django-user && \
    usermod -aG 1000 django-user && \
    mkdir -p /vol/web/media && \
    mkdir -p /vol/web/static && \
    chown -R django-user:django-user /vol && \
    chmod -R 755 /vol && \
    chmod -R +x /scripts && \
    chown -R django-user:django-user /elwedad && \
    chmod -R 777 /elwedad && \
    /py/bin/python manage.py collectstatic --noinput 

# && \
# cp -r /elwedad/static /vol/web


ENV PATH="/scripts:/py/bin:$PATH"
USER django-user

CMD ["run.sh"]