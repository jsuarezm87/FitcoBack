FROM node:18

# Crear el directorio
WORKDIR /usr/src/app

# Copiar los archivos y dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código
COPY . .

# Establecer la variable de entorno por defecto para el puerto
ENV PORT=3000

# Exponer el puerto de la variable de entorno
EXPOSE ${PORT}

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
