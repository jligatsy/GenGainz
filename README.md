# GenGainz - Personal Fitness App - AWS Hackathon
Josephine Ligatsyah, Ashneet Rathora, Allison Yeh

## Overview

The Personal Fitness App is designed to help college students create and manage personalized workout plans. The app provides a user-friendly interface to track workout routines, set goals, and stay motivated. This project was developed as part of the AWS Hackathon.

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
git clone https://github.com/yourusername/personal-fitness-app.git
cd personal-fitness-app
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
