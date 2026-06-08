import joblib

# Load saved model
model = joblib.load("models/disease_model.pkl")

print("Model Loaded Successfully!")
print(type(model))