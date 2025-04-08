# Todo_Liste
Parfait ! Voici un fichier `README.md` complet, **rassemblant** toutes les sections propres et prêtes à l’emploi pour ton projet **Todo List MERN + Docker** :

---

```md
# 📝 Todo List MERN + Docker

## 🚀 Présentation du projet

Cette application est une simple Todo List réalisée avec le stack **MERN** (MongoDB, Express, React, Node.js) et containerisée avec **Docker**.  
Elle permet aux utilisateurs d’ajouter, modifier et supprimer des tâches via une interface intuitive.

## 🧰 Technologies utilisées

- 🌐 **Frontend** : React.js
- 🛠️ **Backend** : Node.js, Express.js
- 🗃️ **Base de données** : MongoDB
- 🐳 **Conteneurisation** : Docker, Docker Compose

## 🛠️ Instructions de build et d’exécution locale

### 1. Cloner le projet

```bash
git clone https://github.com/AliELHamadi37/Todo_Liste.git
cd Todo_Liste
```

### 2. Construire et exécuter avec Docker Compose

```bash
docker-compose up --build
```

- Frontend : `http://localhost:3001`
- Backend API : `http://localhost:5000/api/todos`
- MongoDB : Port `27017`


---

## 📦 Lien vers l’image Docker (Docker Hub)

- 🔗 **Backend** : [elhamadiinnovator/todo-app-backend](https://hub.docker.com/r/elhamadiinnovator/todo-app-backend)
- 🔗 **Frontend** : [elhamadiinnovator/todo-app-frontend](https://hub.docker.com/r/elhamadiinnovator/todo-app-frontend)

---

## ⚙️ Commandes utiles

### Docker (manuel)

```bash
# Backend
docker build -t elhamadiinnovator/todo-app-backend ./server
docker run -p 5000:5000 elhamadiinnovator/todo-app-backend

# Frontend
docker build -t elhamadiinnovator/todo-app-frontend ./client
docker run -p 3000:80 elhamadiinnovator/todo-app-frontend
```

### Docker Compose

```bash
# Lancer le projet
docker-compose up --build

# Arrêter les conteneurs
docker-compose down
```

---

## 👨‍💻 Auteur

- Ali El Hamadi
  📂 GitHub : [AliELHamadi37](https://github.com/AliELHamadi37)  
  🐳 Docker Hub : [elhamadiinnovator](https://hub.docker.com/u/elhamadiinnovator)
-Rim AKRACH
   📂 GitHub : [RimAkrach](https://github.com/RimAkrach83)  
  🐳 Docker Hub : [akracherim](https://hub.docker.com/u/akracherim)
  
  

---



---

```


