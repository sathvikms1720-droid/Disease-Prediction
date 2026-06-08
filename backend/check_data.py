import pandas as pd

df = pd.read_csv("dataset/training_data.csv")
df = df.drop(columns=["Unnamed: 133"])

symptoms = list(df.drop("prognosis", axis=1).columns)

print("Total Symptoms:", len(symptoms))

for symptom in symptoms:
    print(symptom)