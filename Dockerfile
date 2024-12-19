# Establece la imagen base
FROM node:20-alpine AS builder

# Configura el directorio de trabajo en el contenedor
WORKDIR /app

# Copia el archivo de dependencias y las instala
COPY package*.json ./

RUN npm ci -f --only=production && npm cache clean --force

# Copia el código fuente y construye el proyecto
COPY . .
RUN npm run build

# Configura el entorno de producción
FROM node:20-alpine

ARG DATABASE_URL
ARG JWT_SECRET

ENV DATABASE_URL=$DATABASE_URL
ENV JWT_SECRET=$JWT_SECRET

WORKDIR /app

RUN apk add --no-cache openssl

COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/public ./public

EXPOSE 3000

# Comando para correr la aplicación
CMD ["npm", "start"]