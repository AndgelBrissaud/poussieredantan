# Etape 1 : build React
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

ARG VITE_EMAIL_SERVICE_ID
ARG VITE_EMAIL_TEMPLATE_ID
ARG VITE_EMAIL_PUBLIC_KEY
ARG VITE_TURNSTILE_SITE_KEY

ENV VITE_EMAIL_SERVICE_ID=$VITE_EMAIL_SERVICE_ID
ENV VITE_EMAIL_TEMPLATE_ID=$VITE_EMAIL_TEMPLATE_ID
ENV VITE_EMAIL_PUBLIC_KEY=$VITE_EMAIL_PUBLIC_KEY
ENV VITE_TURNSTILE_SITE_KEY=$VITE_TURNSTILE_SITE_KEY

RUN npm run build


# Etape 2 : serveur web
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]