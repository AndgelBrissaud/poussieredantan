# Poussière d'Antan

![CI](https://github.com/AndgelBrissaud/poussieredantan/actions/workflows/ci.yml/badge.svg)

Site officiel de **Poussière d'Antan**, atelier spécialisé dans la rénovation de meubles anciens par aérogommage.

## Présentation

Ce projet contient le code source du site web de Poussière d'Antan.

L'objectif est de créer une vitrine numérique moderne permettant de présenter :

- le savoir-faire artisanal de l'atelier ;
- les techniques de rénovation utilisées ;
- les réalisations avant/après ;
- les prestations proposées ;
- les informations de contact.

Le site est conçu pour être performant, responsive et optimisé pour le référencement local.

---

## Stack technique

### Frontend

- React
- TypeScript
- Vite
- ESLint

### Conteneurisation

- Docker
- Docker Compose

### CI/CD

- GitHub Actions
- GitHub Container Registry (GHCR)

---

## Architecture du projet

```
poussieredantan/
│
├── public/                 # Ressources statiques
│
├── src/                    # Code source React
│   ├── assets/             # Images et ressources
│   ├── components/         # Composants réutilisables
│   ├── App.tsx             # Composant principal
│   └── main.tsx            # Point d'entrée React
│
├── .github/
│   └── workflows/          # Workflows GitHub Actions
│
├── Dockerfile              # Image Docker de développement
├── docker-compose.yml      # Configuration Docker Compose
├── package.json            # Dépendances et scripts npm
└── README.md
```

---

## Installation locale

### Prérequis

- Node.js 22+
- npm
- Docker Desktop

---

## Développement avec npm

Installer les dépendances :

```bash
npm install
```

Lancer le serveur de développement :

```bash
npm run dev
```

L'application sera disponible sur :

```
http://localhost:5173
```

---

## Développement avec Docker

Construire et lancer le conteneur :

```bash
docker compose up --build
```

L'application sera accessible sur :

```
http://localhost:5173
```

Les modifications du code source sont automatiquement prises en compte grâce au Hot Module Replacement (HMR).

Pour arrêter les conteneurs :

```bash
docker compose down
```

---

## Scripts disponibles

### Développement

```bash
npm run dev
```

Lance le serveur de développement Vite.

### Vérification du code

```bash
npm run lint
```

Analyse le code avec ESLint.

### Build production

```bash
npm run build
```

Compile l'application pour un environnement de production.

---

## Intégration continue

Chaque modification envoyée sur la branche principale déclenche automatiquement un workflow GitHub Actions.

Le pipeline vérifie :

1. Installation des dépendances
2. Analyse du code avec ESLint
3. Compilation de l'application

Workflow :

```
Git Push
   |
   v
GitHub Actions
   |
   +-- npm install
   |
   +-- npm run lint
   |
   +-- npm run build
   |
   v
Validation réussie
```

---

## Gestion des versions

Le projet utilise le versionnement sémantique :

```
MAJEUR.MINEUR.CORRECTIF
```

Exemples :

```
v1.0.0
v1.1.0
v1.1.1
```

Les versions stables seront publiées via des tags Git.

Exemple :

```bash
git tag v1.0.0
git push origin v1.0.0
```

---

## Déploiement prévu

L'objectif est d'avoir une chaîne de déploiement automatisée :

```
Développement local
        |
        v
Git Commit
        |
        v
Git Push
        |
        v
GitHub Actions
        |
        v
Build Docker
        |
        v
GitHub Container Registry
        |
        v
Serveur de production
        |
        v
Site en ligne
```

---

## Roadmap

### Infrastructure

- [x] Initialisation du projet React
- [x] Configuration TypeScript
- [x] Configuration ESLint
- [x] Environnement Docker de développement
- [x] GitHub Actions CI
- [ ] Image Docker de production
- [ ] Publication automatique GHCR
- [ ] Déploiement automatique

### Site

- [ ] Page d'accueil
- [ ] Présentation de l'atelier
- [ ] Explication de l'aérogommage
- [ ] Galerie avant/après
- [ ] Présentation des réalisations
- [ ] Formulaire de contact
- [ ] Optimisation SEO

---

## Licence

Projet privé développé pour Poussière d'Antan.

Tous droits réservés.