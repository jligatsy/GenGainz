"use client";

import React, { useState } from "react";

export default function MultiStepForm() {
const totalSteps = 5;
const [currentStep, setCurrentStep] = useState(1);
const [formData, setFormData] = useState({
  age: "",
  weight: "",
  heightFeet: "",
  heightInches: "",
  sex: "",
  workoutTime : "",
  fitnessLevel: "",
  bodyAreas: [],
  muscleGroups: [],
});

const bodyAreaToMuscleGroups = {
  back: ["lats", "spine", "traps", "upper back", "levator scapulae"],
  cardio: ["cardiovascular system"],
  chest: ["pectorals", "serratus anterior"],
  "lower arms": ["forearms"],
  "lower legs": ["calves"],
  neck: ["levator scapulae", "traps"],
  shoulders: ["delts", "serratus anterior"],
  "upper arms": ["biceps", "triceps"],
  "upper legs": ["abductors", "adductors", "glutes", "hamstrings", "quads"],
  waist: ["abs", "spine"],
};


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const goToStep = (step) => {
  if (step >= 1 && step <= totalSteps) setCurrentStep(step);
};

const nextStep = () => goToStep(currentStep + 1);
const prevStep = () => goToStep(currentStep - 1);


const handleBodyAreaSelection = (area) => {
  setFormData((prev) => {
    const newBodyAreas = prev.bodyAreas.includes(area)
      ? prev.bodyAreas.filter((item) => item !== area) // Remove if already selected
      : [...prev.bodyAreas, area]; // Add if not selected
    return { ...prev, bodyAreas: newBodyAreas };
  });
};

const handleSubmit = async () => {
  // try {
    console.log("Form submitted!", formData);

    // Prepare the request payload
    const payload = {
      age: formData.age,
      weight: formData.weight,
      heightFeet: formData.heightFeet,
      heightInches: formData.heightInches,
      sex: formData.sex,
      workoutTime: formData.workoutTime,
      fitnessLevel: formData.fitnessLevel,
      bodyAreas: formData.bodyAreas,
      muscleGroups: formData.muscleGroups,
    };

    console.log(payload);
    // everything is printed
    


    // Make the API call without API key
    // In your UI code, make sure API_BASE_URL is set to:
    // const API_BASE_URL = "https://x10opvv128.execute-api.us-west-2.amazonaws.com/dev/InputHandler";
    
    //     try {
    //       console.log(API_BASE_URL);
    //         // Notice the /dev/InputHandler in the URL
    //         const response = await fetch(API_BASE_URL, {
    //             method: "POST",
    //             headers: {
    //               // make sure headers are like in lambda 
    //               'Access-Control-Allow-Origin': 'https://main.d2zs4034r8s6r9.amplifyapp.com',
    //               'Access-Control-Allow-Headers': 'Content-Type,Authorization,Access-control-allow-origin',
    //               'Access-Control-Allow-Methods': 'OPTIONS,POST',
    //               'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(payload)
    //         });

    //         console.log("Response status:", response.status);
    //         // const data = await response.json();
    //         // console.log("Response data:", data);
    //         console.log("hellowww");
    //     } catch (error) {
    //         console.error("Error2:", error);
    //     }
    const API_BASE_URL = "https://x10opvv128.execute-api.us-west-2.amazonaws.com/dev/InputHandler";
    try {
        console.log(API_BASE_URL);
        const response = await fetch(API_BASE_URL, {
            method: "POST",
            'headers': {
                'Access-Control-Allow-Origin': 'https://main.d2zs4034r8s6r9.amplifyapp.com',
                'Access-Control-Allow-Methods': '*',
                'Access-Control-Allow-Headers': 'authorization,content-type',
                'Access-Control-Expose-Headers': 'date,x-api-id',
                'Access-Control-Allow-Credentials': 'true',
                'Content-Type': 'application/json'
            },
            credentials: 'include', 
            body: JSON.stringify(payload)
        });

        console.log("Response status:", response.status);
        const data = await response.json();
        console.log("Response data:", data);
    } catch (error) {
        console.error("Error2:", error);
    }

};
  // } catch (error) {
  //   alert("Failed to get user data");
  // }
// };


return (
  <div className="form-content">
    {/* Stepper */}
    <div className="stepper-container">
      {Array.from({ length: totalSteps }, (_, i) => {
        const step = i + 1;
        const isCompleted = step < currentStep;
        const isActive = step === currentStep;

        return (
          <React.Fragment key={step}>
            <div
              className={`step ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
              onClick={() => goToStep(step)}
            >
              <div className="step-number">{step}</div>
              <span className="text-sm mt-2">Step {step}</span>
            </div>
            {step !== totalSteps && (
              <div className={`stepper-connector ${isCompleted ? "completed" : ""} ${isActive ? "active" : ""}`} />
            )}
          </React.Fragment>
        );
      })}
    </div>
    
    <div className="form-container w-full max-w-2xl min-h-[500px] mx-auto p-6 bg-white rounded-lg shadow-md">
    {/* Top prompt - common to all steps or conditional if needed */}
    <h1 className="text-2xl font-semibold text-gray-800 mb-4">
      {currentStep === 1 && "Enter your personal information"}
      {currentStep === 2 && "Choose your workout time"}
      {currentStep === 3 && "What’s your fitness level?"}
      {currentStep === 4 && "Which areas of your body do you want to focus on? (Select all that apply)"}
      {currentStep === 5 && "Choose the muscle groups you care most about (Optional)"}
    </h1>

    {/* Middle content - holds the actual step content */}
    <div className="flex-1 flex flex-col justify-center"></div>
      {/* Step 1: Tell Us About You */}
      {currentStep === 1 && (
        <>

          {/* Age */}
          <div className="mb-5">
            <label className="block">Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter Age (yrs)"
              value={formData.age}
              onChange={handleChange}
            />
          </div>

          {/* Weight */}
          <div className="mb-5">
            <label className="block">Weight</label>
            <input
              type="number"
              name="weight"
              placeholder="Enter Weight (lbs)"
              value={formData.weight}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          
          {/* Height */}
          <div className="mb-5">
            <label className="block">Height</label>
            <div className="flex gap-4">
              <input
                type="number"
                name="heightFeet"
                placeholder="Feet"
                value={formData.heightFeet}
                onChange={handleChange}
              />
              <input
                type="number"
                name="heightInches"
                placeholder="Inches"
                value={formData.heightInches}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Sex */}
          <div className="mb-5">
            <label className="block">Sex</label>
            <div className="flex-inline">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sex"
                  value="male"
                  checked={formData.sex === "male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="sex"
                  value="female"
                  checked={formData.sex === "female"}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </div>
        </>
      )}

    {currentStep === 2 && (
      <>
        <div className="flex gap-4">
          {[15, 30, 45, 60, 75].map((time) => (
            <button
              key={time}
              className={`time-option ${formData.workoutTime === time ? "selected" : ""}`}
              onClick={() => setFormData((prev) => ({ ...prev, workoutTime: time }))}
            >
              {time} min
            </button>
          ))}
        </div>
      </>
    )}

      {currentStep === 3 && (
        <>
          <div className="flex gap-4 flex-wrap">
            {[
              { level: "Beginner", description: "New to gym" },
              { level: "Intermediate", description: "Moderate level" },
              { level: "Expert", description: "Very active" }
            ].map((option) => (
              <button
                key={option.level}
                className={`time-option ${formData.fitnessLevel === option.level ? 'selected' : ''}`}
                onClick={() => setFormData((prev) => ({ ...prev, fitnessLevel: option.level }))}
              >
                <div>
                  <p className="text-lg font-semibold">{option.level}</p>
                  <p className="text-sm">{option.description}</p>
                </div>
              </button>
            ))}
          </div>
        </>
      )}


      {currentStep === 4 && (
          <>
            
            <div className="flex flex-wrap gap-4">
              {[
                'back',
                'cardio',
                'chest',
                'lower arms',
                'lower legs',
                'neck',
                'shoulders',
                'upper arms',
                'upper legs',
                'waist',
              ].map((area) => (
                <button
                  key={area}
                  className={`time-option ${formData.bodyAreas.includes(area) ? 'selected' : ''}`}
                  onClick={() => handleBodyAreaSelection(area)}
                >
                  {area}
                </button>
              ))}
            </div>
          </>
      )}

      {currentStep === 5 && (
        <>
          <div className="flex flex-wrap gap-4">
            {[...new Set(formData.bodyAreas.flatMap(area => bodyAreaToMuscleGroups[area] || []))].map((muscle) => (
              <button
                key={muscle}
                className={`time-option ${formData.muscleGroups.includes(muscle) ? 'selected' : ''}`}
                onClick={() => {
                  setFormData((prev) => {
                    const isSelected = prev.muscleGroups.includes(muscle);
                    const newGroups = isSelected
                      ? prev.muscleGroups.filter(m => m !== muscle)
                      : [...prev.muscleGroups, muscle];
                    return { ...prev, muscleGroups: newGroups };
                  });
                }}
              >
                {muscle}
              </button>
            ))}
          </div>
        </>
      )}

      
    </div>

    {/* Navigation */}
    <div className="navigation-buttons flex justify-between mt-8">
      <button
        onClick={prevStep}
        disabled={currentStep === 1}
        className="px-6 py-3 bg-gray-300 text-gray-700 rounded-full font-semibold disabled:opacity-50"
      >
        Back
      </button>

      <div className="next-button-container">
        {currentStep === totalSteps ? (
          <button
            onClick={handleSubmit}
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Submit
          </button>
        ) : (
          <button
            onClick={nextStep}
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Next
          </button>
        )}
      </div>
    </div>
</div>
  
);
}

