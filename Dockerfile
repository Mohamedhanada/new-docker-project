FROM node:16 as base

##########################################

FROM base as development
WORKDIR /app
COPY  package.json .
RUN npm install as --only = development
COPY . .
EXPOSE 4000
CMD [ "npm" , "run" , "start-dev" ]

############################################


FROM base as production
WORKDIR /app
COPY  package.json .
RUN npm install as --only = production
COPY . .
EXPOSE 4000
CMD [ "npm" , "start" ]