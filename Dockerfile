FROM node:14

# set the working directory inside the container to the 'webapp' folder
WORKDIR /app

# copy only the package files from the 'webapp' folder
COPY webapp/ ./

# install dependencies
RUN npm install

# copy the entire contents of the 'webapp' folder
# COPY webapp/ .

# expose port 80
EXPOSE 80

# start the application
CMD ["node", "app.js"]

