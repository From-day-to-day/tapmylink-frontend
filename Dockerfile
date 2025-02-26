FROM node:20-alpine AS builder

ARG VITE_BACKEND_URL
ARG VITE_FEEDBACK_EMAIL

WORKDIR /app
COPY package*.json ./
RUN npm i --ignore-scripts
COPY . .
RUN npm run build

FROM nginx:alpine
ARG PROXY_PASS_URL
ENV PROXY_PASS_URL=${PROXY_PASS_URL}

COPY --from=0 /app/dist /usr/share/nginx/html
COPY nginx.conf.template /etc/nginx/nginx.conf.template

RUN envsubst '${PROXY_PASS_URL}' < /etc/nginx/nginx.conf.template > /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]