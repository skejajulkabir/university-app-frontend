FROM node:alpine

WORKDIR /usr/src/app

COPY . . 

RUN npm install

EXPOSE 3000

CMD ["npm" , "run" , "dev"]


#  docker build -t univ-app-frontend .


# docker run --name frntnd -p 5173:5173 f67ee60df7375f53a622d02f35d3d7330a567853ce76ae6049d0266aa9b6d72c