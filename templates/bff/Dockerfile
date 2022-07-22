FROM node:16.16.0-alpine3.16

# Set working directory
RUN mkdir -p /var/www/app
WORKDIR /var/www/app

COPY . ./var/www/app
COPY package.json ./ package-lock.json ./
COPY tsconfig.json tsconfig.build.json /var/www/app/
COPY .nvmrc .

RUN npm install
COPY . .
RUN npm run build

# Permissions
RUN adduser --disabled-password appuser
RUN chown -R appuser:appuser /var/www/app
USER appuser

# Cache
RUN npm run cache clean --force

EXPOSE 3000

CMD ["npm", "run", "start:prod"]
