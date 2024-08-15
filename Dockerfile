ARG NODE_VERSION=20.15.1

FROM node:${NODE_VERSION}-bullseye-slim

WORKDIR /app
COPY ./package.json ./
RUN npm i
COPY ./ ./
EXPOSE 3000
CMD ["npm", "run", "dev"]