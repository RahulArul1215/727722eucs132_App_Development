# Smart Campus Assistant – AI-Powered Learning Companion

## 📌 Project Overview
Smart Campus Assistant is an AI-powered learning assistant designed to help college students
study more efficiently from their lecture notes, PDFs, and course materials.

The application allows students to upload documents and interact with them using natural
language. It provides accurate answers, summaries, and practice quizzes using Generative AI
and Retrieval-Augmented Generation (RAG).

---

## 🚀 Key Features
- Upload lecture notes, PDFs, and documents
- Ask questions and get AI-generated answers sourced from uploaded content
- Automatic document summarization
- AI-generated practice quizzes for revision
- Responsive UI (Desktop & Mobile)
- Clean and intuitive user experience

---

## 🧠 Tech Stack

### Frontend
- React.js
- CSS (Responsive Design)

### Backend
- FastAPI
- Python

### AI / NLP
- Large Language Model (LLM)
- Semantic embeddings
- Retrieval-Augmented Generation (RAG)

### Database
- PostgreSQL / SQLite / MongoDB

---

## ⚙️ Installation & Setup

### Backend Setup
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
