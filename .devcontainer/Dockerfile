FROM ubuntu:22.04


RUN apt update  && \
 apt install -y curl 

RUN  apt -y install sudo


RUN apt-get install -y build-essential
# Install nodejs 

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash - && \
sudo apt-get install -y nodejs 

# Install Yarn 
# RUN corepack enable && \yarn 
# corepack prepare yarn@stable --activate

RUN npm install --global yarn

RUN yarn add babel-cli@6.24.1
RUN yarn add live-server@1.2.1 

# Install Pytho 2.7 in dev container
RUN sudo apt update && sudo apt -y install python2


# This dev container does not include live-server, you must reinstall it you rebuild the dev container.