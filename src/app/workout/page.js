// src/app/workout/page.js
"use client";

import React, { useState, useEffect } from "react";
import "../styles/workout-page.css";

export default function WorkoutPage() {
  const [workoutData, setWorkoutData] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);

    // Retrieve workout data from session storage
    const storedData = sessionStorage.getItem("workoutData");
    if (storedData) {
      setWorkoutData(JSON.parse(storedData));
    }
  }, []);

  const exerciseEntries = Object.entries(workoutData);

  return (
    <div className="workout-container">
    <img src="/finallogo.png" alt="Logo" className="logo" />
      <h1 className="title">Your Personalized Workout</h1>

      <div className="info">
        <strong>Workout time:</strong> 60 min &nbsp;|&nbsp;
        <strong>Level:</strong> Intermediate &nbsp;|&nbsp;
        <strong>Focus:</strong> Glutes, Abs, Back
      </div>

      <div className="button-wrapper">
        <button className="regenerate-btn">🔁 Regenerate</button>
      </div>

      <div className="card-grid">
        {exerciseEntries.map(([exerciseName, details], index) => (
          <div className="card" key={index}>
            <div className="card-number">{index + 1}</div>
            <h3 className="exercise-name">{exerciseName}</h3>
            <p className="sets">{details.sets} x {details.reps} reps</p>
            <p><strong>Intensity:</strong> {details.intensity}</p>
            <p><strong>Rest:</strong> {details.rest}</p>
            <p><strong>Equipment:</strong> {details.equipment || "N/A"}</p>
            <p><strong>Duration:</strong> {details.duration || "~ 6 min"}</p>
            <p><strong>Instructions:</strong></p>
            <ul>
              {details.instructions?.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
            <a href="#" className="details-link">View more details</a>
          </div>
        ))}
      </div>
    </div>
  );
  
}
