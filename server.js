const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Spune serverului să trimită fișierele din folderul "public"
app.use(express.static('public'));

app.get('/api/produse', (req, res) => {
    const produseTest = [
        { id: 1, nume: "Tricou Personalizat", pret: 100 },
        { id: 2, nume: "Cană Cafea", pret: 35 }
    ];
    res.json(produseTest);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`🚀 Serverul a pornit cu succes pe portul ${PORT}`);
});
