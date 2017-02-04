FROM node:latest

RUN mkdir -p /usr/packages/
RUN mkdir -p /usr/src/app/
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install --global rimraf \
    && npm run clean \
    && npm install --global webpack webpack-dev-server typescript@beta \
    && npm install \
    && npm run prebuild:prod && npm run build:prod

#RUN git clone https://github.com/eliaskioni/ng2-admin.git /var/www \
#    && cd /var/www \
#    && npm install --global rimraf \
#    && npm run clean \
#    && npm install --global webpack webpack-dev-server typescript@beta \
#    && npm install \
#    && npm run prebuild:prod && npm run build:prod

EXPOSE 8080

ENTRYPOINT ["npm", "run", "server:prod"]
