import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import dalleRoutes from './routes/dalle.routes.js';

const app = express(); // Initialize Express app

dotenv.config();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use('/api/v1/dalle', dalleRoutes);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Hello from DALL.E" });
});


app.listen(8080, () => console.log('Server has started on port 8080'));
