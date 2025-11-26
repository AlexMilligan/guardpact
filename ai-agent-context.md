# Agent Context Helper

This file provides essential context for the AI assistant to understand the project structure and development workflow.

## Project Overview

This is a monorepo with two workspaces:

- `web-app`: A web application built with Astro Starlight.
- `functions`: Firebase Functions for the backend.

## Development Workflow

### NPM Scripts

**Always use the npm scripts defined in the root `package.json` file.** These scripts are configured to correctly run commands within the appropriate workspace.

For example, to start the development server for the web app, run `npm run dev` from the project root, which in turn executes `npm run dev --workspace=web-app`.

Full details are available in the [README](README.md).

#### NPM Script Example: Deployment

To deploy the entire project (both the web app and the Firebase Functions), run the `npm run deploy` script from the project root. This script will build the web app and then deploy both the hosting and functions to Firebase.

### Framework: `web-app`

The `web-app` is built using the [Astro Starlight](https://starlight.astro.build/) framework. Please reference Astro and Starlight documentation appropriately or correct features and usage before forming your suggestions.

Custom components exist to increase reusable content. Please recommend the creation of components where the possibility of content reuse across the site is significant.

### Framework: `functions`

This uses cloud functions for Firebase, since it's natively available, and since my preference for Astro Actions can't be implemented in the Firebase ecosystem without significant workaround effort (e.g., building a custom adapter).

## Development Goals

1. Make simple, straightforward changes. Do not jump through hoops or add unecessary complexity.
2. Utilize SEO tactics to rank high in search engine indexing.

Thanks!