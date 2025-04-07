# Utilisation de l'image officielle de Node.js
FROM node:16

# Répertoire de travail dans le conteneur
WORKDIR /app

# Copier package.json et package-lock.json pour installer les dépendances
COPY server/package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code du serveur dans le conteneur
COPY server/ .

# Exposer le port sur lequel le backend écoute
EXPOSE 5000

# Démarrer l'application Node.js
CMD ["npm", "start"]
