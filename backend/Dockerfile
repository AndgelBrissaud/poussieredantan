FROM node:22-alpine

WORKDIR /app


# Outils nécessaires pour compiler better-sqlite3
RUN apk add --no-cache \
    python3 \
    make \
    g++


COPY package*.json ./


RUN npm install --omit=dev


COPY . .


EXPOSE 3000


CMD ["node", "src/app.js"]