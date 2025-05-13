# GenGainz - Personal Fitness App - Cloud AWS Hackathon (UI Repository)
Josephine Ligatsyah, Ashneet Rathora, Allison Yeh

## Overview
The Personal Fitness App is designed to help college students create and manage personalized workout plans. The app provides a user-friendly interface to track workout routines, set goals, and stay motivated. 

This project was developed as part of the Cloud AWS Hackathon. It originally used AWS Amplify and AWS Lambda, but these services are no longer active. However, the UI remains accessible and is hosted in this GitHub repository.

## Features
- Interactive and responsive UI for cloud-based application.
- Originally integrated with AWS Amplify and AWS Lambda (no longer active).
- UI still accessible for demonstration and showcasing design.

## Project Planning
For an overview of the planning and design process, refer to the Canva document:  
[Planning Document](https://www.canva.com/design/DAGnFBvVT5k/oGR_ZXDo358fj5mD5bo4JA/edit) (optional)

## Technologies Used
* **Frontend:** React, Next.js
* **Backend:** AWS Lambda
* **Deployment:** AWS Amplify
* **Version Control:** GitHub

## Prerequisites
* Node.js (v18+)
* npm (v9+)
* AWS CLI configured with appropriate permissions
* Git

## Setup Instructions

### 1. Clone the Repository

```
git clone https://github.com/jligatsy/GenGainz
```

### 2. Install Dependencies

```
npm install
```

### 3. Set Up Environment Variables

Create a `.env` file in the root directory with the following variables:

```
REACT_APP_AWS_REGION=us-west-2
REACT_APP_API_BASE_URL=https://your-api-url.com
```

### 4. Run the Development Server

```
npm start
```

### 5. Deploying to AWS Amplify

1. Navigate to the AWS Amplify console.
2. Connect the GitHub repository.
3. Deploy the frontend from the Amplify dashboard.


