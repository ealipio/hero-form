FROM node:12-alpine
WORKDIR /srv
COPY . .
RUN yarn install --production
RUN cd src
CMD [ "node", "index.js" ]