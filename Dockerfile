FROM node

RUN git clone https://github.com/venkat-0007/demo.git
WORKDIR /opt/vue_example
RUN npm install

RUN npm build

CMD ["npm", "run", "server"]
