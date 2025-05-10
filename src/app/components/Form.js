// import React, { useState } from 'react';

// export default function Form({ onSubmit }) {
//   const [age, setAge] = useState('');
//   const [height, setHeight] = useState('');
//   const [weight, setWeight] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ age, height, weight });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Age:</label>
//       <input
//         type="number"
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//         placeholder="Age"
//       />
//       <label>Height (cm):</label>
//       <input
//         type="number"
//         value={height}
//         onChange={(e) => setHeight(e.target.value)}
//         placeholder="Height"
//       />
//       <label>Weight (kg):</label>
//       <input
//         type="number"
//         value={weight}
//         onChange={(e) => setWeight(e.target.value)}
//         placeholder="Weight"
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
