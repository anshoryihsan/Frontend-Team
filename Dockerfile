FROM nginx:stable


COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /var/www
COPY ./build .

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]