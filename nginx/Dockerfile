FROM debian:buster

RUN apt-get -y update && apt-get -y install nginx openssl

RUN mkdir /etc/nginx/ssl
RUN openssl req -newkey rsa:2048 -nodes -keyout /etc/ssl/private/selfsigned.key \
	-out /etc/ssl/certs/selfsigned.crt \
	-subj "/C=US/ST=Utah/L=Lehi/O=Your Company, Inc./OU=IT/CN=yourdomain.com"

COPY ./conf/nginx.conf /etc/nginx/sites-enabled/default

RUN mkdir -p /run/nginx

EXPOSE 4343

CMD ["nginx", "-g", "daemon off;"]