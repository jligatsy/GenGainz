"use client";
import React from 'react';

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>StayFit - Your Personal Workout Planner</h1>
      <div style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Age:</label>
          <input type="text" placeholder="Enter age" style={styles.input} disabled />
        </div>
        <div style={styles.inputGroup}>
          <label>Height (cm):</label>
          <input type="text" placeholder="Enter height" style={styles.input} disabled />
        </div>
        <div style={styles.inputGroup}>
          <label>Weight (kg):</label>
          <input type="text" placeholder="Enter weight" style={styles.input} disabled />
        </div>
        <button style={styles.button} disabled>Submit</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f7f7f7',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    padding: '8px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    marginTop: '4px',
  },
  button: {
    marginTop: '10px',
    padding: '8px',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'not-allowed',
  },
};
