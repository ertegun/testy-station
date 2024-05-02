# FROM node:19.3.0-alpine3.17
FROM node:22.0.0-alpine3.19
WORKDIR /nodeApps
COPY . . 
# COPY . package.json
RUN npm install
#RUN npm install -g live-server
#RUN npm run build
#EXPOSE 8080
#CMD ["live-server","dist"]
#CMD live-server --port=3050 dist/
CMD node cron.js