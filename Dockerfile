# =========================
# Build frontend
# =========================

FROM node:22-alpine AS builder


WORKDIR /app


COPY frontend/package*.json ./


RUN npm ci


COPY frontend .


ARG VITE_EMAIL_SERVICE_ID
ARG VITE_EMAIL_TEMPLATE_ID
ARG VITE_EMAIL_PUBLIC_KEY
ARG VITE_TURNSTILE_SITE_KEY


ENV VITE_EMAIL_SERVICE_ID=$VITE_EMAIL_SERVICE_ID
ENV VITE_EMAIL_TEMPLATE_ID=$VITE_EMAIL_TEMPLATE_ID
ENV VITE_EMAIL_PUBLIC_KEY=$VITE_EMAIL_PUBLIC_KEY
ENV VITE_TURNSTILE_SITE_KEY=$VITE_TURNSTILE_SITE_KEY


RUN npm run build





# =========================
# Nginx production
# =========================

FROM nginx:alpine


COPY nginx.conf /etc/nginx/conf.d/default.conf


COPY --from=builder /app/dist /usr/share/nginx/html


EXPOSE 80


CMD ["nginx","-g","daemon off;"]