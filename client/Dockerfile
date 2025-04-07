# Étape 1 : Construire le frontend React avec Node.js
FROM node:16 AS build

# Répertoire de travail
WORKDIR /app

# Copier package.json et package-lock.json
COPY client/package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code frontend et compiler
COPY client/ .
RUN npm run build

# Étape 2 : Utiliser Nginx pour servir l'app React
FROM nginx:alpine

# Copier les fichiers du build de React dans le répertoire Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Exposer le port Nginx
EXPOSE 80

# Lancer Nginx
CMD ["nginx", "-g", "daemon off;"]
