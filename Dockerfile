FROM node:8.11.3 as build-stage
WORKDIR /front
COPY package*.json ./
RUN apt-get update -y
RUN apt-get install libglu1 -y
RUN apt-get install libxi6 libgconf-2-4 -y
RUN apt-get install apt-utils -y
RUN npm install
COPY . .
RUN npm run build

# production stage
FROM nginx:1.19.3-alpine as production-stage
COPY --from=build-stage /front/dist /usr/share/nginx/html
COPY --from=build-stage /front/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
