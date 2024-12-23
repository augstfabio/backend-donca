import express from 'express';
import mongoose from 'mongoose';
import { vaccines } from './routes/vaccineRoutes.js';
import { posts } from './routes/postRoutes.js';
import { pets } from './routes/petRoutes.js';
import 'dotenv/config'; 


const app = express();
const port = 3000;
app.use(express.json());
mongoose.connect(`mongodb+srv://augstfabio:cbWOMu8HVXmfEntm@donkacluster.glcdu.mongodb.net/?retryWrites=true&w=majority&appName=donkacluster`).then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

app.get('/', (req, res) => {
    res.send('Servidor Express com import está funcionando!');
});

app.use('/vacinas', vaccines)
app.use('/posts', posts)
app.use('/pet', pets)

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
