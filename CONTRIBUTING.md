# Contributing to Guard Pact

First off, thank you for considering contributing to Guard Pact. It's people like you that make this project a success. All contributors are expected to follow our [Code of Conduct](#code-of-conduct).

## Development Goals

1.  **Simplicity:** Make simple, straightforward changes. Do not add unnecessary complexity.
2.  **SEO:** Utilize SEO tactics to rank high in search engine indexing.

## Getting Started

To get started with local development, you'll need to have Node.js and npm installed.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/guardpact/guardpact.org.git
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Start the development server:**
    ```bash
    npm run dev
    ```

## How to Contribute

We welcome contributions of all kinds, from bug reports to new features.

*   **Bug Reports:** If you find a bug, please open an issue on our GitHub repository.
*   **Feature Requests:** If you have an idea for a new feature, please open an issue to discuss it.
*   **Pull Requests:** We welcome pull requests. Please ensure your code adheres to the project's coding standards.

## Project Architecture

This is a **monorepo** project managed using npm workspaces.

### Workspaces

1.  **`web-app` (Frontend):**
    *   **Framework:** [Astro Starlight](https://starlight.astro.build/). Please reference Astro and Starlight documentation.
    *   **Purpose:** The user-facing website. Content is in `web-app/src/content/docs`.
    *   **Components:** Reusable Astro components are in `web-app/src/components`. Please create reusable components when possible.

2.  **`functions` (Backend):**
    *   **Framework:** [Cloud Functions for Firebase](https://firebase.google.com/docs/functions).
    *   **Purpose:** Backend logic. The main entry point is `functions/src/index.ts`.

### NPM Scripts

**There are npm scripts defined in the root `package.json` file that delegate to workspaces appropriately.** No need to `cd` into the workspace to run their scripts, \*cough cough\* gemini.

*   `npm run dev`: Starts the development server for the `web-app`.
*   `npm run deploy`: Deploys the entire project (web app and functions) to Firebase.

Full details for other scripts are available in the `package.json` and [README](README.md).

## AI Assistant Guidelines

As an AI assistant, this entire document serves as your primary context. Pay special attention to:

*   **Project Architecture:** Understand the monorepo structure, frameworks, and file locations.
*   **NPM Scripts:** Always use the root-level npm scripts for all tasks.
*   **Development Goals:** Prioritize simplicity and SEO in your suggestions.

## Code of Conduct

We have adopted the [Contributor Covenant](https://www.contributor-covenant.org/version/2/1/code_of_conduct/) as our code of conduct. Please read it before contributing.
