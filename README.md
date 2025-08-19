# CRUX - AI Virtual Assistant 🧠 | MERN Stack

A responsive, intelligent virtual assistant web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This assistant processes voice commands and responds in real-time, showcasing seamless integration between AI capabilities and full-stack web technologies.

---

## 📌 Key Features

- 🎤 **Voice Command Input**: Captures and interprets spoken input using the Web Speech API.
- 🤖 **Dynamic AI Responses**: Responds to user queries with relevant output.
- 🖥️ **Modern Frontend**: Built with React.js and styled for responsiveness.
- 🧩 **Modular Backend**: RESTful APIs created with Express.js and Node.js.
- 💾 **MongoDB Integration**: Stores assistant responses or action history.
- 🔐 **Scalable Structure**: Codebase structured for easy expansion and deployment.

---

## 🧰 Tech Stack

| Category      | Technologies                          |
|---------------|----------------------------------------|
| Frontend      | React.js, JavaScript, HTML, CSS        |
| Backend       | Node.js, Express.js                    |
| Database      | MongoDB, Mongoose                      |
| Voice Input   | Web Speech API                         |
| Others        | Axios, dotenv, CORS                    |

---

## 🧠 How It Works

1. **Voice Input**: User speaks into the microphone.
2. **Capture**: React frontend captures audio via the browser's Web Speech API.
3. **Process**: Command is sent to the backend via REST API.
4. **Respond**: The backend interprets the command and responds accordingly.
5. **Feedback**: Response is displayed to the user in the UI and optionally spoken back.

---


## 📂 Project Structure

voice-assistant/
├── backend/
│   ├── config/                  # Configuration files (Cloudinary, DB, JWT)
│   │   ├── cloudinary.js
│   │   ├── db.js
│   │   └── token.js
│   ├── controllers/             # Route handler logic
│   ├── middlewares/            # Middleware (auth, error, etc.)
│   ├── models/                  # Mongoose schemas
│   ├── public/                  # Static files (placeholder: .gitkeep)
│   ├── routes/                  # API routes
│   │   ├── auth.routes.js
│   │   └── user.routes.js
│   ├── gemini.js                # Gemini API integration logic
│   ├── index.js                 # Express app entry point
│   ├── .env                     # Environment variables
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/                  # Static assets (e.g., vite.svg)
│   ├── src/                     # React components and logic
│   ├── index.html               # HTML template
│   ├── vite.config.js           # Vite configuration
│   ├── .gitignore
│   ├── package.json
│   ├── package-lock.json
│   ├── eslint.config.js         # ESLint config
│
├── README.md                    # Project documentation

---

## 🧑‍💻 Author

Aastha Gupta

---

## 📄 License
This project is licensed under the MIT License.


