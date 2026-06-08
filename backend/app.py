from flask import Flask, jsonify, request
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

model = joblib.load("models/disease_model.pkl")

df = pd.read_csv("dataset/training_data.csv")
df = df.drop(columns=["Unnamed: 133"])

symptom_columns = list(df.drop("prognosis", axis=1).columns)

@app.route("/predict", methods=["POST"])
def predict():

    data = request.json
    symptoms = data.get("symptoms", [])

    input_data = [0] * len(symptom_columns)

    for symptom in symptoms:
        if symptom in symptom_columns:
            idx = symptom_columns.index(symptom)
            input_data[idx] = 1
    print("Symptoms Received:", symptoms)
    print("Matched Symptoms:", [s for s in symptoms if s in symptom_columns])
    print("Vector Sum:", sum(input_data))

    input_df = pd.DataFrame(
    [input_data],
    columns=symptom_columns
)

    prediction = model.predict(input_df)[0]

    confidence = max(
        model.predict_proba(input_df)[0]
    ) * 100

    probabilities = model.predict_proba(input_df)[0]

    classes = model.classes_

    top_indices = probabilities.argsort()[-5:][::-1]

    top_predictions = []

    for idx in top_indices:
        top_predictions.append({
        "disease": classes[idx],
        "confidence": round(probabilities[idx] * 100, 2)
    })

    return jsonify({
    "disease": prediction,
    "confidence": round(confidence, 2),
    "top_predictions": top_predictions
})
if __name__ == "__main__":
    app.run(debug=True)