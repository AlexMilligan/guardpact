# Guard Pact Project

This project contains the web application and backend cloud functions for the Guard Pact initiative.

## Project Structure

This project is a monorepo using npm workspaces.

-   `/web-app`: Contains the frontend Astro application.
-   `/functions`: Contains the backend Firebase Cloud Functions written in TypeScript.
-   `/firebase.json`: Configuration for Firebase services, including Hosting.
-   `/package.json`: Defines the project workspaces and root-level scripts for orchestration.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (Version 18 or later)
-   [Firebase CLI](https://firebase.google.com/docs/cli)

### Installation

1.  Clone the repository.
2.  Install all dependencies for both the `web-app` and `functions` workspaces from the root directory:
    ```sh
    npm install
    ```

## Available Scripts

You can run the following scripts from the root directory of the project.

### Web App (`web-app`)

-   `npm run dev`: Starts the development server for the web app.
-   `npm run build`: Builds the web app for production. The output is in `web-app/dist`.
-   `npm run preview`: Previews the production build locally.

### Cloud Functions (`functions`)

-   `npm run build:functions`: Compiles the TypeScript Cloud Functions to JavaScript (output in `functions/lib`).
-   `npm run serve:functions`: Emulates the Cloud Functions locally for testing.
-   `npm run logs:functions`: Displays logs from deployed Cloud Functions.

### Deployment

-   `npm run deploy`: Deploys both the web app to Firebase Hosting and the Cloud Functions.
-   `npm run deploy:hosting`: Deploys only the web app.
-   `npm run deploy:functions`: Deploys only the Cloud Functions.
