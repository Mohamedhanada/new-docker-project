# FROM node:16 as base
##########################################
FROM node:16
WORKDIR /app
COPY  package.json .

ARG NODE_ENV 
RUN if {"NODE_ENV"="development"};\
    then npm install;\
    else npm install --only=production;\
    fi

COPY . .
EXPOSE 4000
CMD [ "npm" , "run" , "start-dev" ]

############################################


# FROM base as production
# WORKDIR /app
# COPY  package.json .
# RUN npm install as --only = production
# COPY . .
# EXPOSE 4000
# CMD [ "npm" , "start" ]
