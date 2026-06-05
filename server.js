const express = require('express');
const cors = require('cors');

const app = express();
// Permitem oricărui site să ceară date de la acest server
app.use(cors());
// Permitem serverului să citească date în format JSON
app.use(express.json());

// 1. Ruta de bază (ca să vedem că serverul merge când intrăm pe link)
app.get('/', (req, res) => {
    res.send('🚀 Salut! Serverul magazinului tău funcționează perfect!');
});

// 2. Ruta care va trimite produsele către site-ul tău (frontend)
app.get('/api/produse', (req, res) => {
    const produseTest = [
        { id: 1, nume: "Tricou Personalizat", pret: 100 },
        { id: 2, nume: "Cană Cafea", pret: 35 }
    ];
    res.json(produseTest);
});

// Pornim serverul
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Serverul a pornit cu succes pe portul ${PORT}`);
});
