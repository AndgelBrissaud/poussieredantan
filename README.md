# poussieredantan
Site officiel de Poussière d'Antan - Rénovation de meubles anciens par aérogommage.

# Poussière d'Antan

> Site officiel de **Poussière d'Antan**, atelier spécialisé dans la rénovation de meubles anciens par aérogommage.

## À propos

Ce dépôt contient le code source du site web de **Poussière d'Antan**.

L'objectif est de proposer un site moderne, rapide et responsive mettant en valeur le savoir-faire artisanal de l'atelier, les réalisations avant/après et les services proposés.

---

## Stack technique

- React
- TypeScript
- Vite
- Tailwind CSS
- Docker
- Docker Compose
- GitHub Actions
- GitHub Container Registry (GHCR)

---

## Structure du projet

```
.
├── src/
├── public/
├── docker/
├── .github/
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

---

## Développement

### Prérequis

- Git
- Docker
- Docker Compose

### Lancer le projet

```bash
docker compose up --build
```

Le site sera accessible à l'adresse :

```
http://localhost:5173
```

*(ou sur le port configuré dans Docker)*

---

## Déploiement

Le déploiement est automatisé via GitHub Actions.

Workflow :

1. Développement local
2. Push sur GitHub
3. Création d'un tag Git (`v1.0.0`)
4. Construction de l'image Docker
5. Publication sur GitHub Container Registry (GHCR)
6. Mise à jour automatique du serveur

---

## Versionnement

Le projet suit le **Semantic Versioning**.

Exemple :

```
v1.0.0
v1.0.1
v1.1.0
v2.0.0
```

---

## Objectifs

- Présenter l'activité de Poussière d'Antan
- Expliquer l'aérogommage
- Mettre en avant les réalisations avant/après
- Faciliter les demandes de devis
- Optimiser le référencement local
- Garantir un déploiement simple et fiable

---

## 📜 Licence

© Poussière d'Antan. Tous droits réservés.
