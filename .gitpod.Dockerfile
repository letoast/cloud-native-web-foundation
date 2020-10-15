FROM gitpod/workspace-full-vnc
USER gitpod

# Install Cypress dependencies.
RUN sudo apt-get update -q && \
 sudo DEBIAN_FRONTEND=noninteractive apt-get install -yq \
   libgtk2.0-0 \
   libgtk-3-0 \
   libnotify-dev \
   libgconf-2-4 \
   libnss3 \
   libxss1 \
   libasound2 \
   libxtst6 \
   xauth \
   xvfb \
 && sudo rm -rf /var/lib/apt/lists/*