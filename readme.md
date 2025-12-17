<p align="center">
  <a href="" target="_blank">
    <img src="assets/icons/logo_512.png" width="200" alt="ACI News Logo">
  </a>
</p>

<p align="center">
  <a href="https://github.com/HackerGit29/aci_2025/actions">
    <img src="https://github.com/HackerGit29/aci_2025/workflows/Android%20Release/badge.svg" alt="Build Status">
  </a>
  <img src="https://img.shields.io/badge/Platform-Android%20%7C%20iOS-blue?style=flat&logo=flutter" alt="Platform">
  <img src="https://img.shields.io/badge/Dart-3.0%2B-0175C2?style=flat&logo=dart" alt="Dart Version">
  <img src="https://img.shields.io/badge/Flutter-3.0%2B-02569B?style=flat&logo=flutter" alt="Flutter Version">
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
</p>

<hr>

<h1>Description du Projet</h1>

**ACI News** est une application mobile d'actualité développée en Flutter, conçue pour :"

<p>1- Informer les utilisateurs en temps réel grâce à un flux d'actualités catégorisé et fluide.</p>
<p>2- Offrir une expérience utilisateur optimale même en mode hors ligne grâce à une synchronisation locale avancée.</p>
<p>3- Permettre la gestion des favoris et la réception de notifications push pour les articles importants.</p>

<h1>Technologies du Projet</h1>

<ul>
  <li>
    <img src="https://img.shields.io/badge/Flutter-3.x-%2302569B?style=for-the-badge&logo=flutter&logoColor=white" alt="Flutter">
  </li>
  <li>
    <img src="https://img.shields.io/badge/Dart-3.x-%230175C2?style=for-the-badge&logo=dart&logoColor=white" alt="Dart">
  </li>
  <li>
    <img src="https://img.shields.io/badge/GetX-State%20Management-%23E040FB?style=for-the-badge&logo=flutter&logoColor=white" alt="GetX">
  </li>
  <li>
    <img src="https://img.shields.io/badge/GraphQL-Client-%23E10098?style=for-the-badge&logo=graphql&logoColor=white" alt="GraphQL">
  </li>
  <li>
    <img src="https://img.shields.io/badge/Hive-NoSQL%20DB-%23FFA000?style=for-the-badge&logo=firebase&logoColor=white" alt="Hive">
  </li>
  <li>
    <img src="https://img.shields.io/badge/Workmanager-Background%20Tasks-%234CAF50?style=for-the-badge&logo=android&logoColor=white" alt="Workmanager">
  </li>
  <li>
    <img src="https://img.shields.io/badge/GitHub%20Actions-CI%2FCD-%232088FF?style=for-the-badge&logo=github-actions&logoColor=white" alt="GitHub Actions">
  </li>
</ul>

<h1>Architecture & Fonctionnalités Techniques</h1>

Le projet suit une architecture **MVC optimisée** avec une séparation claire des responsabilités :

- **State Management**: Utilisation de **GetX** pour une gestion d'état réactive et légère, ainsi que pour la gestion des routes et des dépendances.
- **Backend Communication**:
  - **GraphQL** (`graphql_flutter`) pour des requêtes optimisées vers le serveur.
  - **Offline First**: Utilisation de **Hive** pour le cache local, permettant à l'application de fonctionner sans connexion internet.
  - **SyncService**: Service de synchronisation intelligent qui gère la mise à jour des données en arrière-plan.
- **Interface Utilisateur**:
  - Design adaptatif (Light/Dark mode) basé sur Material 3.
  - Widgets personnalisés animés (Fluid Carousel, Animations staggered).
  - Support de la localisation (i18n).
- **Notifications**: Intégration de `flutter_local_notifications` et `workmanager` pour les alertes en arrière-plan.

<h1>Informations de Contact</h1>
<ul>
  <li>
    <img src="https://img.shields.io/badge/GitHub-HackerGit29-%23181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
    <span><a href="https://github.com/HackerGit29">HackerGit29</a></span>
  </li>
  <!-- Ajoutez d'autres contacts ici si nécessaire -->
</ul>
