import joblib
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
import pandas as pd

# Load dataset
df = pd.read_csv("dataset/training_data.csv")

# Remove useless column
df = df.drop(columns=["Unnamed: 133"])

# Features (Symptoms)
X = df.drop("prognosis", axis=1)

# Target (Disease)
y = df["prognosis"]

print("Features Shape:")
print(X.shape)

print("\nTarget Shape:")
print(y.shape)
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X,
    y,
    test_size=0.2,
    random_state=42
)

print("Training Data:", X_train.shape)
print("Testing Data:", X_test.shape)
# Create Model
model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)

# Train Model
model.fit(X_train, y_train)

# Predict
y_pred = model.predict(X_test)

# Accuracy
accuracy = accuracy_score(y_test, y_pred)

print("\nAccuracy:")
print(accuracy)
joblib.dump(model, "models/disease_model.pkl")

print("\nModel Saved Successfully!")