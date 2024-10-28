# base image nginx for serving content
FROM nginx

WORKDIR /usr/share/nginx/html

#remove default conf files of nginx
RUN rm /etc/nginx/nginx.conf

#copy nginx.conf to container
COPY nginx.conf /etc/nginx/

#copy build to container
COPY storybook-static .
# COPY .well-known .well-known

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]
