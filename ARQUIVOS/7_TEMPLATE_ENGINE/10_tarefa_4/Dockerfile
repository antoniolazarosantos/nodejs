FROM node:18.12.1

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node","index.js"]

# docker build -t <nome da imagem> . ( ou local onde se encontra o Dokerfile)
#Exemplo: podman build -t tarefa_04 .
# podman run -d -p < porta fora do docker>:<porta dentro do docker> --name <nome do container> <hash gerado>
#Exemplo : podman run -d -p 3000:3000 --name tarefa_04 tarefa_04