import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const ggenai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const systemPrompt = `Você é um assistente Católico. Responda **somente** sobre temas da fé católica com base na Bíblia, catecismo, tradições, sacramentos, magistério e ensinamentos da Igreja. 
Se a pergunta não estiver relacionada à fé católica, responda brevemente que só pode ajudar com temas católicos.`;

app.post('/chat', async (req, res) => {
    const { message } = req.body;

    try {
        const model = ggenai.getGenerativeModel({ model: 'gemini-2.5-flash' });

        if (!message || message.trim() === '') {
            return res.status(400).json({ error: 'Message is required' });
        }

        const prompt = `${systemPrompt}
        \nResponda de forma clara e fiel a pergunta abaixo:
        \n"${message}"
        \nResposta do Assistente:`;

        const result = await model.generateContent(prompt);
        const reply = result.response.text() || 'Não consegui gerar uma resposta no momento.';

        res.json({ reply });
    } catch (error) {
        console.error('Error generating response:', error);
        res
            .status(500)
            .json({ error: 'Failed to generate response', details: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
