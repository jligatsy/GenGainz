// src/app/workout/page.js

"use client";

import React, { useState, useEffect } from "react";
import "../styles/workout-page.css";

export default function WorkoutPage() {
  const [workoutData, setWorkoutData] = useState({});

  useEffect(() => {
    // Retrieve workout data from session storage
    const storedData = sessionStorage.getItem("workoutData");
    if (storedData) {
      setWorkoutData(JSON.parse(storedData));
    }
  }, []);

  return (
    <div className="workout-container">
      <h1 className="title">Your Personalized Workout</h1>
      
      <div className="card-grid">
        {Object.entries(workoutData).map(([exerciseName, details], index) => (
          <div key={index} className="card">
            <h3 className="exercise-name">{exerciseName}</h3>
            <p><strong>Sets:</strong> {details.sets}</p>
            <p><strong>Reps:</strong> {details.reps}</p>
            <p><strong>Intensity:</strong> {details.intensity}</p>
            <p><strong>Rest:</strong> {details.rest}</p>
            <p><strong>Instructions:</strong></p>
            <ul>
              {details.instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
