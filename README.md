# 🩺 Disease Prediction System — Machine Learning Based Symptom Analyzer

![Python](https://img.shields.io/badge/Python-3.11-blue?style=flat\&logo=python)
![Flask](https://img.shields.io/badge/Flask-Backend-black?style=flat\&logo=flask)
![React](https://img.shields.io/badge/React-18-61DAFB?style=flat\&logo=react\&logoColor=black)
![Scikit-Learn](https://img.shields.io/badge/Scikit--Learn-ML-orange?style=flat\&logo=scikitlearn)
![Random Forest](https://img.shields.io/badge/Random%20Forest-Classifier-green?style=flat)
![Vite](https://img.shields.io/badge/Vite-Build-purple?style=flat\&logo=vite)

> A Machine Learning-powered healthcare application that predicts probable diseases based on user-selected symptoms using a Random Forest Classifier and provides confidence scores, disease information, and precautionary measures.

---

# 📌 What Is This?

Disease Prediction System is a full-stack Machine Learning web application designed to assist users in identifying possible diseases based on symptoms.

The application allows users to:

* Select symptoms through an interactive interface
* Predict likely diseases using Machine Learning
* View confidence scores for predictions
* Read disease descriptions
* Get precautionary measures
* Receive instant prediction results

This project combines Machine Learning, Flask APIs, and a modern React frontend to deliver a user-friendly healthcare assistant.

---

# ✨ Features

| Feature                | Description                      |
| ---------------------- | -------------------------------- |
| 🩺 Disease Prediction  | Predict diseases from symptoms   |
| 🤖 Random Forest Model | ML-based disease classification  |
| 📊 Confidence Score    | Prediction confidence percentage |
| 📋 Disease Information | Description of predicted disease |
| ⚠️ Precautions         | Suggested preventive measures    |
| ⚡ Fast Predictions     | Instant symptom analysis         |
| 🎨 Modern UI           | Clean and responsive interface   |
| 📱 Mobile Friendly     | Responsive across devices        |

---

# 🏗️ Architecture

```text
Frontend (React + Vite)
        │
        ▼
User Selects Symptoms
        │
        ▼
Flask API Backend
        │
        ▼
Random Forest ML Model
        │
        ▼
Disease Prediction
        │
        ▼
Result + Confidence Score + Precautions
```

---

# 🛠️ Tech Stack

## Frontend

| Technology   | Usage               |
| ------------ | ------------------- |
| React.js     | User Interface      |
| React Router | Navigation          |
| Vite         | Frontend Build Tool |
| CSS3         | Styling             |
| Lucide React | Icons               |

---

## Backend

| Technology | Usage               |
| ---------- | ------------------- |
| Python     | Backend Development |
| Flask      | REST API            |
| Pandas     | Dataset Processing  |

---

## Machine Learning

| Technology               | Usage                    |
| ------------------------ | ------------------------ |
| Scikit-Learn             | Machine Learning Library |
| Random Forest Classifier | Disease Prediction Model |
| Pickle                   | Model Saving & Loading   |

---

# 📁 Folder Structure

```text
Disease-Prediction/
│
├── backend/
│   ├── dataset/
│   │   ├── training_data.csv
│   │   └── test_data.csv
│   │
│   ├── models/
│   │   └── disease_model.pkl
│   │
│   ├── app.py
│   ├── train_model.py
│   ├── test_model.py
│   └── check_data.py
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Predict.jsx
│   │   │   ├── Result.jsx
│   │   │   └── About.jsx
│   │   │
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# ⚙️ Installation

## Prerequisites

* Python 3.10+
* Node.js
* npm
* Git

---

# 🚀 Backend Setup

```bash
cd backend

pip install flask pandas scikit-learn

python app.py
```

Backend runs on:

```text
http://localhost:5000
```

---

# 🚀 Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# 🧠 Machine Learning Workflow

1. Collect symptom dataset
2. Preprocess training data
3. Train Random Forest Classifier
4. Evaluate model performance
5. Save trained model (.pkl)
6. Load model through Flask API
7. Predict disease from symptoms
8. Display results in React frontend

---

# 💡 How to Use

1. Open the application.
2. Select symptoms from the available list.
3. Click the Predict button.
4. Wait for the model prediction.
5. View:

   * Predicted Disease
   * Confidence Score
   * Disease Information
   * Precautions

---

# 🌍 Real World Applications

* Preliminary health assessment
* Healthcare assistance systems
* Symptom checker platforms
* Medical learning applications
* Clinical decision support systems

---

# 📊 Prediction Output

The application displays:

* Predicted Disease
* Confidence Percentage
* Disease Description
* Precautionary Measures
* Other Possible Conditions

---

# 🚧 Current Limitations

* Prediction depends on available dataset
* No doctor consultation integration
* No patient history analysis
* Limited disease coverage

---

# 🔮 Future Improvements

* [ ] Multiple disease prediction ranking
* [ ] Disease severity analysis
* [ ] Doctor recommendations
* [ ] User authentication
* [ ] Prediction history
* [ ] Cloud deployment
* [ ] AI Health Assistant Chatbot

---

# 👨‍💻 Author

## Sathvik M S

Aspiring Machine Learning Engineer & Full Stack Developer

GitHub: GitHub: https://github.com/sathvikms1720-droid

---

# 📜 License

This project is developed for educational and learning purposes.
