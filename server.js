const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Définir le chemin vers le dossier build/web
const buildPath = path.join(__dirname, '.', );

// Servir les fichiers statiques
app.use(express.static(buildPath));

// Rediriger toutes les autres routes vers index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur http://localhost:${PORT}`);
});
