# FROM node:20
# WORKDIR /app

# # Clean install for better caching
# COPY package*.json ./
# RUN npm clean-install

# COPY . .
# CMD ["npm", "start"]



# FROM node:20

# WORKDIR /app

# COPY package*.json ./

# # Надежнее: npm install
# RUN npm install

# COPY . .

# ENV HOST=0.0.0.0
# EXPOSE 3000

# CMD ["npm", "start"]



# Используем официальный Node.js образ
FROM node:20

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем зависимости
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь исходный код
COPY . .

# Открываем порт для dev-сервера React
EXPOSE 3000

# Запускаем React-приложение
CMD ["npm", "start"]
