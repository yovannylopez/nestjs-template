FROM node:16.16.0-alpine3.16

WORKDIR /usr/

COPY package.json ./
COPY package-lock.json ./
COPY .npmrc .
COPY .nvmrc .

RUN npm install
COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
