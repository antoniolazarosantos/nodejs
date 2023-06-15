FROM node:latest

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node","index.js"]

# podman run -d -p 3000:3000 --name <nome do container> <hash gerado>