FROM node:12-alpine
WORKDIR /srv
COPY . .
RUN yarn install --production
RUN cd src
EXPOSE 3000
CMD [ "node", "index.js" ]