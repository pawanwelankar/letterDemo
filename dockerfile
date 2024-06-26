FROM node:latest
WORKDIR /user/app  
COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]
