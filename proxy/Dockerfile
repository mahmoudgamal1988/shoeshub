FROM nginxinc/nginx-unprivileged:1-alpine
LABEL maintainer="Mahmoud Gamal"

COPY ./default.conf.tpl /etc/nginx/default.conf.tpl
COPY ./uwsgi_params /etc/nginx/uwsgi_params
COPY ./run.sh /run.sh
COPY /../elwedad /elwedad

ENV LISTEN_PORT=8000
ENV APP_HOST=elwedad
ENV APP_PORT=9000



USER root

RUN mkdir -p /vol/static && \
    chmod 755 /vol/static && \
    chown -R nginx:nginx /vol/static && \
    chmod 755  /elwedad && \
    chown -R nginx:nginx /elwedad && \
    touch /etc/nginx/conf.d/default.conf && \
    chown nginx:nginx /etc/nginx/conf.d/default.conf && \
    chmod +x /run.sh

VOLUME /vol/static

USER nginx

CMD ["/run.sh"]