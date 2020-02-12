# The base image is selected based set of collection that we need,
# Alpine is base image, not many package are available. In this we are using Node
FROM node:alpine

#Copied from Simple Web
#Now whhile running npm install, it is looking for package.json as the Json file is not available in the container.
# ./ ./ shall copy all the file from current folder to root directory in the container. but this is difficult to maintain, 
# there fore we create directory using WORKDIR and place things there
# Since there was change in node.js file, whole steps below is re ran, not from cache. 
# There we need to know how we can optimise therefore we are spliting the copy cmd. 
WORKDIR '/app'

COPY ./package.json ./
RUN npm install
COPY ./ ./

CMD ["npm","start"]
