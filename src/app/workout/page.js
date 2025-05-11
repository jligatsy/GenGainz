// src/app/workout/page.js

import React from "react";
import "../styles/workout-page.css"; // adjust if needed

const exercises = [
  { name: "Barbell Squat", equipment: "Barbell", duration: "~ 6 min" },
  { name: "Push-Up", equipment: "Barbell", duration: "~ 6 min" },
  { name: "Lunge", equipment: "Barbell", duration: "~ 6 min" },
  { name: "Plank", equipment: "Barbell", duration: "~ 6 min" },
  { name: "Dumbell Curl", equipment: "Barbell", duration: "~ 6 min" },
  { name: "Jump Squat", equipment: "Barbell", duration: "~ 6 min" },
];

export default function WorkoutPage() {
  return (
    <div className="workout-container">
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
        {exercises.map((ex, idx) => (
          <div key={idx} className="card">
            <div className="play-button">▶</div>
            <h3 className="exercise-name">{ex.name}</h3>
            <p className="sets">3 x 12 reps</p>
            <p><strong>Equipment:</strong> {ex.equipment}</p>
            <p><strong>Duration:</strong> {ex.duration}</p>
            <a href="#" className="details-link">View more details</a>
          </div>
        ))}
      </div>
    </div>
  );
}
