FROM node:12-alpine
WORKDIR /toolbox
COPY . .
RUN yarn install --production
EXPOSE 4040
CMD ["node", "server.js"]