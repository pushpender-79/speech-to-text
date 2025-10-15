# 🎙️ Speech-to-Text App (MERN Stack + Deepgram)

This project converts audio to text using a Speech-to-Text API (Deepgram).  
It’s built with the **MERN stack** — MongoDB, Express.js, React.js, and Node.js — and styled with **Tailwind CSS**.

---

## 🚀 Tech Stack

- **Frontend:** React + Vite + Tailwind CSS
- **Backend:** Node.js + Express.js (to be added in Day 2)
- **Database:** MongoDB / Supabase (to be added later)
- **Speech-to-Text API:** Deepgram
- **Version Control:** Git & GitHub

---

## 🧠 Project Overview

The app allows users to:

- Record or upload audio
- Convert it to text using a Speech-to-Text API
- (Later) Save and view transcriptions in a database

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/pushpender-79/speech-to-text
cd speech-to-text/client

# Install dependencies
npm install

# Run the development server
npm run dev
Open your browser at http://localhost:5173

🖥️ Backend Setup
1. Navigate to server folder
cd ../server

2. Install dependencies
npm install


Dependencies include:

express

cors

multer

dotenv

nodemon (dev dependency)

3. Create a .env file
PORT=5000

4. Start the backend server
npm run dev
Server will run on http://localhost:5000/.

⚡ API Endpoints
Test Server
GET http://localhost:5000/


Response:

"Backend is running 🚀"

Upload Audio
POST http://localhost:5000/upload


Form Data Key: audio

Form Data Value: Choose a file (wav, mp3, etc.)

Response Example:

{
  "message": "File uploaded successfully",
  "file": {
    "fieldname": "audio",
    "originalname": "harvard.wav",
    "encoding": "7bit",
    "mimetype": "audio/wave",
    "destination": "uploads/",
    "filename": "1760551563788.wav",
    "path": "uploads\\1760551563788.wav",
    "size": 3249924
  }
}

✅ Notes

The backend uses Multer to handle file uploads and stores them in the uploads/ folder.

Use Postman to test API endpoints before connecting the frontend.

Make sure the frontend runs on port 5173 and backend on 5000 (or .env configured).
```
