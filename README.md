# Kefas AI API

A **Kefas AI API** é uma API REST desenvolvida com **Node.js + Express** que integra a **Google Generative AI (Gemini)** para criar um assistente virtual **católico**, capaz de responder perguntas baseadas na **Bíblia**, **Catecismo**, **Tradições**, **Sacramentos**, **Magistério** e **ensinamentos da Igreja**.

> “Tu és Pedro (Kefas), e sobre esta pedra edificarei a minha Igreja.” — *Mt 16,18*

---

### Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Google Generative AI](https://ai.google.dev/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [CORS](https://www.npmjs.com/package/cors)

---

### Instalação e execução local

#### Clonar o repositório
git clone https://github.com/victorpessoa-dev/kefas-ai-v1.git
cd Kefas-AI-API

#### Instalar dependências
npm install

#### Rodar em modo de desenvolvimento
npm run dev

#### Ou iniciar normalmente
npm start

---


### Rotas da API

#### POST /chat

Gera uma resposta do assistente católico com base na mensagem enviada.

Requisição:
    `{
    "message": "O que é a Eucaristia?"
    }
    `

Resposta:
    `{
    "reply": "A Eucaristia é o sacramento do Corpo e Sangue de Cristo..."
    }`

---

### Licença

Este projeto está sob a licença ISC — sinta-se à vontade para usar e adaptar.

---

### Autor

Victor Pessoa 
