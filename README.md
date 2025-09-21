# Wanderers – Jharkhand Tourism Chatbot

Wanderers is a web application that helps users explore tourism in Jharkhand, India. It features an interactive chatbot powered by Google Gemini, answering only Jharkhand tourism-related queries.

---

## Features

- **Interactive Chatbot:**  
  Ask questions about Jharkhand tourism and get instant answers.

- **Modern UI:**  
  Built with React and Tailwind CSS for a clean, responsive experience.

- **AI-Powered:**  
  Uses Google Gemini API for natural language responses.

---

## Project Structure

```
Wanderers/
├── backend/                # Node.js Express backend (chatbot API)
│   ├── server.js
│   └── .env
├── src/                    # React frontend
│   └── components/
│       └── chatbot/
│           └── chatbot.jsx
└── ...
```

---

## Getting Started

### 1. Clone the Repository

```sh
git clone https://github.com/yourusername/wanderers.git
cd wanderers
```

### 2. Setup the Backend

```sh
cd backend
npm install
```

- Create a `.env` file in `backend/`:
  ```
  GOOGLE_API_KEY=your_google_api_key_here
  ```

- Start the backend server:
  ```sh
  node server.js
  ```

### 3. Setup the Frontend

```sh
cd ..
npm install
npm start
```

---

## Usage

- Open [http://localhost:3000](http://localhost:3000) in your browser.
- Click the chat icon at the bottom-right to start chatting about Jharkhand tourism.

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, Axios
- **Backend:** Node.js, Express, Google Gemini API

---

## Environment Variables

- `GOOGLE_API_KEY` – Your Google Gemini API key (see [how to get it](https://ai.google.dev/gemini-api/docs/quickstart)).

---

## License

MIT

---

## Credits

- [Google Gemini API](https://ai.google.dev/)
- [Lucide Icons](https://lucide.dev/)
