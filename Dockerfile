FROM mhart/alpine-node

ARG location="/usr/netguru"

WORKDIR ${location}

RUN mkdir -p ${location}

COPY package.json ${location}

RUN npm i

COPY . ${location}

RUN npm run deploy

CMD ["npm", "run", "start:graphql"]

EXPOSE 3000
