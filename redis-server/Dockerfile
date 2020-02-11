# Use an existing docker Image as a base
FROM alpine
#Download and install a dependency
RUN apk add --update redis
#Tell the imagewhat to do when 
#if starts as a Container
CMD [ "redis-server" ]