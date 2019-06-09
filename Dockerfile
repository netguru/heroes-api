FROM mhart/alpine-node

ARG LOCATION="/usr/netguru"

WORKDIR ${LOCATION}

RUN mkdir -p ${LOCATION}

COPY package.json ${LOCATION}

RUN npm i

COPY . ${LOCATION}

RUN npm run deploy

CMD ["npm", "run", "start:${VERSION}"]

EXPOSE 3000
