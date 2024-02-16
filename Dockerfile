ARG NODE_VERSION=20.10.0
FROM node:${NODE_VERSION}-alpine
WORKDIR /app
COPY ./package.json ./
RUN npm i
COPY ./ ./
EXPOSE 3000
CMD ["npm", "run", "dev"]