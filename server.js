import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Servir les fichiers statiques
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// Route catch-all pour SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(` ^|^e Serveur pr  t sur http://localhost:${PORT}`);
});
